import { contacts, testimonials, users, type User, type InsertUser, type Contact, type InsertContact, type Testimonial, type InsertTestimonial } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private testimonials: Map<number, Testimonial>;
  private currentUserId: number;
  private currentContactId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentTestimonialId = 1;
    
    // Initialize with some testimonials
    this.initializeTestimonials();
  }

  private initializeTestimonials() {
    const sampleTestimonials: Omit<Testimonial, 'id'>[] = [
      {
        name: "Sarah Johnson",
        program: "MBA",
        university: "Stanford University",
        message: "Path made my dream of studying at Stanford a reality. Their expertise in visa processing and university selection was invaluable. I couldn't have done it without them!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
        isActive: true,
        createdAt: new Date(),
      },
      {
        name: "Michael Chen",
        program: "MS Computer Science",
        university: "MIT", 
        message: "The team at EduPath guided me through every step of the process. From TOEFL preparation to visa interview, they were there for me. Now I'm at my dream university!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
        isActive: true,
        createdAt: new Date(),
      },
      {
        name: "Priya Patel",
        program: "Medicine",
        university: "University of Toronto",
        message: "Professional, reliable, and incredibly supportive. EduPath's personalized approach helped me secure admission to my top choice medical school in Canada.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
        isActive: true,
        createdAt: new Date(),
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isActive);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: new Date(),
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
