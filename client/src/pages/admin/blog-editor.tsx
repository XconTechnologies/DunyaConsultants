import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Save, Eye, ArrowLeft, Loader2, FileText, 
  Calendar, User, Hash, Globe
} from "lucide-react";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  tags: z.string().optional(),
  isPublished: z.boolean().default(false),
});

type BlogForm = z.infer<typeof blogSchema>;

export default function BlogEditor() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/admin/blog/:action/:id?");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [blogPost, setBlogPost] = useState<any>(null);

  const navigate = (path: string) => setLocation(path);
  
  const isEditing = params?.action === "edit";
  const isNew = params?.action === "new";
  const blogId = params?.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<BlogForm>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      isPublished: false,
    },
  });

  const title = watch("title");
  const isPublished = watch("isPublished");

  // Generate slug from title
  useEffect(() => {
    if (title && !isEditing) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setValue("slug", slug);
    }
  }, [title, setValue, isEditing]);

  // Fetch blog post for editing
  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!isEditing || !blogId) return;

      setIsLoading(true);
      try {
        const token = localStorage.getItem("adminToken");
        const response = await fetch(`/api/admin/blog-posts/${blogId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }

        const post = await response.json();
        setBlogPost(post);
        
        // Populate form
        reset({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          metaTitle: post.metaTitle || "",
          metaDescription: post.metaDescription || "",
          tags: post.tags ? post.tags.join(", ") : "",
          isPublished: post.isPublished,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPost();
  }, [isEditing, blogId, reset]);

  const onSubmit = async (data: BlogForm) => {
    setIsSaving(true);
    setError(null);

    try {
      const token = localStorage.getItem("adminToken");
      const payload = {
        ...data,
        tags: data.tags ? data.tags.split(",").map(tag => tag.trim()) : [],
      };

      const url = isEditing 
        ? `/api/admin/blog-posts/${blogId}`
        : "/api/admin/blog-posts";
      
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save blog post");
      }

      const result = await response.json();
      
      // Redirect to dashboard
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to save blog post");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreview = () => {
    // In a real implementation, you could open a preview modal or new tab
    alert("Preview functionality would open the blog post in a new tab");
  };

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p>Loading blog post...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => navigate("/admin/dashboard")}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
                </h1>
                {isEditing && blogPost && (
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant={blogPost.isPublished ? "default" : "secondary"}>
                      {blogPost.isPublished ? "Published" : "Draft"}
                    </Badge>
                    {blogPost.publishedAt && (
                      <span className="text-sm text-gray-500">
                        Published on {new Date(blogPost.publishedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={handlePreview}
                className="flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Preview
              </Button>
              <Button
                onClick={handleSubmit(onSubmit)}
                disabled={isSaving}
                className="flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save {isPublished ? "& Publish" : "Draft"}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter blog post title"
                      {...register("title")}
                      className="h-11"
                    />
                    {errors.title && (
                      <p className="text-sm text-red-600">{errors.title.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slug" className="flex items-center gap-2">
                      <Hash className="w-4 h-4" />
                      Slug *
                    </Label>
                    <Input
                      id="slug"
                      placeholder="url-friendly-slug"
                      {...register("slug")}
                      className="h-11"
                    />
                    {errors.slug && (
                      <p className="text-sm text-red-600">{errors.slug.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt *</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Brief description of the blog post"
                    {...register("excerpt")}
                    rows={3}
                  />
                  {errors.excerpt && (
                    <p className="text-sm text-red-600">{errors.excerpt.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    placeholder="tag1, tag2, tag3"
                    {...register("tags")}
                    className="h-11"
                  />
                  <p className="text-sm text-gray-500">Separate tags with commas</p>
                </div>
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card>
              <CardHeader>
                <CardTitle>Content *</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Editor
                    apiKey="no-api-key" // You should get a real API key from TinyMCE
                    init={{
                      height: 500,
                      menubar: true,
                      plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                      ],
                      toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={(content) => setValue("content", content)}
                    value={watch("content")}
                  />
                  {errors.content && (
                    <p className="text-sm text-red-600">{errors.content.message}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  SEO Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    placeholder="SEO title for search engines"
                    {...register("metaTitle")}
                    className="h-11"
                  />
                  <p className="text-sm text-gray-500">Recommended: 50-60 characters</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    placeholder="SEO description for search engines"
                    {...register("metaDescription")}
                    rows={3}
                  />
                  <p className="text-sm text-gray-500">Recommended: 150-160 characters</p>
                </div>
              </CardContent>
            </Card>

            {/* Publishing Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Publishing Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="publish"
                    checked={isPublished}
                    onCheckedChange={(checked) => setValue("isPublished", checked)}
                  />
                  <Label htmlFor="publish">
                    {isPublished ? "Publish immediately" : "Save as draft"}
                  </Label>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {isPublished 
                    ? "This blog post will be visible to the public" 
                    : "This blog post will be saved as a draft"
                  }
                </p>
              </CardContent>
            </Card>
          </form>
        </div>
      </main>
    </div>
  );
}