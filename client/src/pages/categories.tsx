import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Tag, ArrowRight, BookOpen, Users, Globe, FileText, GraduationCap, MapPin, Clock, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  postCount?: number;
}

const categoryIcons: { [key: string]: any } = {
  'accommodation': MapPin,
  'application-process': FileText,
  'career-guidance': TrendingUp,
  'cultural-adaptation': Globe,
  'english-language-tests': BookOpen,
  'financial-guidance': Users,
  'study-abroad': GraduationCap,
  'test-preparation': BookOpen,
  'visa-services': FileText,
  'default': Tag
};

export default function CategoriesIndexPage() {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['/api/categories/hierarchical'],
    select: (data: any) => data || []
  });

  const { data: blogPosts = [] } = useQuery({
    queryKey: ['/api/blog-posts'],
    select: (data: any) => data || []
  });

  // Flatten hierarchical categories to show all categories (parent + child)
  const allCategories = categories.reduce((acc: Category[], category: any) => {
    // Add parent category
    acc.push(category);
    
    // Add child categories if they exist
    if (category.children && category.children.length > 0) {
      acc.push(...category.children);
    }
    
    return acc;
  }, []);

  // Calculate post count for each category
  const categoriesWithCounts = allCategories.map((category: Category) => {
    const postCount = blogPosts.filter((post: any) => 
      post.categories && post.categories.some((cat: any) => cat.id === category.id)
    ).length;
    
    return {
      ...category,
      postCount
    };
  });

  // SEO
  useEffect(() => {
    document.title = 'Blog Categories - Path Visa Consultants';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore all blog categories at Path Visa Consultants. Find articles on study abroad, visa services, test preparation, and more expert guidance for international students.');
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#1D50C9] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading categories...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1D50C9] to-[#2563EB] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Tag className="w-8 h-8 text-white mr-3" />
              <Badge variant="secondary" className="px-4 py-2 text-lg bg-white/20 text-white">
                Categories
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Explore Our Blog Categories
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover expert insights and comprehensive guides across various topics. 
              Find the perfect category that matches your study abroad journey.
            </p>
            <div className="text-white/80">
              <span className="text-lg font-medium">{categoriesWithCounts.length}</span> categories available
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link href="/blog">
              <Button variant="outline" className="mb-6">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to All Articles
              </Button>
            </Link>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesWithCounts.map((category: Category, index: number) => {
              const IconComponent = categoryIcons[category.slug] || categoryIcons['default'];
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/category/${category.slug}`}>
                    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-[#1D50C9]/20 h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#1D50C9] to-[#2563EB] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1D50C9] transition-colors">
                              {category.name}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{category.postCount || 0} article{category.postCount !== 1 ? 's' : ''}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {category.description || `Explore comprehensive guides and expert insights about ${category.name.toLowerCase()}. Get the latest updates and advice from our consultants.`}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {category.name}
                          </Badge>
                          <ArrowRight className="w-4 h-4 text-[#1D50C9] group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* No Categories Message */}
          {categoriesWithCounts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <Tag className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Categories Found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Categories will appear here once they are created. Check back soon for exciting content!
              </p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-20 p-8 bg-gradient-to-br from-[#1D50C9]/5 to-[#2563EB]/5 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Study Abroad Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our expert consultants are here to provide personalized guidance for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#1D50C9] to-[#2563EB] hover:from-[#1D50C9]/90 hover:to-[#2563EB]/90">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  View All Articles
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}