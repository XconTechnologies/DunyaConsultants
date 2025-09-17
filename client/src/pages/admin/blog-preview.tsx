import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Loader2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function AdminBlogPreview() {
  const [, params] = useRoute("/admin/blog-preview/:id");
  const blogId = params?.id;

  const token = localStorage.getItem("adminToken");

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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Preview Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200 py-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>
          
          {blogPost.excerpt && (
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {blogPost.excerpt}
            </p>
          )}

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
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
          </div>
        </header>

        {/* Featured Image */}
        {blogPost.featuredImage && (
          <div className="mb-12">
            <img
              src={blogPost.featuredImage}
              alt={blogPost.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Blog Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="blog-content" 
            dangerouslySetInnerHTML={{ __html: blogPost.content || '' }} 
          />
        </article>
      </main>
      
      <Footer />
    </div>
  );
}