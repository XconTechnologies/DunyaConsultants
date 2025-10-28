import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Loader2, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function AdminBlogPreview() {
  const [, params] = useRoute("/admin/blog-preview/:id");
  const blogId = params?.id;

  // Check for both admin and user tokens (support for different user types)
  const getAuthToken = () => {
    let token = localStorage.getItem("adminToken");
    if (!token) {
      token = localStorage.getItem("userToken");
    }
    return token;
  };
  
  const token = getAuthToken();

  // Fetch blog post for preview (including drafts)
  const { data: blogPost, isLoading, error } = useQuery({
    queryKey: ["/api/admin/blog-posts", blogId, "preview"],
    enabled: !!blogId && !!token,
    queryFn: async () => {
      const response = await fetch(`/api/admin/blog-posts/${blogId}/preview`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch blog post: ${response.status}`);
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading preview...</span>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Preview Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post preview could not be loaded.</p>
          <Button onClick={() => window.close()} className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Close Preview</span>
          </Button>
        </div>
      </div>
    );
  }

  // Unified image src normalization function (same as live blog)
  const normalizeImageSrc = (image: string) => {
    if (!image || image.trim() === '') {
      return '/attached_assets/placeholder.jpg';
    }
    const trimmed = image.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    if (trimmed.startsWith('/api/uploads/') || trimmed.startsWith('api/uploads/')) {
      return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
    }
    if (trimmed.startsWith('/blog/') || trimmed.startsWith('blog/')) {
      return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
    }
    if (trimmed.startsWith('/attached_assets/') || trimmed.startsWith('attached_assets/')) {
      return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
    }
    return `/attached_assets/${trimmed}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Preview Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200 py-2">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <span className="text-yellow-800 font-medium">
              🔍 Preview Mode - {blogPost.isPublished ? 'Published' : 'Draft'}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => window.close()}
              className="text-yellow-800 border-yellow-300"
            >
              Close Preview
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section - Same style as live blog posts */}
      <section className="relative bg-gradient-to-br from-[#1D50C9] to-[#0f3a8a] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white blog-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white">
                <Tag className="w-4 h-4 mr-2" />
                {blogPost.category || "Study Guides"}
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold mb-6 leading-[1.5rem] text-white"
              style={{ fontSize: '48px' }}
            >
              {blogPost.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center space-x-6 text-blue-200"
            >
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>
                  {blogPost.publishedAt 
                    ? new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })
                    : 'Draft'
                  }
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              
              {/* Featured Image */}
              {blogPost.featuredImage && (
                <div className="relative">
                  <img loading="lazy" 
                    src={normalizeImageSrc(blogPost.featuredImage)}
                    alt={blogPost.featuredImageAlt || blogPost.title}
                    title={blogPost.featuredImageTitle || blogPost.title}
                    className="w-full h-auto"
                    onError={(e) => {
                      const img = e.currentTarget;
                      const originalSrc = img.src;
                      
                      // Try different extensions if not already tried
                      if (!img.dataset.retryCount) {
                        img.dataset.retryCount = '0';
                      }
                      
                      const retryCount = parseInt(img.dataset.retryCount);
                      const basePath = originalSrc.replace(/\.[^/.]+$/, '');
                      const extensions = ['.png', '.jpg', '.jpeg', '.webp'];
                      
                      if (retryCount < extensions.length) {
                        const newSrc = basePath + extensions[retryCount];
                        img.dataset.retryCount = String(retryCount + 1);
                        img.src = newSrc;
                        return;
                      }
                      
                      // Try uploads API as final fallback
                      if (retryCount === extensions.length) {
                        const filename = originalSrc.split('/').pop()?.replace(/\.[^/.]+$/, '') + '.jpg';
                        img.dataset.retryCount = String(retryCount + 1);
                        img.src = `/api/uploads/${filename}`;
                        return;
                      }
                      
                      // Hide image after all attempts failed
                      img.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              )}

              {/* Content Container */}
              <div className="p-8 lg:p-12">
                
                {/* Article Header */}
                <header className="mb-10">
                  {blogPost.tags && blogPost.tags.length > 0 && (
                    <div className="flex items-center gap-2 mb-6">
                      {blogPost.tags.slice(0, 2).map((tag: string, index: number) => (
                        <Badge key={index} className="bg-[#1D50C9] text-white px-3 py-1.5 text-sm font-medium">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  {blogPost.excerpt && (
                    <div className="bg-gradient-to-r from-[#1D50C9]/5 via-blue-50/50 to-transparent rounded-xl p-8 border-l-4 border-[#1D50C9]">
                      <p className="text-xl text-gray-700 leading-relaxed font-light">
                        {blogPost.excerpt}
                      </p>
                    </div>
                  )}
                </header>

                {/* Blog Content */}
                <div className="prose prose-xl max-w-none">
                  <div 
                    className="blog-content prose prose-xl max-w-none" 
                    dangerouslySetInnerHTML={{ __html: blogPost.content || '' }}
                    ref={(el) => {
                      if (el) {
                        setTimeout(() => {
                          // Execute inline and internal scripts
                          const scripts = el.querySelectorAll('script');
                          scripts.forEach((oldScript) => {
                            const newScript = document.createElement('script');
                            
                            // Copy all attributes
                            Array.from(oldScript.attributes).forEach((attr) => {
                              newScript.setAttribute(attr.name, attr.value);
                            });
                            
                            // Copy script content
                            newScript.textContent = oldScript.textContent;
                            
                            // Replace old script with new one to trigger execution
                            oldScript.parentNode?.replaceChild(newScript, oldScript);
                          });
                        }, 100);
                      }
                    }}
                  />
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About This Post</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Status:</span> {blogPost.isPublished ? 'Published' : 'Draft'}
                </div>
                {blogPost.metaTitle && (
                  <div>
                    <span className="font-medium">Meta Title:</span> {blogPost.metaTitle}
                  </div>
                )}
                {blogPost.metaDescription && (
                  <div>
                    <span className="font-medium">Meta Description:</span> {blogPost.metaDescription}
                  </div>
                )}
                {blogPost.focusKeyword && (
                  <div>
                    <span className="font-medium">Focus Keyword:</span> {blogPost.focusKeyword}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}