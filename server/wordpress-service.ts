/**
 * WordPress REST API Service
 * 
 * Fetches articles from WordPress sites using the WordPress REST API v2
 * Handles pagination, embedded media, author data, and category mapping
 */

import { htmlToBlocks } from '../client/src/lib/html-to-blocks';
import type { ContentBlock } from '../shared/schema';

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      slug: string;
      description: string;
    }>;
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      title: {
        rendered: string;
      };
      media_details?: {
        width: number;
        height: number;
        file: string;
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export interface FetchOptions {
  page?: number;
  perPage?: number;
  search?: string;
  categories?: number[];
  after?: string;
  before?: string;
  orderby?: 'date' | 'modified' | 'title' | 'relevance';
  order?: 'asc' | 'desc';
}

export class WordPressService {
  private baseUrl: string;
  private username?: string;
  private password?: string;

  constructor(baseUrl: string, username?: string, password?: string) {
    // Ensure baseUrl ends without trailing slash
    this.baseUrl = baseUrl.replace(/\/$/, '');
    this.username = username;
    this.password = password;
  }

  /**
   * Fetch a single post by ID from WordPress REST API
   */
  async fetchPostById(postId: number): Promise<WordPressPost> {
    const response = await this.makeRequest(`/wp-json/wp/v2/posts/${postId}?_embed=true`);
    return response.json();
  }

  /**
   * Fetch posts from WordPress REST API
   */
  async fetchPosts(options: FetchOptions = {}): Promise<{
    posts: WordPressPost[];
    total: number;
    totalPages: number;
  }> {
    const {
      page = 1,
      perPage = 10,
      search,
      categories,
      after,
      before,
      orderby = 'date',
      order = 'desc'
    } = options;

    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      orderby,
      order,
      _embed: 'true', // Include author, featured media, and terms
    });

    if (search) params.append('search', search);
    if (categories && categories.length > 0) params.append('categories', categories.join(','));
    if (after) params.append('after', after);
    if (before) params.append('before', before);

    const response = await this.makeRequest(`/wp-json/wp/v2/posts?${params.toString()}`);

    const posts = await response.json();
    const total = parseInt(response.headers.get('X-WP-Total') || '0', 10);
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);

    return {
      posts,
      total,
      totalPages
    };
  }

  /**
   * Fetch categories from WordPress
   */
  async fetchCategories(): Promise<WordPressCategory[]> {
    const response = await this.makeRequest('/wp-json/wp/v2/categories?per_page=100');
    return response.json();
  }

  /**
   * Convert WordPress post to our local format
   */
  async convertToLocalFormat(wpPost: WordPressPost): Promise<{
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    contentBlocks: ContentBlock[];
    featuredImageUrl?: string;
    featuredImageAlt?: string;
    featuredImageTitle?: string;
    authorName?: string;
    categories: number[];
    publishedAt: string;
    wordpressId: number;
    sourceUrl: string;
  }> {
    // Extract plain text from HTML rendered fields
    const title = this.stripHtml(wpPost.title.rendered);
    const excerpt = this.stripHtml(wpPost.excerpt.rendered);
    const content = wpPost.content.rendered;

    // Convert WordPress HTML to content blocks using existing transformer
    let contentBlocks: ContentBlock[] = [];
    try {
      contentBlocks = htmlToBlocks(content);
    } catch (error) {
      console.error('Error converting WordPress HTML to blocks:', error);
      // Fallback: create a single HTML block with the content
      contentBlocks = [{
        id: `html-${Date.now()}`,
        type: 'html',
        position: 0,
        data: { html: content }
      }];
    }

    // Extract featured image if available
    let featuredImageUrl: string | undefined;
    let featuredImageAlt: string | undefined;
    let featuredImageTitle: string | undefined;
    
    if (wpPost._embedded?.['wp:featuredmedia']?.[0]) {
      const media = wpPost._embedded['wp:featuredmedia'][0];
      featuredImageUrl = media.source_url;
      featuredImageAlt = media.alt_text || '';
      featuredImageTitle = this.stripHtml(media.title.rendered);
    }

    // Extract author name
    let authorName: string | undefined;
    if (wpPost._embedded?.author?.[0]) {
      authorName = wpPost._embedded.author[0].name;
    }

    return {
      title,
      slug: wpPost.slug,
      excerpt,
      content,
      contentBlocks,
      featuredImageUrl,
      featuredImageAlt,
      featuredImageTitle,
      authorName,
      categories: wpPost.categories,
      publishedAt: wpPost.date,
      wordpressId: wpPost.id,
      sourceUrl: wpPost.link
    };
  }

  /**
   * Download featured image and return buffer
   */
  async downloadImage(imageUrl: string): Promise<Buffer> {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

  /**
   * Make authenticated request to WordPress REST API
   */
  private async makeRequest(path: string): Promise<Response> {
    const url = `${this.baseUrl}${path}`;
    const headers: HeadersInit = {
      'Accept': 'application/json',
    };

    // Add Basic Auth if credentials provided
    if (this.username && this.password) {
      const auth = Buffer.from(`${this.username}:${this.password}`).toString('base64');
      headers['Authorization'] = `Basic ${auth}`;
    }

    const response = await fetch(url, { headers });

    if (!response.ok) {
      // Create custom error with status code for better error handling
      const error = new Error(`WordPress API request failed: ${response.status} ${response.statusText}`) as Error & { status: number };
      error.status = response.status;
      throw error;
    }

    return response;
  }

  /**
   * Strip HTML tags from string
   */
  private stripHtml(html: string): string {
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .trim();
  }
}
