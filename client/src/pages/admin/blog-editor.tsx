import { useState, useEffect, useRef } from "react";
import { useLocation, useRoute } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Save, Eye, ArrowLeft, Loader2, FileText, 
  Calendar, User, Hash, Globe, Upload, Image as ImageIcon,
  Bold, Italic, Link, Heading1, Heading2, Heading3
} from "lucide-react";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  metaDescription: z.string().optional(),
  focusKeyword: z.string().optional(),
  featuredImage: z.string().optional(),
  tags: z.string().optional(),
  isPublished: z.boolean().default(false),
});

type BlogForm = z.infer<typeof blogSchema>;

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  metaDescription?: string;
  focusKeyword?: string;
  featuredImage?: string;
  tags: string[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogEditor() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/admin/blog-editor/:id?");
  const [isSaving, setIsSaving] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const isEditing = !!params?.id;
  const blogId = params?.id;

  const token = localStorage.getItem("adminToken");

  // Fetch blog post for editing
  const { data: blogPost, isLoading, error } = useQuery({
    queryKey: ["/api/admin/blog-posts", blogId],
    enabled: isEditing && !!token,
    queryFn: async () => {
      console.log('Fetching blog post with ID:', blogId);
      const response = await fetch(`/api/admin/blog-posts/${blogId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to fetch blog post:', response.status, errorText);
        throw new Error(`Failed to fetch blog post: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched blog post data:', data);
      return data;
    },
  });

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
  const content = watch("content");
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

  // Populate form when editing
  useEffect(() => {
    if (blogPost && isEditing) {
      console.log('Loading blog post data for editing:', blogPost);
      
      const formData = {
        title: blogPost.title || "",
        slug: blogPost.slug || "",
        excerpt: blogPost.excerpt || "",
        content: blogPost.content || "",
        metaDescription: blogPost.metaDescription || "",
        focusKeyword: blogPost.focusKeyword || "",
        featuredImage: blogPost.featuredImage || "",
        tags: Array.isArray(blogPost.tags) 
          ? blogPost.tags.join(", ") 
          : typeof blogPost.tags === 'string' 
            ? blogPost.tags 
            : "",
        isPublished: !!blogPost.isPublished,
      };
      
      console.log('Form data being populated:', formData);
      reset(formData);
      
      // Force update the content field specifically
      setValue('content', formData.content, { shouldValidate: true, shouldDirty: true });
    }
  }, [blogPost, isEditing, reset]);

  // Save mutation
  const saveMutation = useMutation({
    mutationFn: async (data: BlogForm) => {
      const url = isEditing
        ? `/api/admin/blog-posts/${blogId}`
        : "/api/admin/blog-posts";
      const method = isEditing ? "PUT" : "POST";

      const payload = {
        ...data,
        tags: data.tags ? data.tags.split(",").map(tag => tag.trim()) : [],
      };

      const response = await fetch(url, {
        method,
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status}: ${errorText}`);
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: isEditing ? "Blog Updated" : "Blog Created",
        description: `Blog post has been ${isEditing ? "updated" : "created"} successfully.`,
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog-posts"] });
      setLocation("/admin/dashboard");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to save blog post",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: BlogForm) => {
    setIsSaving(true);
    try {
      await saveMutation.mutateAsync(data);
    } finally {
      setIsSaving(false);
    }
  };

  // Text formatting functions
  const insertAtCursor = (text: string) => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentContent = content || "";
    
    const newContent = 
      currentContent.substring(0, start) + 
      text + 
      currentContent.substring(end);
    
    setValue("content", newContent);
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + text.length, start + text.length);
    }, 0);
  };

  const wrapSelectedText = (prefix: string, suffix: string = "") => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentContent = content || "";
    const selectedText = currentContent.substring(start, end);
    
    if (selectedText) {
      const wrappedText = prefix + selectedText + suffix;
      const newContent = 
        currentContent.substring(0, start) + 
        wrappedText + 
        currentContent.substring(end);
      
      setValue("content", newContent);
      
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(
          start + prefix.length, 
          start + prefix.length + selectedText.length
        );
      }, 0);
    }
  };

  const addHeading = (level: number) => {
    const hashes = "#".repeat(level);
    insertAtCursor(`\n${hashes} Heading ${level}\n`);
  };

  const addLink = () => {
    const url = prompt("Enter URL:");
    if (url) {
      const linkText = prompt("Enter link text:") || url;
      wrapSelectedText(`[${linkText}](${url})`);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImageUploading(true);
    try {
      // Simulate image upload - you can replace this with actual upload logic
      const imageUrl = `/api/uploads/${file.name}`;
      
      if (showImageUpload === true) {
        // For featured image
        setValue("featuredImage", imageUrl);
        setShowImageUpload(false);
      } else {
        // For content image
        insertAtCursor(`\n![Image](${imageUrl})\n`);
      }
      
      toast({
        title: "Image Uploaded",
        description: "Image has been uploaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsImageUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading blog post...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Alert className="max-w-md">
            <AlertDescription>
              Failed to load blog post: {error.message}
              <br />
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => setLocation("/admin/dashboard")}
              >
                Back to Dashboard
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => setLocation("/admin/dashboard")}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Dashboard</span>
              </Button>
              <div className="text-lg font-semibold">
                {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant={isPublished ? "default" : "secondary"}>
                {isPublished ? "Published" : "Draft"}
              </Badge>
              <Button
                type="submit"
                form="blog-form"
                disabled={isSaving}
                className="flex items-center space-x-2"
              >
                {isSaving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                <span>{isSaving ? "Saving..." : "Save"}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form id="blog-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Title */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Blog Title</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    {...register("title")}
                    placeholder="Enter blog title..."
                    className="text-lg"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* Slug */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Hash className="w-5 h-5" />
                    <span>URL Slug</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    {...register("slug")}
                    placeholder="url-slug"
                    className="font-mono"
                  />
                  {errors.slug && (
                    <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* Excerpt */}
              <Card>
                <CardHeader>
                  <CardTitle>Excerpt</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    {...register("excerpt")}
                    placeholder="Brief description of the blog post..."
                    rows={3}
                  />
                  {errors.excerpt && (
                    <p className="text-red-500 text-sm mt-1">{errors.excerpt.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* Content Area */}
              <Card>
                <CardHeader>
                  <CardTitle>Content</CardTitle>
                  {/* Formatting Toolbar */}
                  <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded border">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => wrapSelectedText("**", "**")}
                      title="Bold"
                    >
                      <Bold className="w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => wrapSelectedText("*", "*")}
                      title="Italic"
                    >
                      <Italic className="w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addLink}
                      title="Add Link"
                    >
                      <Link className="w-4 h-4" />
                    </Button>
                    <div className="border-l border-gray-300 mx-2" />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addHeading(1)}
                      title="Heading 1"
                    >
                      <Heading1 className="w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addHeading(2)}
                      title="Heading 2"
                    >
                      <Heading2 className="w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addHeading(3)}
                      title="Heading 3"
                    >
                      <Heading3 className="w-4 h-4" />
                    </Button>
                    <div className="border-l border-gray-300 mx-2" />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setShowImageUpload(false);
                        fileInputRef.current?.click();
                      }}
                      title="Insert Image"
                      disabled={isImageUploading}
                    >
                      {isImageUploading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ImageIcon className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {isEditing && (
                    <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-sm font-medium text-yellow-800">Debug Info:</p>
                      <p className="text-xs text-yellow-700">
                        Blog ID: {blogId} | 
                        Is Loading: {isLoading ? 'Yes' : 'No'} | 
                        Has Blog Data: {blogPost ? 'Yes' : 'No'} |
                        Content Length: {content?.length || 0}
                      </p>
                      {blogPost && (
                        <p className="text-xs text-yellow-700 mt-1">
                          Original Content Length: {blogPost.content?.length || 0}
                        </p>
                      )}
                    </div>
                  )}
                  <Textarea
                    {...register("content")}
                    ref={contentRef}
                    placeholder="Write your blog content here... You can use Markdown formatting, paste content with formatting preserved, and add images using the toolbar above."
                    rows={20}
                    className="font-mono text-sm"
                  />
                  {errors.content && (
                    <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    Supports Markdown formatting. Use the toolbar above to format text or insert images.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Publish Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Publish Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="isPublished">Published</Label>
                    <Switch
                      id="isPublished"
                      {...register("isPublished")}
                      checked={isPublished}
                      onCheckedChange={(checked) => setValue("isPublished", checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ImageIcon className="w-5 h-5" />
                    <span>Featured Image</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    {...register("featuredImage")}
                    placeholder="Image URL or upload..."
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowImageUpload(true);
                      fileInputRef.current?.click();
                    }}
                    disabled={isImageUploading}
                    className="w-full"
                  >
                    {isImageUploading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Image
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* SEO Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>SEO Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="focusKeyword">Focus Keyword</Label>
                    <Input
                      id="focusKeyword"
                      {...register("focusKeyword")}
                      placeholder="Main keyword for SEO..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      {...register("metaDescription")}
                      placeholder="Brief description for search engines..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    {...register("tags")}
                    placeholder="Tag1, Tag2, Tag3..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Separate tags with commas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
}