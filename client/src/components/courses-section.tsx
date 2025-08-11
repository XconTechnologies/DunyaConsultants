import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen, Search, Filter, ArrowRight, Users, Clock, Globe, Star } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  level: 'Bachelor' | 'Master' | 'Diploma';
  category: 'Business' | 'Engineering' | 'IT' | 'Healthcare' | 'Arts' | 'Science';
  duration: string;
  country: string;
  university: string;
  tuitionFee: string;
  rating: number;
  students: number;
  description: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Master of Business Administration (MBA)",
    level: "Master",
    category: "Business",
    duration: "2 Years",
    country: "UK",
    university: "University of Manchester",
    tuitionFee: "£28,000/year",
    rating: 4.8,
    students: 1250,
    description: "Develop leadership skills and strategic thinking in this globally recognized MBA program.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Bachelor of Computer Science",
    level: "Bachelor",
    category: "IT",
    duration: "4 Years",
    country: "Canada",
    university: "University of Toronto",
    tuitionFee: "CAD 58,000/year",
    rating: 4.7,
    students: 890,
    description: "Comprehensive program covering software development, AI, and data science fundamentals.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Master of Engineering (MEng)",
    level: "Master",
    category: "Engineering",
    duration: "2 Years",
    country: "Australia",
    university: "University of Melbourne",
    tuitionFee: "AUD 45,000/year",
    rating: 4.6,
    students: 650,
    description: "Advanced engineering program with specializations in civil, mechanical, and electrical engineering.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Diploma in Digital Marketing",
    level: "Diploma",
    category: "Business",
    duration: "1 Year",
    country: "USA",
    university: "New York Institute of Technology",
    tuitionFee: "$35,000/year",
    rating: 4.5,
    students: 320,
    description: "Intensive program covering SEO, social media marketing, and digital analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Bachelor of Nursing",
    level: "Bachelor",
    category: "Healthcare",
    duration: "4 Years",
    country: "UK",
    university: "King's College London",
    tuitionFee: "£24,000/year",
    rating: 4.9,
    students: 780,
    description: "Comprehensive nursing program with clinical placements in leading UK hospitals.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "Master of Data Science",
    level: "Master",
    category: "IT",
    duration: "2 Years",
    country: "Germany",
    university: "Technical University of Munich",
    tuitionFee: "€12,000/year",
    rating: 4.8,
    students: 420,
    description: "Cutting-edge program in machine learning, big data analytics, and artificial intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
  }
];

const categories = [
  { id: 'all', label: 'All Programs', icon: BookOpen, count: courses.length },
  { id: 'Business', label: 'Business', icon: Users, count: courses.filter(c => c.category === 'Business').length },
  { id: 'Engineering', label: 'Engineering', icon: GraduationCap, count: courses.filter(c => c.category === 'Engineering').length },
  { id: 'IT', label: 'IT & Computer Science', icon: Globe, count: courses.filter(c => c.category === 'IT').length },
  { id: 'Healthcare', label: 'Healthcare', icon: Star, count: courses.filter(c => c.category === 'Healthcare').length }
];

const levels = ['All Levels', 'Bachelor', 'Master', 'Diploma'];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('All Levels');
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesLevel = activeLevel === 'All Levels' || course.level === activeLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <span style={{ color: '#1D2D4E' }}>Courses & </span>
            <span style={{ color: '#1D2D4E' }}>
              Programs
            </span>
          </motion.h2>
        </motion.div>

        {/* Find Your Perfect Course */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Your Perfect Course</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </div>

            {/* Level Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={activeLevel}
                onChange={(e) => setActiveLevel(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <motion.button
              onClick={() => {
                setActiveCategory('all');
                setActiveLevel('All Levels');
                setSearchTerm('');
              }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Clear Filters
            </motion.button>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5" />
                {category.label}
                <span className="text-sm opacity-75">({category.count})</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600">
            Showing <span className="font-semibold text-blue-600">{filteredCourses.length}</span> programs
            {searchTerm && ` for "${searchTerm}"`}
            {activeLevel !== 'All Levels' && ` in ${activeLevel} level`}
            {activeCategory !== 'all' && ` in ${activeCategory}`}
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-blue-600 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    {course.country}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-blue-400" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-sm opacity-90">({course.students} students)</span>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">University:</span>
                    <span className="text-gray-900 text-sm font-medium">{course.university}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Tuition Fee:</span>
                    <span className="text-blue-600 text-sm font-bold">{course.tuitionFee}</span>
                  </div>
                </div>

                {/* Apply Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all programs</p>
            <motion.button
              onClick={() => {
                setActiveCategory('all');
                setActiveLevel('All Levels');
                setSearchTerm('');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Courses
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}