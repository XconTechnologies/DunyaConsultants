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
import { Editor } from '@tinymce/tinymce-react';
import { 
  Save, Eye, ArrowLeft, Loader2, FileText, 
  Calendar, User, Hash, Globe, Upload, Image as ImageIcon
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
  const editorRef = useRef<any>(null);
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
      
      // Use setTimeout to ensure form is ready
      setTimeout(() => {
        console.log('Raw blog post content:', blogPost.content);
        
        // Reset form with the actual data
        reset({
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
        });
        
        // Force content field to update using both methods
        setValue('content', blogPost.content || "", { shouldDirty: true, shouldTouch: true });
        if (editorRef.current) {
          editorRef.current.setContent(blogPost.content || "");
        }
      }, 200);
    }
  }, [blogPost, isEditing, reset, setValue]);

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
    console.log('Form submitted with data:', data);
    setIsSaving(true);
    try {
      await saveMutation.mutateAsync(data);
    } catch (error) {
      console.error('Save error:', error);
    } finally {
      setIsSaving(false);
    }
  };

  // Handle content change from TinyMCE
  const handleEditorChange = (content: string) => {
    setValue('content', content, { shouldDirty: true, shouldTouch: true });
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImageUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const { url } = await response.json();
      
      if (showImageUpload === true) {
        // For featured image
        setValue("featuredImage", url);
        setShowImageUpload(false);
      } else {
        // For content image - insert directly into TinyMCE
        if (editorRef.current) {
          const imageHtml = `<p><img src="${url}" alt="${file.name}" style="max-width: 100%; height: auto;" /></p>`;
          editorRef.current.insertContent(imageHtml);
        }
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
                onClick={() => {
                  console.log('Save button clicked');
                  setValue('isPublished', false);
                }}
              >
                {isSaving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                <span>{isSaving ? "Saving..." : "Save Draft"}</span>
              </Button>
              <Button
                type="submit"
                form="blog-form"
                disabled={isSaving}
                className="flex items-center space-x-2 ml-2"
                onClick={() => {
                  console.log('Publish button clicked');
                  setValue('isPublished', true);
                }}
              >
                {isSaving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                <span>{isSaving ? "Publishing..." : "Publish"}</span>
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
                    <p className="#1D50C9 text-sm mt-1">{errors.title.message}</p>
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
                    <p className="#1D50C9 text-sm mt-1">{errors.slug.message}</p>
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
                    <p className="#1D50C9 text-sm mt-1">{errors.excerpt.message}</p>
                  )}
                </CardContent>
              </Card>

              {/* Content Area with Rich Text Editor */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Content</span>
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
                      <span className="ml-2">Insert Image</span>
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="min-h-[500px]">
                    <Editor
                      onInit={(evt, editor) => {
                        editorRef.current = editor;
                        // Set initial content if available
                        if (content) {
                          editor.setContent(content);
                        }
                      }}
                      value={content || ''}
                      onEditorChange={handleEditorChange}
                      init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                          'insertdatetime', 'media', 'table', 'help', 'wordcount',
                          'emoticons', 'codesample'
                        ],
                        toolbar: [
                          'undo redo | blocks | bold italic underline strikethrough | fontfamily fontsize',
                          'forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
                          'removeformat | charmap emoticons | fullscreen preview | insertfile image media link anchor codesample',
                          'ltr rtl | table | code | help'
                        ].join(' | '),
                        content_style: `
                          body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; line-height: 1.6; }
                          h1, h2, h3, h4, h5, h6 { margin-top: 1em; margin-bottom: 0.5em; }
                          p { margin: 0.5em 0; }
                          ul, ol { margin: 0.5em 0; padding-left: 2em; }
                          blockquote { margin: 1em 0; padding: 0.5em 1em; border-left: 3px solid #ccc; background: #f9f9f9; }
                          img { max-width: 100%; height: auto; }
                        `,
                        // Enhanced paste settings for Google Docs  
                        paste_data_images: false,
                        paste_block_drop: false,
                        paste_webkit_styles: 'color font-size font-family background-color',
                        paste_merge_formats: true,
                        smart_paste: true,
                        paste_auto_cleanup_on_paste: true,
                        paste_convert_headers_to_strong: false,
                        paste_strip_class_attributes: 'all',
                        
                        // Preserve Google Docs formatting
                        paste_preprocess: function(plugin, args) {
                          // Clean up Google Docs HTML while preserving structure
                          let content = args.content;
                          
                          // Preserve headings by converting various heading formats
                          content = content.replace(/<p[^>]*style="[^"]*font-size:\s*24px[^"]*"[^>]*>(.*?)<\/p>/gi, '<h1>$1</h1>');
                          content = content.replace(/<p[^>]*style="[^"]*font-size:\s*18px[^"]*"[^>]*>(.*?)<\/p>/gi, '<h2>$1</h2>');
                          content = content.replace(/<p[^>]*style="[^"]*font-size:\s*16px[^"]*"[^>]*>(.*?)<\/p>/gi, '<h3>$1</h3>');
                          
                          // Preserve bold text
                          content = content.replace(/<span[^>]*font-weight:\s*bold[^>]*>(.*?)<\/span>/gi, '<strong>$1</strong>');
                          
                          // Clean up excessive spans while preserving links
                          content = content.replace(/<span[^>]*>([^<]+)<\/span>/gi, '$1');
                          
                          args.content = content;
                        },
                        
                        // Additional formatting preservation
                        formats: {
                          alignleft: {selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', styles: {textAlign: 'left'}},
                          aligncenter: {selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', styles: {textAlign: 'center'}},
                          alignright: {selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', styles: {textAlign: 'right'}},
                          alignjustify: {selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', styles: {textAlign: 'justify'}}
                        },
                        
                        // Allow all HTML elements and attributes
                        valid_elements: '*[*]',
                        valid_children: '+body[style],+div[p|div|h1|h2|h3|h4|h5|h6]',
                        
                        // Development configuration
                        branding: false,
                        promotion: false,
                        
                        // Additional settings
                        resize: true,
                        elementpath: false,
                        statusbar: true,
                        
                        // File handling
                        file_picker_types: 'image',
                        file_picker_callback: function(cb, value, meta) {
                          if (meta.filetype === 'image') {
                            fileInputRef.current?.click();
                          }
                        }
                      }}
                    />
                  </div>
                  {errors.content && (
                    <p className="text-red-500 text-sm mt-2">{errors.content.message}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    ✨ <strong>Google Docs Paste Support:</strong> Copy content from Google Docs and paste here - all formatting, headings, links, and lists will be preserved!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              


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
                  {watch("featuredImage") && (
                    <div className="mt-2">
                      <img 
                        src={watch("featuredImage")} 
                        alt="Featured image preview" 
                        className="max-w-full h-32 object-cover rounded border"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
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