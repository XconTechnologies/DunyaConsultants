import { db } from "./db";
import { blogPosts } from "@shared/schema";

const allBlogPosts = [
  {
    title: "Finland Admissions 2025 – Finland Application Fee & Deadline 2025",
    slug: "finland-online-visa-application-from-pakistan",
    excerpt: "Complete guide to Finland student visa applications from Pakistan, including admission requirements, application fees, deadlines, and step-by-step visa process for 2025.",
    content: "Finland is quite popular for providing high-quality education to international students. Those who are willing to study in Finland will find many degree programs that focus on student learning as well as advanced technology. Tuition fees in Finland are more affordable as compared to other Western countries. The country also provides a friendly environment which makes it a top choice for students looking for the best education experience.",
    published: true,
    authorId: 1,
    tags: ["Finland", "Student Visa", "Study Abroad", "Europe", "Admissions"],
    metaTitle: "Finland Admissions 2025 – Application Fee & Deadline Guide",
    metaDescription: "Complete guide to Finland student visa applications from Pakistan including admission requirements, fees, deadlines, and step-by-step application process for 2025.",
    featuredImage: "/blog/finland-visa-application.jpg",
    readingTime: 15,
    views: 2847,
    category: "Visa Guides"
  },
  {
    title: "Green Card for International Students: Complete Guide 2025",
    slug: "green-card-for-international-students",
    excerpt: "Comprehensive guide to obtaining a Green Card as an international student in the USA including pathways, requirements, and process",
    content: "Are you a non-U.S. student looking to become an official green card holder in the USA? Getting a green card is one of the most important steps. It lets you live as well as work in the United States without the worry of leaving one day. A green card makes you a permanent resident, giving you many of the same rights as a U.S. citizen, but not all. Each year, the US government gives the opportunity of green card for students.",
    published: true,
    authorId: 1,
    tags: ["Green Card", "USA", "International Students", "Immigration"],
    metaTitle: "Green Card for International Students - Complete Guide 2025",
    metaDescription: "Complete guide for international students to obtain Green Card in USA including eligibility requirements, application process, and pathways to permanent residency.",
    featuredImage: "/blog/green-card-usa.jpg",
    readingTime: 20,
    views: 5240,
    category: "Immigration Guide"
  },
  {
    title: "Masters in Computer Science in UK",
    slug: "masters-in-computer-science-in-uk",
    excerpt: "Complete guide to Masters in Computer Science programs in UK universities for international students",
    content: "Are you looking for the best place to study for a Master's in Computer Science? The United Kingdom is home to more than 551,000 international students and provides a welcoming learning environment where they can meet people from all over the world. The IT industry is growing quickly, and skilled computer science experts are needed throughout the industry. This makes Computer Science one of the most popular and valuable fields currently. Around 157 UK universities offer Masters in Computer Science in UK and provide top-quality education.",
    published: true,
    authorId: 1,
    tags: ["UK", "Computer Science", "Masters", "International Students"],
    metaTitle: "Masters in Computer Science in UK - Complete Guide 2025",
    metaDescription: "Complete guide to Masters in Computer Science programs in UK universities including admission requirements, top universities, and career prospects.",
    featuredImage: "/blog/masters-computer-science-uk.jpg",
    readingTime: 12,
    views: 3890,
    category: "Study Abroad"
  },
  {
    title: "How Much Study Gap is Acceptable in UK for Masters?",
    slug: "how-much-study-gap-acceptable-in-uk-for-masters",
    excerpt: "Complete guide to study gap requirements for UK Masters programs and how to handle gaps in education",
    content: "One of the most common concerns for Pakistani students planning to pursue a Masters degree in the UK is whether their study gap will affect their admission chances. The good news is that UK universities are generally understanding about study gaps, especially when they are well-justified and documented properly. The gap accepted in UK for a Bachelor's degree is around two-years and up to five years for a Master's degree.",
    published: true,
    authorId: 1,
    tags: ["UK", "Study Gap", "Masters", "Admissions"],
    metaTitle: "Study Gap Acceptable in UK for Masters - Complete Guide",
    metaDescription: "Everything about study gap requirements for UK Masters programs including acceptable gap periods, documentation needed, and application tips.",
    featuredImage: "/blog/uk-study-gap.jpg",
    readingTime: 10,
    views: 2650,
    category: "Study Abroad"
  },
  {
    title: "Top Reasons to Study in London",
    slug: "top-reasons-to-study-in-london",
    excerpt: "Discover why London is one of the best destinations for international students",
    content: "London is the capital of the United Kingdom and is home to around eight million people at present including more than 382,000 students. Undoubtedly, it is one of the best cities for international students to pursue their higher education.",
    published: true,
    authorId: 1,
    tags: ["London", "UK", "Study Abroad", "International Students"],
    metaTitle: "Top Reasons to Study in London - Student Guide 2025",
    metaDescription: "Discover why London is the perfect destination for international students including top universities, career opportunities, and student life.",
    featuredImage: "/blog/study-in-london.jpg",
    readingTime: 8,
    views: 2100,
    category: "Study Destinations"
  },
  {
    title: "A Complete Guide to Bangor University UK",
    slug: "bangor-university-complete-guide",
    excerpt: "Complete guide to Bangor University including admission requirements, programs, and campus life",
    content: "If you plan to study in the United Kingdom, finding the right university is very important. Bangor University is included in the top ten universities in the UK and is known for providing high-quality education to international students.",
    published: true,
    authorId: 1,
    tags: ["Bangor University", "UK", "University Guide", "International Students"],
    metaTitle: "Bangor University UK - Complete Guide 2025",
    metaDescription: "Complete guide to Bangor University including admission requirements, programs offered, campus facilities, and student life for international students.",
    featuredImage: "/blog/bangor-university-guide.jpg",
    readingTime: 12,
    views: 1890,
    category: "University Guides"
  }
];

export async function seedBlogPosts() {
  try {
    console.log("Starting to seed blog posts...");
    
    for (const post of allBlogPosts) {
      const blogPost = {
        ...post,
        publishedAt: post.published ? new Date() : null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      await db.insert(blogPosts).values({
        ...blogPost,
        isPublished: post.published,
      }).onConflictDoNothing();
    }
    
    console.log(`Successfully seeded ${allBlogPosts.length} blog posts`);
  } catch (error) {
    console.error("Error seeding blog posts:", error);
  }
}