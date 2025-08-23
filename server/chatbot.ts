// Rule-based responses for common queries
const chatbotResponses = {
    greetings: [
        "hello", "hi", "hey", "good morning", "good afternoon", "good evening", "سلام", "السلام عليكم"
    ],
    usa: [
        "usa", "america", "united states", "american", "us study"
    ],
    uk: [
        "uk", "united kingdom", "britain", "british", "england", "scotland"
    ],
    canada: [
        "canada", "canadian"
    ],
    australia: [
        "australia", "australian", "aussie"
    ],
    finland: [
        "finland", "finnish"
    ],
    belgium: [
        "belgium", "belgian"
    ],
    turkey: [
        "turkey", "turkish", "türkiye"
    ],
    visa: [
        "visa", "student visa", "visa requirements", "visa application", "visa process"
    ],
    ielts: [
        "ielts", "english test", "language test", "english requirement"
    ],
    requirements: [
        "requirements", "requirement", "need", "criteria", "qualification"
    ],
    cost: [
        "cost", "fee", "price", "expensive", "cheap", "budget", "money"
    ],
    scholarship: [
        "scholarship", "scholarships", "funding", "financial aid"
    ]
};

function getResponseForQuery(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    // Greetings
    if (chatbotResponses.greetings.some(word => lowerMessage.includes(word))) {
        return "Hello! Welcome to Path Visa Consultants. I'm here to help you with your study abroad journey. You can ask me about:\n\n• Study destinations (USA, UK, Canada, Australia, Finland, Belgium, Turkey)\n• Visa requirements and applications\n• University selection and scholarships\n• IELTS and other English tests\n• Document requirements\n\nHow can I assist you today?";
    }
    
    // USA specific queries
    if (chatbotResponses.usa.some(word => lowerMessage.includes(word))) {
        return "🇺🇸 **Studying in the USA:**\n\n**Requirements:**\n• Bachelor's degree (for Masters) or 12 years education (for Bachelors)\n• IELTS: 6.0+ or TOEFL: 79+ (varies by university)\n• SAT/GRE scores (depending on program)\n• Statement of Purpose & Letters of Recommendation\n\n**Popular Programs:** Engineering, Business, Computer Science, Medicine\n\n**Estimated Costs:** $25,000-$60,000 per year (tuition + living)\n\nWould you like specific information about visa requirements or university recommendations?";
    }
    
    // UK specific queries
    if (chatbotResponses.uk.some(word => lowerMessage.includes(word))) {
        return "🇬🇧 **Studying in the UK:**\n\n**Requirements:**\n• Bachelor's degree (for Masters) or A-levels/equivalent (for Bachelors)\n• IELTS: 6.5+ with no band below 6.0\n• Personal Statement & Academic References\n\n**Popular Programs:** Business, Engineering, Medicine, Law\n\n**Estimated Costs:** £15,000-£35,000 per year (tuition + living)\n\n**Student Visa:** Tier 4 (General) Student Visa required\n\nWould you like information about specific universities or the application process?";
    }
    
    // Canada specific queries  
    if (chatbotResponses.canada.some(word => lowerMessage.includes(word))) {
        return "🇨🇦 **Studying in Canada:**\n\n**Requirements:**\n• Bachelor's degree (for Masters) or 12 years education (for Bachelors)\n• IELTS: 6.5+ or TOEFL: 88+\n• Statement of Purpose & Letters of Recommendation\n• Proof of funds\n\n**Popular Programs:** Engineering, Business, Healthcare, IT\n\n**Estimated Costs:** CAD 20,000-40,000 per year\n\n**Work Opportunities:** 20 hours/week during studies, 3-year work permit after graduation\n\nWould you like details about specific provinces or the visa process?";
    }
    
    // Australia specific queries
    if (chatbotResponses.australia.some(word => lowerMessage.includes(word))) {
        return "🇦🇺 **Studying in Australia:**\n\n**Requirements:**\n• Bachelor's degree (for Masters) or 12 years education (for Bachelors)\n• IELTS: 6.5+ with no band below 6.0\n• Academic transcripts & English proficiency\n\n**Popular Programs:** Engineering, Business, Medicine, IT\n\n**Estimated Costs:** AUD 25,000-45,000 per year\n\n**Benefits:** Post-study work visa (2-4 years), pathway to PR\n\nWould you like information about specific cities or universities?";
    }
    
    // IELTS queries
    if (chatbotResponses.ielts.some(word => lowerMessage.includes(word))) {
        return "📚 **IELTS Information:**\n\n**Required Scores by Country:**\n• USA: 6.0-7.0 (varies by university)\n• UK: 6.5+ (no band below 6.0)\n• Canada: 6.5+ overall\n• Australia: 6.5+ (no band below 6.0)\n\n**Test Format:** Reading, Writing, Listening, Speaking (4 skills)\n\n**Preparation:** We offer comprehensive IELTS preparation courses\n\n**Test Fee in Pakistan:** Rs. 54,500\n\nWould you like information about our IELTS preparation classes or test booking?";
    }
    
    // Visa queries
    if (chatbotResponses.visa.some(word => lowerMessage.includes(word))) {
        return "📋 **Student Visa Information:**\n\n**Required Documents:**\n• Valid passport\n• University acceptance letter\n• Financial proof (bank statements)\n• IELTS/TOEFL scores\n• Academic transcripts\n• Medical certificates\n• Visa application form\n\n**Processing Time:** 2-8 weeks (varies by country)\n\n**Our Services:**\n• Free visa consultation\n• Document preparation assistance\n• Application submission support\n• Interview preparation\n\nWould you like to book a free consultation or get country-specific visa information?";
    }
    
    // Scholarship queries
    if (chatbotResponses.scholarship.some(word => lowerMessage.includes(word))) {
        return "💰 **Scholarship Opportunities:**\n\n**Available Scholarships:**\n• Merit-based scholarships (up to 100% tuition)\n• Need-based financial aid\n• Country-specific scholarships\n• University-specific funding\n\n**Popular Scholarships:**\n• Fulbright (USA)\n• Chevening (UK)\n• Australia Awards\n• Canadian Government Scholarships\n\n**Requirements:** Strong academic record, English proficiency, leadership experience\n\nWould you like help identifying scholarships for your specific program and destination?";
    }
    
    // Cost queries
    if (chatbotResponses.cost.some(word => lowerMessage.includes(word))) {
        return "💵 **Study Abroad Costs (Estimated Annual):**\n\n**Tuition + Living Expenses:**\n• USA: $25,000-$60,000\n• UK: £15,000-£35,000\n• Canada: CAD 20,000-40,000\n• Australia: AUD 25,000-45,000\n• Finland: €8,000-15,000\n• Belgium: €10,000-20,000\n• Turkey: $5,000-15,000\n\n**Additional Costs:** Visa fees, health insurance, travel\n\nUse our Cost Calculator tool for personalized estimates. Would you like help with financial planning or scholarship opportunities?";
    }
    
    // General requirements
    if (chatbotResponses.requirements.some(word => lowerMessage.includes(word))) {
        return "📝 **General Study Abroad Requirements:**\n\n**Academic:** Bachelor's degree (Masters) or equivalent qualification\n\n**English Proficiency:** IELTS/TOEFL scores\n\n**Documents:**\n• Academic transcripts\n• Statement of Purpose\n• Letters of Recommendation\n• CV/Resume\n• Passport\n\n**Financial:** Proof of funds for tuition and living expenses\n\nWhich specific country or program are you interested in? I can provide detailed requirements.";
    }
    
    // Default response for unmatched queries
    return "Thank you for your question! I'd be happy to help you with information about:\n\n🌍 **Study Destinations:** USA, UK, Canada, Australia, Finland, Belgium, Turkey\n📋 **Services:** Visa assistance, university selection, IELTS preparation\n💰 **Support:** Scholarships, cost planning, documentation\n\nFor specific guidance tailored to your situation, I recommend booking a **free consultation** with our expert counselors.\n\nIs there a particular country or service you'd like to know more about?";
}

export async function getChatbotResponse(message: string, context?: string): Promise<string> {
    try {
        // Use rule-based responses for immediate functionality
        const response = getResponseForQuery(message);
        return response;
        
        // TODO: Add AI integration once API key issue is resolved
        /* 
        const apiKey = process.env.GEMINI_API_KEY;
        if (apiKey) {
            // Use AI for more sophisticated responses
            const aiResponse = await callGeminiAPI(message, context, apiKey);
            return aiResponse;
        }
        */
        
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