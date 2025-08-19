import { eq } from "drizzle-orm";
import { db } from "./db";
import { blogPosts } from "@shared/schema";

const allBlogPosts = [
  {
    title: "Top Medical Universities in Turkey for International Students",
    slug: "top-medical-universities-turkey-international-students",
    excerpt: "Discover the best medical universities in Turkey for international students, including admission requirements, fees, and scholarship opportunities.",
    content: `Universities in Turkey are quite popular worldwide in terms of best education and modern teaching methods. If you have dreamed of studying medicine in Turkey and wondering which university to choose, then this blog post is for you. Let's have a look at the best medical universities in Turkey for international students.

## Atlas University

Atlas University Located in Istanbul Turkey, Atlas University pays massive attention to medical degree programs. The students who are studying Medicine at Atlas University get the chance to use modern equipment and complete their practical work in the most advanced laboratories. Moreover, the university also provides an internship opportunity to their students for developing a greater understanding of the medical field.

The university follows a problem-based learning method that allows students to participate actively during lectures and enhance their learning skills. Furthermore, the Atlas University has also signed MOUs with multiple international universities and hospitals which provides an opportunity for students to do an international internship or student exchange programs.

### Admission Requirements:
- High school diploma or equivalent
- Minimum 70% marks in science subjects
- English proficiency test scores
- Medical aptitude test
- Interview (if required)

### Annual Tuition Fees:
- Medicine: $15,000 - $20,000
- Dentistry: $12,000 - $18,000

## Istanbul Medipol University

Istanbul Medipol University is one of the leading private universities in Turkey offering world-class medical education. The university has a modern campus with state-of-the-art facilities including simulation laboratories, research centers, and teaching hospitals.

### Key Features:
- English-taught programs
- International accreditation
- Modern simulation labs
- Clinical training opportunities
- Research opportunities

### Programs Offered:
- Medicine (6 years)
- Dentistry (5 years)
- Pharmacy (5 years)
- Nursing (4 years)

## Bahcesehir University

Bahcesehir University Medical School is renowned for its innovative approach to medical education. The university offers medicine programs in both English and Turkish languages.

### Highlights:
- International partnerships
- Modern teaching methods
- Clinical experience from early years
- Research opportunities
- Student exchange programs

## Istanbul Aydin University

Istanbul Aydin University offers comprehensive medical programs with a focus on practical learning and research. The university has partnerships with various hospitals for clinical training.

### Features:
- English-medium instruction
- Modern laboratories
- Hospital partnerships
- International recognition
- Scholarship opportunities

## Acıbadem University

Acıbadem University is part of the Acıbadem Healthcare Group, providing students with excellent clinical training opportunities in Acıbadem hospitals.

### Advantages:
- Direct hospital access
- Experienced faculty
- Modern facilities
- Research opportunities
- International collaborations

## Application Process

The application process for medical universities in Turkey typically includes:

1. **Academic Requirements**: High school diploma with strong science background
2. **Language Requirements**: English proficiency test (TOEFL/IELTS)
3. **Entrance Exams**: University-specific entrance tests
4. **Documentation**: Transcripts, certificates, passport, photos
5. **Application Deadlines**: Usually between March-July

## Scholarship Opportunities

Many Turkish universities offer scholarships for international students:
- Merit-based scholarships
- Need-based financial aid
- Government scholarships
- University-specific grants

## Living in Turkey

Turkey offers an excellent quality of life for international students:
- Affordable cost of living
- Rich cultural heritage
- Strategic location between Europe and Asia
- Vibrant student life
- Safe environment

## Conclusion

Turkey has emerged as a top destination for medical education with its world-class universities, modern facilities, and affordable tuition fees. The medical universities mentioned above provide excellent opportunities for international students to pursue their medical careers.

For more information about admissions and application procedures, contact our education consultants who can guide you through the entire process.`,
    isPublished: true,
    authorId: 1,
    tags: ["Turkey", "Medical Universities", "International Students", "Medical Education", "Higher Education"],
    metaDescription: "Explore the top medical universities in Turkey for international students. Learn about admission requirements, fees, and opportunities at leading Turkish medical schools.",
    featuredImage: "image_1755599190116.png",
    viewCount: 0,
    category: "Education Guides",
    publishedAt: new Date("2024-08-15")
  },
  {
    title: "Study in USA: Complete Guide for Pakistani Students",
    slug: "study-usa-complete-guide-pakistani-students",
    excerpt: "Comprehensive guide for Pakistani students planning to study in the USA, including admission requirements, visa process, and scholarship opportunities.",
    content: `The United States remains one of the most popular destinations for Pakistani students seeking higher education abroad. With world-renowned universities, diverse academic programs, and excellent career opportunities, the USA offers an unparalleled educational experience.`,
    isPublished: true,
    authorId: 1,
    tags: ["USA", "Study Abroad", "Pakistani Students", "Higher Education"],
    metaDescription: "Complete guide for Pakistani students planning to study in the USA. Learn about admissions, visas, scholarships, and university options.",
    featuredImage: "image_1755598539253.png",
    viewCount: 0,
    category: "Study Abroad",
    publishedAt: new Date("2024-08-10")
  },
  {
    title: "Study in UK: Complete Guide for Pakistani Students",
    slug: "study-uk-complete-guide-pakistani-students",
    excerpt: "Everything Pakistani students need to know about studying in the UK, from university applications to visa requirements and living costs.",
    content: `The United Kingdom has been a preferred destination for Pakistani students for decades. With its rich academic tradition, world-class universities, and strong Pakistani diaspora, the UK offers an ideal environment for higher education.`,
    isPublished: true,
    authorId: 1,
    tags: ["UK", "Study Abroad", "Pakistani Students", "Higher Education"],
    metaDescription: "Complete guide for Pakistani students planning to study in the UK. Admissions, visas, costs, and university selection tips.",
    featuredImage: "image_1755600243921.png",
    viewCount: 0,
    category: "Study Abroad",
    publishedAt: new Date("2024-08-08")
  },
  {
    title: "Study in Canada: Complete Guide for Pakistani Students",
    slug: "study-canada-complete-guide-pakistani-students",
    excerpt: "Comprehensive information about studying in Canada for Pakistani students, including admission process, visa requirements, and post-graduation opportunities.",
    content: `Canada has become increasingly popular among Pakistani students due to its high-quality education system, multicultural environment, and excellent post-graduation work opportunities.`,
    isPublished: true,
    authorId: 1,
    tags: ["Canada", "Study Abroad", "Pakistani Students", "Higher Education"],
    metaDescription: "Complete guide for Pakistani students planning to study in Canada. Learn about admissions, visas, and opportunities.",
    featuredImage: "Asset-1.png",
    viewCount: 0,
    category: "Study Abroad",
    publishedAt: new Date("2024-08-05")
  },
  {
    title: "Study in Australia: Complete Guide for Pakistani Students",
    slug: "study-australia-complete-guide-pakistani-students",
    excerpt: "Essential information for Pakistani students planning to study in Australia, covering universities, visa process, and living expenses.",
    content: `Australia offers world-class education, a multicultural society, and excellent career prospects for Pakistani students. The country's universities are globally recognized for their academic excellence.`,
    isPublished: true,
    authorId: 1,
    tags: ["Australia", "Study Abroad", "Pakistani Students", "Higher Education"],
    metaDescription: "Complete guide for Pakistani students planning to study in Australia. University options, visa process, and living costs covered.",
    featuredImage: "Asset-1_1750413567978.png",
    viewCount: 0,
    category: "Study Abroad",
    publishedAt: new Date("2024-08-03")
  },
  {
    title: "Study in Finland: Complete Guide for Pakistani Students",
    slug: "study-finland-complete-guide-pakistani-students",
    excerpt: "Detailed guide about studying in Finland for Pakistani students, including free education opportunities and admission requirements.",
    content: `Finland offers high-quality education, often free of charge, making it an attractive destination for Pakistani students seeking affordable yet excellent higher education.`,
    isPublished: true,
    authorId: 1,
    tags: ["Finland", "Study Abroad", "Pakistani Students", "Free Education"],
    metaDescription: "Complete guide for Pakistani students planning to study in Finland. Learn about free education opportunities and admission process.",
    featuredImage: "Asset-1_1750664385021.png",
    viewCount: 0,
    category: "Study Abroad",
    publishedAt: new Date("2024-08-01")
  },
  {
    title: "Study in Belgium: Complete Guide for Pakistani Students",
    slug: "study-belgium-complete-guide-pakistani-students",
    excerpt: "Everything Pakistani students need to know about studying in Belgium, from top universities to visa requirements and living costs.",
    content: `Belgium offers excellent higher education opportunities with its renowned universities and strategic location in the heart of Europe, making it ideal for Pakistani students.`,
    isPublished: true,
    authorId: 1,
    tags: ["Belgium", "Study Abroad", "Pakistani Students", "Higher Education"],
    metaDescription: "Complete guide for Pakistani students planning to study in Belgium. University options, visa requirements, and living costs.",
    featuredImage: "Asset-1_1750769524939.png",
    viewCount: 0,
    category: "Study Abroad",
    publishedAt: new Date("2024-07-28")
  },
  {
    title: "IELTS Test Preparation: Complete Guide for Pakistani Students",
    slug: "ielts-test-preparation-guide-pakistani-students",
    excerpt: "Comprehensive IELTS preparation guide for Pakistani students including test format, preparation tips, and coaching center recommendations.",
    content: `IELTS is one of the most important English proficiency tests for Pakistani students planning to study abroad. This comprehensive guide covers everything you need to know about IELTS preparation.`,
    isPublished: true,
    authorId: 1,
    tags: ["IELTS", "Test Preparation", "English Proficiency", "Study Abroad"],
    metaDescription: "Complete IELTS preparation guide for Pakistani students. Test format, preparation tips, and coaching recommendations.",
    featuredImage: "Asset-1_1750769657321.png",
    viewCount: 0,
    category: "Test Preparation",
    publishedAt: new Date("2024-07-25")
  },
  {
    title: "PTE Academic Test Guide for Pakistani Students 2024",
    slug: "pte-academic-test-guide-pakistani-students-2024",
    excerpt: "Complete PTE Academic test guide for Pakistani students including test format, preparation strategies, and registration process.",
    content: `PTE Academic is gaining popularity among Pakistani students as an alternative to IELTS. This guide provides comprehensive information about the PTE Academic test.`,
    isPublished: true,
    authorId: 1,
    tags: ["PTE", "Test Preparation", "English Proficiency", "Study Abroad"],
    metaDescription: "Complete PTE Academic test guide for Pakistani students. Test format, preparation tips, and registration process.",
    featuredImage: "Asset-1_1750770525064.png",
    viewCount: 0,
    category: "Test Preparation",
    publishedAt: new Date("2024-07-20")
  },
  {
    title: "Duolingo English Test: Complete Guide for Pakistani Students",
    slug: "duolingo-english-test-guide-pakistani-students",
    excerpt: "Everything Pakistani students need to know about the Duolingo English Test, including test format, preparation tips, and university acceptance.",
    content: `The Duolingo English Test has emerged as a convenient and affordable alternative to traditional English proficiency tests for Pakistani students.`,
    isPublished: true,
    authorId: 1,
    tags: ["Duolingo", "English Test", "Test Preparation", "Study Abroad"],
    metaDescription: "Complete Duolingo English Test guide for Pakistani students. Test format, preparation, and university acceptance information.",
    featuredImage: "DC Blue Logo (1)_1750668538365.png",
    viewCount: 0,
    category: "Test Preparation",
    publishedAt: new Date("2024-07-18")
  },
  {
    title: "Scholarship Opportunities for Pakistani Students 2024",
    slug: "scholarship-opportunities-pakistani-students-2024",
    excerpt: "Comprehensive list of scholarship opportunities available for Pakistani students planning to study abroad in 2024.",
    content: `Finding the right scholarship can make studying abroad affordable for Pakistani students. This guide covers various scholarship opportunities available in 2024.`,
    isPublished: true,
    authorId: 1,
    tags: ["Scholarships", "Financial Aid", "Study Abroad", "Pakistani Students"],
    metaDescription: "Complete guide to scholarship opportunities for Pakistani students in 2024. Government and private scholarships covered.",
    featuredImage: "DC White Logo_1751441165041.png",
    viewCount: 0,
    category: "Financial Aid",
    publishedAt: new Date("2024-07-15")
  },
  {
    title: "Student Visa Requirements: Country-wise Guide for Pakistani Students",
    slug: "student-visa-requirements-guide-pakistani-students",
    excerpt: "Detailed student visa requirements for popular study destinations including USA, UK, Canada, Australia, and European countries.",
    content: `Understanding student visa requirements is crucial for Pakistani students planning to study abroad. This guide covers visa requirements for major study destinations.`,
    isPublished: true,
    authorId: 1,
    tags: ["Student Visa", "Visa Requirements", "Study Abroad", "Pakistani Students"],
    metaDescription: "Comprehensive student visa requirements guide for Pakistani students. Country-wise visa information and application tips.",
    featuredImage: "Frame 1000007739_1754999995915.png",
    viewCount: 0,
    category: "Visa Information",
    publishedAt: new Date("2024-07-12")
  }
];

export async function seedBlogPosts() {
  console.log("Starting to seed blog posts...");
  
  try {
    // Check if blog posts already exist
    const existingPosts = await db.select().from(blogPosts).limit(1);
    
    if (existingPosts.length > 0) {
      console.log("Blog posts already exist, skipping seeding");
      return;
    }

    // Insert all blog posts
    for (const post of allBlogPosts) {
      await db.insert(blogPosts).values({
        ...post,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    console.log(`Successfully seeded ${allBlogPosts.length} blog posts`);
  } catch (error) {
    console.error("Error seeding blog posts:", error);
  }
}