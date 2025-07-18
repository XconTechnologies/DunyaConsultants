import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Calendar, Clock, User, Eye, Search, Filter, Grid, List, ChevronRight, Tag, TrendingUp, Star, Award, Globe, BookOpen, Users, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  tags: string[];
  image: string;
  featured?: boolean;
  trending?: boolean;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top Reasons to Study in London",
    excerpt: "Discover why London is the ultimate destination for international students with top-rated universities, diverse student population, career opportunities, and vibrant city life.",
    category: "Study Destinations",
    author: "Dunya Consultants",
    date: "Jan 17, 2025",
    readTime: "12 min",
    views: 18200,
    tags: ["London", "UK", "Study Abroad", "Universities", "Student Life"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/benefits-of-studying-in-london"
  },
  {
    id: "2",
    title: "UK Student Dependent Visa – News, Requirements & Process Fees",
    excerpt: "Latest updates on UK student dependent visa new rules, eligibility criteria, application process, and important changes affecting Pakistani students in 2024.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Jan 17, 2025",
    readTime: "14 min",
    views: 21500,
    tags: ["UK", "Dependent Visa", "Student Visa", "New Rules", "2024"],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/uk-student-dependent-visa-new-rules"
  },
  {
    id: "3",
    title: "Dubai Study Visa Requirements from Pakistan",
    excerpt: "Complete guide to Dubai student visa requirements, application process, eligibility criteria, and costs for Pakistani students pursuing education in UAE.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Jan 17, 2025",
    readTime: "12 min",
    views: 18500,
    tags: ["Dubai", "UAE", "Student Visa", "Pakistan", "Study Abroad"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/dubai-visa-for-pakistani"
  },
  {
    id: "4",
    title: "Study in UK: Complete Guide for Pakistani Students",
    excerpt: "Comprehensive guide to studying in the UK including visa requirements, tuition fees, university selection, and application process for Pakistani students.",
    category: "Study Destinations",
    author: "Dunya Consultants",
    date: "Jan 16, 2025",
    readTime: "15 min",
    views: 19850,
    tags: ["UK", "Study Abroad", "Visa", "Universities", "Pakistani Students"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/study-in-uk"
  },
  {
    id: "5",
    title: "Study Abroad Education Consultants: Your Path to International Success",
    excerpt: "Discover how professional education consultants can help Pakistani students navigate the complex world of international education and achieve their study abroad goals.",
    category: "Education Consultancy",
    author: "Dunya Consultants",
    date: "Jan 16, 2025",
    readTime: "12 min",
    views: 17340,
    tags: ["Education Consultants", "Study Abroad", "International Education", "Pakistani Students"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/study-abroad-education-consultants-dunya-consultants"
  },
  {
    id: "6",
    title: "Finland Admissions 2025 – Finland Application Fee & deadline 2025",
    excerpt: "Complete guide to studying in Finland for Pakistani students, including visa requirements, top universities, application deadlines, and admission process with €100 application fee.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Jan 16, 2025",
    readTime: "12 min",
    views: 18420,
    tags: ["Finland", "Visa", "Admission", "Application Fee", "Study Abroad"],
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/finland-online-visa-application-from-pakistan"
  },
  {
    id: "5",
    title: "New Year Resolutions for Students 2025",
    excerpt: "Comprehensive guide to setting meaningful New Year resolutions for students planning to study abroad, including goal-setting strategies and success tips.",
    category: "Study Tips",
    author: "Dunya Consultants",
    date: "Jan 16, 2025",
    readTime: "9 min",
    views: 15680,
    tags: ["New Year", "Student Goals", "Study Abroad", "Planning", "Success"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/new-year-resolutions-for-students-2025"
  },
  {
    id: "6",
    title: "Differences Between UK and Pakistan Education Systems",
    excerpt: "Comprehensive comparison of UK and Pakistan education systems covering primary, secondary, and higher education differences, academic calendars, and key challenges.",
    category: "Study Tips",
    author: "Dunya Consultants",
    date: "Jan 16, 2025",
    readTime: "11 min",
    views: 14230,
    tags: ["UK", "Pakistan", "Education System", "Comparison", "Academic"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/comparison-of-education-system-of-pakistan-with-uk"
  },
  {
    id: "6",
    title: "How to Write a Recommendation Letter for a Student?",
    excerpt: "Complete guide to writing effective recommendation letters for university applications and scholarships, including format, tips, and sample templates.",
    category: "Study Tips",
    author: "Dunya Consultants",
    date: "Mar 13, 2025",
    readTime: "10 min",
    views: 16850,
    tags: ["Recommendation Letter", "University Application", "Scholarship", "Study Abroad"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/recommendation-letter-for-student-scholarship"
  },
  {
    id: "7",
    title: "Top 10 Universities in London",
    excerpt: "Discover the best universities in London for international students, including UCL, Imperial College, LSE, and King's College with their unique advantages and programs.",
    category: "Study Destinations",
    author: "Dunya Consultants",
    date: "Mar 12, 2025",
    readTime: "12 min",
    views: 15240,
    tags: ["UK", "London", "Universities", "Study Abroad"],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/top-10-universities-in-london"
  },
  {
    id: "8",
    title: "Requirements to Study Computer Science in USA",
    excerpt: "Complete guide to admission requirements, costs, and career prospects for computer science programs in America, including top universities and application timeline.",
    category: "Study Programs",
    author: "Dunya Consultants",
    date: "Mar 11, 2025",
    readTime: "10 min",
    views: 13890,
    tags: ["USA", "Computer Science", "Requirements", "STEM"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/requirements-to-study-computer-science-in-usa"
  },
  {
    id: "9",
    title: "Green Card for International Students: Complete Guide 2025",
    excerpt: "Everything international students need to know about obtaining a Green Card in the USA, including pathways, requirements, processes, and timeline for permanent residency.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Mar 10, 2025",
    readTime: "11 min",
    views: 14560,
    tags: ["USA", "Green Card", "Immigration", "Permanent Residency"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/green-card-for-international-students"
  },
  {
    id: "10",
    title: "How Much Study Gap Acceptable in UK for Masters",
    excerpt: "Complete guide to study gap acceptance for UK master's programs, including university policies, gap year explanations, and strategies to strengthen your application.",
    category: "Study Destinations",
    author: "Dunya Consultants",
    date: "Mar 10, 2025",
    readTime: "9 min",
    views: 11780,
    tags: ["UK", "Masters", "Study Gap", "Application"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/how-much-study-gap-acceptable-in-uk-for-masters"
  },
  {
    id: "9",
    title: "How to Apply For IELTS in Pakistan",
    excerpt: "Complete guide to IELTS registration and application process in Pakistan, including requirements, booking steps, fees, and frequently asked questions for 2025.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Mar 10, 2025",
    readTime: "8 min",
    views: 12450,
    tags: ["IELTS", "Pakistan", "Registration", "Application"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/how-to-apply-for-ielts-in-pakistan"
  },
  {
    id: "10",
    title: "Bachelors in ICT (Software Engineering)",
    excerpt: "Complete guide to Software Engineering programs in Finland, including universities, eligibility criteria, documents required, and application process for international students.",
    category: "Study Programs",
    author: "Dunya Consultants",
    date: "Mar 8, 2025",
    readTime: "9 min",
    views: 9870,
    tags: ["Software Engineering", "Finland", "ICT", "Bachelor's"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/bachelors-in-ict-software-engineering"
  },
  {
    id: "7",
    title: "Master of Laws (LLM) in Australia: Complete Guide for International Students",
    excerpt: "Everything you need to know about studying LLM in Australia, including best universities, eligibility criteria, costs, application process, and career opportunities.",
    category: "Legal Education",
    author: "Dunya Consultants",
    date: "Mar 7, 2025",
    readTime: "10 min",
    views: 8750,
    tags: ["Australia", "LLM", "Legal Education", "Master of Laws"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/master-of-laws-llm-australia"
  },
  {
    id: "8",
    title: "GMAT Test Fee in Pakistan: Complete Registration Guide 2025",
    excerpt: "Complete guide to GMAT exam fees in Pakistan, registration process, test dates, eligibility criteria, and preparation tips for business school applications.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Mar 6, 2025",
    readTime: "8 min",
    views: 5680,
    tags: ["GMAT", "Pakistan", "Test Fee", "Business School"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/gmat-test-fee-in-pakistan"
  },
  {
    id: "9",
    title: "How to Improve IELTS Listening Skills: Expert Tips and Strategies",
    excerpt: "Master the IELTS listening test with expert tips, practice strategies, and techniques to improve your English listening skills for better band scores.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Mar 5, 2025",
    readTime: "8 min",
    views: 9420,
    tags: ["IELTS", "Listening", "Test Preparation", "English Skills"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/how-to-improve-ielts-listening-skills"
  },
  {
    id: "10",
    title: "Top 10 IELTS Preparation Tips: Expert Guide for High Band Score",
    excerpt: "Complete IELTS preparation guide with 10 essential tips and strategies to achieve your target band score, including study schedules, practice resources, and expert advice.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Mar 4, 2025",
    readTime: "10 min",
    views: 11200,
    tags: ["IELTS", "Preparation", "Study Tips", "Band Score"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/ielts-preparation-tips-and-tricks"
  },
  {
    id: "7",
    title: "Kaplan Test of English (KTE): Complete Guide 2025",
    excerpt: "Comprehensive guide to the Kaplan Test of English (KTE) including format, preparation tips, scoring system, and how it compares to other English proficiency tests for international students.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Jan 15, 2025",
    readTime: "8 min",
    views: 8340,
    tags: ["KTE", "English Test", "Test Preparation", "Study Tips"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/kaplan-test-of-english"
  },
  {
    id: "8",
    title: "Global Talent Visa Australia: Complete Guide 2025",
    excerpt: "Everything you need to know about Australia's Global Talent Visa program including eligibility requirements, application process, priority sectors, and success tips for skilled professionals.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Jan 14, 2025",
    readTime: "12 min",
    views: 15420,
    tags: ["Australia", "Visa", "Immigration", "Global Talent"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    trending: true,
    href: "/blog/global-talent-visa-australia"
  },
  {
    id: "9",
    title: "Anglia Ruskin University – A Trusted Partner of Dunya Consultants",
    excerpt: "Discover why Anglia Ruskin University is the perfect choice for Pakistani students seeking quality education in the UK. Complete guide to programs, rankings, and admission requirements.",
    category: "University Partnership",
    author: "Dunya Consultants",
    date: "Jan 13, 2025",
    readTime: "10 min",
    views: 7280,
    tags: ["UK", "University", "Partnership", "Education"],
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/anglia-ruskin-university"
  },
  {
    id: "10",
    title: "Cyprus Visa for Pakistan: Complete Student Guide 2025",
    excerpt: "Comprehensive guide to obtaining a Cyprus student visa for Pakistani students, including requirements, application process, costs, and top universities in Cyprus.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Jan 12, 2025",
    readTime: "11 min",
    views: 12456,
    tags: ["Cyprus", "Visa", "Pakistan", "Student"],
    image: "https://images.unsplash.com/photo-1544737151-6e4b55de4036?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/cyprus-visa-pakistan"
  },
  {
    id: "11",
    title: "Engineering and Law Programs in Canada: Best Universities for Pakistani Students in 2025",
    excerpt: "Complete guide to top Canadian universities offering engineering and law programs for Pakistani students, including admission requirements, costs, and career prospects.",
    category: "Study in Canada",
    author: "Dunya Consultants",
    date: "Jan 11, 2025",
    readTime: "14 min",
    views: 9850,
    tags: ["Canada", "Engineering", "Law", "Universities"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/engineering-law-canada"
  },
  {
    id: "12",
    title: "Why Turkey is Best Choice for Pakistani Students: Discover the Benefits",
    excerpt: "Discover why Turkey has become the top destination for Pakistani students seeking quality education, cultural familiarity, and affordable study options in Europe.",
    category: "Study Abroad",
    author: "Dunya Consultants",
    date: "Jan 10, 2025",
    readTime: "9 min",
    views: 11240,
    tags: ["Turkey", "Pakistan", "Study Abroad", "Affordable Education"],
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/turkey-best-choice-pakistani-students"
  },
  {
    id: "13",
    title: "From UK LLM to Pakistani Bar: Complete Guide for Legal Practice Conversion",
    excerpt: "Complete guide for Pakistani law graduates on how to convert their UK LLM degree for legal practice in Pakistan, including requirements, procedures, and career opportunities.",
    category: "Legal Education",
    author: "Dunya Consultants",
    date: "Jan 9, 2025",
    readTime: "12 min",
    views: 8750,
    tags: ["UK", "LLM", "Pakistan", "Legal Practice", "Bar Council"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/uk-llm-pakistani-bar"
  },
  {
    id: "14",
    title: "Study Nursing in the UK: Complete Guide for International Students",
    excerpt: "Comprehensive guide to studying nursing in the UK, including top universities, admission requirements, career prospects, and registration process for international students.",
    category: "Healthcare Studies",
    author: "Dunya Consultants",
    date: "Jan 8, 2025",
    readTime: "13 min",
    views: 15680,
    tags: ["UK", "Nursing", "Healthcare", "International Students"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/study-nursing-uk"
  },
  {
    id: "15",
    title: "Global Talent Visa UK: Complete Guide to UK's Premier Talent Immigration Route",
    excerpt: "Comprehensive guide to the UK's Global Talent Visa, including eligibility criteria, application process, endorsement requirements, and career opportunities for exceptional talent.",
    category: "UK Immigration",
    author: "Dunya Consultants",
    date: "Jan 7, 2025",
    readTime: "11 min",
    views: 13420,
    tags: ["UK", "Visa", "Immigration", "Skilled Professionals"],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/global-talent-visa-uk"
  },
  {
    id: "16",
    title: "Top Study Abroad Countries: Best Destinations for International Students in 2025",
    excerpt: "Discover the world's top study abroad destinations, comparing education quality, costs, career opportunities, and student experiences to help you make the best choice for your international education.",
    category: "Study Destinations",
    author: "Dunya Consultants",
    date: "Jan 6, 2025",
    readTime: "15 min",
    views: 18950,
    tags: ["Study Abroad", "Countries", "International Education", "Comparison"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/top-study-abroad-countries"
  },
  {
    id: "17",
    title: "Oxford Test Accepted Universities in UK: Complete Guide to OIETC",
    excerpt: "Comprehensive guide to UK universities accepting OIETC (Oxford International Education Training Centre) scores, including University of Edinburgh, University of Nottingham, and Birmingham City University.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Jan 5, 2025",
    readTime: "8 min",
    views: 6420,
    tags: ["OIETC", "UK Universities", "English Test", "ELLT"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/oxford-test-accepted-universities-uk"
  },
  {
    id: "18",
    title: "UK Internship for International Students: Complete Guide 2025",
    excerpt: "Comprehensive guide to UK internship opportunities for international students, including types of internships, best programs, application tips, and career benefits.",
    category: "Study Abroad",
    author: "Dunya Consultants",
    date: "Jan 4, 2025",
    readTime: "9 min",
    views: 7350,
    tags: ["UK", "Internship", "International Students", "Career"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/uk-internship-international-students"
  },
  {
    id: "19",
    title: "Study Medicine in Europe: Complete Guide for International Students",
    excerpt: "Comprehensive guide to studying medicine in Europe, including top medical schools, admission requirements, costs, and career opportunities for international students.",
    category: "Medical Education",
    author: "Dunya Consultants",
    date: "Jan 3, 2025",
    readTime: "16 min",
    views: 22100,
    tags: ["Medicine", "Europe", "Medical School", "Healthcare"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/study-medicine-europe"
  },
  {
    id: "20",
    title: "Germany Student Visa Guide: Complete Application Process 2025",
    excerpt: "Step-by-step guide to obtaining a German student visa, including requirements, documents, costs, and tips for Pakistani students seeking education in Germany.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Jan 2, 2025",
    readTime: "12 min",
    views: 14200,
    tags: ["Germany", "Student Visa", "Europe", "Immigration"],
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/germany-student-visa-guide"
  },
  {
    id: "21",
    title: "Scholarship Opportunities in USA: Complete Guide for International Students",
    excerpt: "Comprehensive guide to scholarship opportunities in the USA, including merit-based, need-based, and specialized scholarships for international students.",
    category: "Scholarships",
    author: "Dunya Consultants",
    date: "Jan 1, 2025",
    readTime: "14 min",
    views: 18750,
    tags: ["USA", "Scholarships", "Financial Aid", "International Students"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/scholarship-opportunities-usa"
  },
  {
    id: "22",
    title: "PTE Academic Test: Complete Guide and Preparation Tips",
    excerpt: "Everything you need to know about PTE Academic test including format, scoring, preparation strategies, and tips to achieve your target score.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Dec 30, 2024",
    readTime: "10 min",
    views: 9640,
    tags: ["PTE", "English Test", "Test Preparation", "Academic"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/pte-academic-test-guide"
  },
  {
    id: "23",
    title: "Study Business in Canada: Top MBA Programs and Universities",
    excerpt: "Comprehensive guide to studying business in Canada, including top MBA programs, admission requirements, costs, and career opportunities.",
    category: "Study in Canada",
    author: "Dunya Consultants",
    date: "Dec 29, 2024",
    readTime: "13 min",
    views: 11580,
    tags: ["Canada", "MBA", "Business", "Universities"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/study-business-canada"
  },
  {
    id: "24",
    title: "New Zealand Student Visa: Complete Application Guide 2025",
    excerpt: "Step-by-step guide to obtaining a New Zealand student visa, including requirements, application process, costs, and tips for successful application.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Dec 28, 2024",
    readTime: "11 min",
    views: 8920,
    tags: ["New Zealand", "Student Visa", "Immigration", "Study Abroad"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/new-zealand-student-visa"
  },
  {
    id: "25",
    title: "Duolingo English Test: Complete Guide and Preparation Tips",
    excerpt: "Everything you need to know about the Duolingo English Test including format, preparation strategies, and tips to achieve your target score.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Dec 27, 2024",
    readTime: "9 min",
    views: 7830,
    tags: ["Duolingo", "English Test", "Test Preparation", "Online Test"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/duolingo-english-test-guide"
  },
  {
    id: "26",
    title: "Bachelors in Industrial Engineering and Management",
    excerpt: "Complete guide to Industrial Engineering and Management programs worldwide, including universities, eligibility criteria, documents required, and application process for international students.",
    category: "Study Programs",
    author: "Dunya Consultants",
    date: "Mar 7, 2025",
    readTime: "12 min",
    views: 8950,
    tags: ["Industrial Engineering", "Management", "Bachelor's", "Engineering"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/bachelors-in-industrial-engineering-and-management"
  },
  {
    id: "27",
    title: "Teesside University – A Trusted Partner of Dunya Consultants",
    excerpt: "Discover why Teesside University is the perfect choice for Pakistani students seeking quality education in the UK. Complete guide to programs, rankings, fees, and admission requirements.",
    category: "University Partnership",
    author: "Dunya Consultants",
    date: "Mar 7, 2025",
    readTime: "10 min",
    views: 6780,
    tags: ["UK", "University", "Partnership", "Teesside"],
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/teesside-university-trusted-partner"
  },
  {
    id: "28",
    title: "IELTS Acceptability in 2025: Which Countries & Universities Recognize It?",
    excerpt: "Comprehensive guide to IELTS acceptance worldwide, including which countries, universities, and institutions recognize IELTS scores for study and immigration in 2025.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Mar 3, 2025",
    readTime: "11 min",
    views: 15420,
    tags: ["IELTS", "Test Preparation", "Study Abroad", "Immigration"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/ielts-acceptability-2025"
  },
  {
    id: "29",
    title: "Difference between IELTS General and Academic",
    excerpt: "Complete guide explaining the key differences between IELTS General Training and Academic tests, including format, content, and which one to choose for your goals.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Feb 17, 2025",
    readTime: "7 min",
    views: 4560,
    tags: ["IELTS", "General Training", "Academic", "Test Format"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/difference-between-ielts-general-and-academic"
  },
  {
    id: "30",
    title: "IELTS Band Score: Complete Guide to Understanding the Scoring System",
    excerpt: "Comprehensive guide to IELTS band scores, including detailed explanations of each band level, scoring criteria, and how to calculate your overall score.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Feb 17, 2025",
    readTime: "8 min",
    views: 5230,
    tags: ["IELTS", "Band Score", "Scoring System", "Test Results"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/ielts-band-score-complete-guide"
  },
  {
    id: "31",
    title: "LanguageCert 2025 Complete Test Guide for Pakistani Students",
    excerpt: "Everything you need to know about LanguageCert test including accepted universities in UK, fees in Pakistan, exam pattern, and preparation tips.",
    category: "Test Preparation",
    author: "Dunya Consultants",
    date: "Feb 17, 2025",
    readTime: "9 min",
    views: 3870,
    tags: ["LanguageCert", "Pakistan", "UK Universities", "Test Preparation"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/languagecert-2025-complete-guide"
  },
  {
    id: "32",
    title: "Finland Online Visa Application from Pakistan",
    excerpt: "Complete guide to applying for Finland student visa online from Pakistan, including requirements, documents, step-by-step process, and embassy information.",
    category: "Visa Guides",
    author: "Dunya Consultants",
    date: "Feb 16, 2025",
    readTime: "10 min",
    views: 4120,
    tags: ["Finland", "Student Visa", "Pakistan", "Online Application"],
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    href: "/blog/finland-online-visa-application-from-pakistan"
  },
  {
    id: "33",
    title: "New Year Resolutions for Students 2025",
    excerpt: "Transform your academic journey with these meaningful resolutions for students. Set goals for academic excellence, personal development, and career success.",
    category: "Student Life",
    author: "Dunya Consultants",
    date: "Feb 16, 2025",
    readTime: "8 min",
    views: 6890,
    tags: ["New Year", "Student Goals", "Academic Success", "Personal Development"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    trending: true,
    href: "/blog/new-year-resolutions-for-students-2025"
  },
  {
    id: "34",
    title: "Comparison of Education System of Pakistan with UK",
    excerpt: "Detailed comparison of Pakistani and UK education systems, including structure, teaching methods, grading, and preparation tips for Pakistani students.",
    category: "Education Systems",
    author: "Dunya Consultants",
    date: "Feb 16, 2025",
    readTime: "12 min",
    views: 5670,
    tags: ["Pakistan", "UK Education", "Comparison", "International Students"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    href: "/blog/comparison-of-education-system-of-pakistan-with-uk"
  }
];

const categories = [
  { name: "All", icon: Grid, count: blogPosts.length },
  { name: "Study Abroad", icon: Globe, count: blogPosts.filter(p => p.category === "Study Abroad").length },
  { name: "Visa Guides", icon: BookOpen, count: blogPosts.filter(p => p.category === "Visa Guides").length },
  { name: "Test Preparation", icon: Award, count: blogPosts.filter(p => p.category === "Test Preparation").length },
  { name: "Healthcare Studies", icon: Heart, count: blogPosts.filter(p => p.category === "Healthcare Studies").length },
  { name: "Legal Education", icon: Users, count: blogPosts.filter(p => p.category === "Legal Education").length },
  { name: "UK Immigration", icon: TrendingUp, count: blogPosts.filter(p => p.category === "UK Immigration").length },
  { name: "Study Destinations", icon: Star, count: blogPosts.filter(p => p.category === "Study Destinations").length },
  { name: "University Partnership", icon: Users, count: blogPosts.filter(p => p.category === "University Partnership").length },
  { name: "Study in Canada", icon: Globe, count: blogPosts.filter(p => p.category === "Study in Canada").length },
  { name: "Study Programs", icon: BookOpen, count: blogPosts.filter(p => p.category === "Study Programs").length },
  { name: "Medical Education", icon: Heart, count: blogPosts.filter(p => p.category === "Medical Education").length },
  { name: "Scholarships", icon: Star, count: blogPosts.filter(p => p.category === "Scholarships").length },
  { name: "Student Life", icon: Users, count: blogPosts.filter(p => p.category === "Student Life").length },
  { name: "Education Systems", icon: BookOpen, count: blogPosts.filter(p => p.category === "Education Systems").length },
  { name: "Education Consultancy", icon: Users, count: blogPosts.filter(p => p.category === "Education Consultancy").length }
];

export default function BlogArchive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "latest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "popular":
          return b.views - a.views;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Blog Archive</h1>
                <p className="mt-2 text-gray-600">
                  Explore our comprehensive collection of study abroad guides and resources
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md ${
                      viewMode === "grid" 
                        ? "bg-blue-100 text-blue-600" 
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md ${
                      viewMode === "list" 
                        ? "bg-blue-100 text-blue-600" 
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 space-y-8">
              {/* Search */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.name
                          ? "bg-blue-50 text-blue-600 border border-blue-200"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
                  {selectedCategory !== "All" && (
                    <span className="text-gray-500"> in {selectedCategory}</span>
                  )}
                </h2>
                {searchTerm && (
                  <p className="text-sm text-gray-600 mt-1">
                    Showing results for "{searchTerm}"
                  </p>
                )}
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* Articles Grid/List */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  {searchTerm || selectedCategory !== "All" 
                    ? "Try adjusting your search or filter criteria"
                    : "No blog articles are currently available"
                  }
                </p>
              </div>
            ) : (
              <div className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 gap-8"
                  : "space-y-6"
              }>
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow ${
                      viewMode === "list" ? "flex" : ""
                    }`}
                  >
                    <div className={viewMode === "list" ? "flex-shrink-0 w-48" : ""}>
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className={`object-cover ${
                            viewMode === "list" ? "h-32 w-full" : "h-48 w-full"
                          }`}
                        />
                        {post.featured && (
                          <div className="absolute top-3 left-3">
                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          </div>
                        )}
                        {post.trending && (
                          <div className="absolute top-3 right-3">
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Trending
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views.toLocaleString()}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <Link
                          href={post.href}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                        >
                          Read More
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{post.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}