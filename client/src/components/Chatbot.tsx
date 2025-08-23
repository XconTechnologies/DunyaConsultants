import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

interface ChatMessage {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

const quickQuestions = [
    "What are the requirements to study in the USA?",
    "How can I apply for a UK student visa?",
    "Which universities in Canada offer scholarships?", 
    "What IELTS score do I need for Australia?",
    "How much does it cost to study in Finland?",
    "What documents do I need for visa application?",
    "Can you help me choose the right course?",
    "What are the English language requirements?"
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "welcome",
            text: "👋 Hi! I'm your AI assistant from Path Visa Consultants. I'm here to help with your study abroad journey, visa questions, and university guidance. How can I assist you today?",
            isUser: false,
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    const chatMutation = useMutation({
        mutationFn: async (message: string) => {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message })
            });
            if (!response.ok) {
                throw new Error('Failed to get response');
            }
            return response.json();
        },
        onSuccess: (data: { response: string }) => {
            const botMessage: ChatMessage = {
                id: Date.now().toString() + "_bot",
                text: data.response,
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
        },
        onError: () => {
            const errorMessage: ChatMessage = {
                id: Date.now().toString() + "_error",
                text: "I'm having trouble responding right now. Please contact our consultants directly for immediate assistance.",
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        }
    });

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim() || chatMutation.isPending) return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            text: input,
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        chatMutation.mutate(input);
        setInput("");
    };

    const handleQuickQuestion = (question: string) => {
        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            text: question,
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        chatMutation.mutate(question);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!isOpen) {
        return (
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg z-50 transition-all duration-300 hover:scale-110"
                size="icon"
            >
                <MessageCircle className="h-6 w-6 text-white" />
            </Button>
        );
    }

    return (
        <Card className={`fixed bottom-6 right-6 shadow-2xl z-50 transition-all duration-300 ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[32rem]'
        } bg-white border-blue-200`}>
            <CardHeader className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Bot className="h-5 w-5" />
                        <CardTitle className="text-sm font-semibold">Path Visa Assistant</CardTitle>
                    </div>
                    <div className="flex gap-1">
                        <Button
                            onClick={() => setIsMinimized(!isMinimized)}
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-white hover:bg-white/20"
                        >
                            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                        </Button>
                        <Button
                            onClick={() => setIsOpen(false)}
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-white hover:bg-white/20"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardHeader>

            {!isMinimized && (
                <CardContent className="p-0 flex flex-col h-[calc(32rem-4rem)]">
                    <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                        <div className="space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                >
                                    {!message.isUser && (
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Bot className="h-4 w-4 text-blue-600" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                                            message.isUser
                                                ? 'bg-blue-600 text-white ml-auto'
                                                : 'bg-gray-100 text-gray-800'
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                    {message.isUser && (
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                            <User className="h-4 w-4 text-white" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {chatMutation.isPending && (
                                <div className="flex gap-2 justify-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Bot className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-800">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {messages.length === 1 && (
                            <div className="mt-4 space-y-2">
                                <p className="text-xs text-gray-600 font-medium">Quick questions to get started:</p>
                                <div className="flex flex-wrap gap-2">
                                    {quickQuestions.slice(0, 4).map((question, index) => (
                                        <Badge
                                            key={index}
                                            variant="outline"
                                            className="cursor-pointer text-xs py-1 px-2 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                                            onClick={() => handleQuickQuestion(question)}
                                        >
                                            {question}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </ScrollArea>

                    <div className="p-4 border-t bg-gray-50">
                        <div className="flex gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about study abroad, visas, universities..."
                                className="flex-1 text-sm"
                                disabled={chatMutation.isPending}
                            />
                            <Button
                                onClick={handleSend}
                                size="icon"
                                disabled={!input.trim() || chatMutation.isPending}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            AI-powered assistance for your study abroad journey
                        </p>
                    </div>
                </CardContent>
            )}
        </Card>
    );
}