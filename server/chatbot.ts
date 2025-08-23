import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getChatbotResponse(message: string, context?: string): Promise<string> {
    try {
        const systemPrompt = `You are an AI assistant for Path Visa Consultants, Pakistan's trusted visa consultancy specializing in study abroad services. You help students with:

1. STUDY DESTINATIONS: USA, UK, Canada, Australia, Finland, Belgium, Turkey
2. VISA ASSISTANCE: Student visas, application guidance, requirements
3. UNIVERSITY GUIDANCE: Course selection, admission requirements, scholarships
4. TEST PREPARATION: IELTS, PTE, TOEFL, Duolingo guidance
5. CONSULTATION SERVICES: Free counseling, document preparation, application support

COMPANY INFO:
- Name: Path Visa Consultants
- Vision: Pakistan's most trusted visa consultancy
- Services: Study abroad consultation, visa assistance, test prep, university partnerships
- Expertise: 400+ global university partners, 17+ office locations
- Specialization: Student journey from consultation to pre-departure

TONE: Professional, helpful, encouraging, and knowledgeable
STYLE: Provide accurate information, ask clarifying questions when needed, guide students step-by-step

Always be helpful and provide actionable advice. If you don't know specific current information, acknowledge this and suggest contacting Path Visa Consultants directly for the most up-to-date details.`;

        const fullPrompt = context ? 
            `${systemPrompt}\n\nPrevious context: ${context}\n\nStudent question: ${message}` :
            `${systemPrompt}\n\nStudent question: ${message}`;

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: fullPrompt,
        });

        return response.text || "I apologize, but I'm having trouble processing your request. Please contact our consultants directly for immediate assistance.";
    } catch (error) {
        console.error("Chatbot error:", error);
        return "I'm temporarily unable to assist you. Please contact Path Visa Consultants directly at our office for immediate help with your study abroad needs.";
    }
}

export interface ChatMessage {
    id: string;
    message: string;
    response: string;
    timestamp: Date;
    sessionId?: string;
}

// Suggested quick questions for the chatbot
export const quickQuestions = [
    "What are the requirements to study in the USA?",
    "How can I apply for a UK student visa?",
    "Which universities in Canada offer scholarships?",
    "What IELTS score do I need for Australia?",
    "How much does it cost to study in Finland?",
    "What documents do I need for visa application?",
    "Can you help me choose the right course?",
    "What are the English language requirements?"
];