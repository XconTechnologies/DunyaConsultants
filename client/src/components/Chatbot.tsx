import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2 } from "lucide-react";

interface ChatMessage {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    isButton?: boolean;
    buttonText?: string;
    buttonAction?: string;
}

interface UserData {
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
}

type ChatStep = 
    | 'welcome' 
    | 'service-selection'
    | 'intro' 
    | 'first-name' 
    | 'last-name' 
    | 'mobile' 
    | 'email' 
    | 'registered' 
    | 'live-agent' 
    | 'transferring';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [currentStep, setCurrentStep] = useState<ChatStep>('welcome');
    const [userData, setUserData] = useState<UserData>({
        firstName: '',
        lastName: '',
        mobile: '',
        email: ''
    });
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: "welcome",
            text: "Hi! What brings you to Dunyaconsultants today?",
            isUser: false,
            timestamp: new Date(),
            isButton: true,
            buttonText: "Looking for Study Abroad",
            buttonAction: "study-abroad"
        }
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const addMessage = (text: string, isUser: boolean, isButton?: boolean, buttonText?: string, buttonAction?: string) => {
        const message: ChatMessage = {
            id: Date.now().toString() + (isUser ? "_user" : "_bot"),
            text,
            isUser,
            timestamp: new Date(),
            isButton,
            buttonText,
            buttonAction
        };
        setMessages(prev => [...prev, message]);
    };

    const handleButtonClick = (action: string) => {
        if (action === "study-abroad") {
            addMessage("Looking for Study Abroad", true);
            setCurrentStep('intro');
            setTimeout(() => {
                addMessage("Let's get started by getting to know you", false);
                setTimeout(() => {
                    addMessage("What is your first name?", false);
                    setCurrentStep('first-name');
                }, 1000);
            }, 500);
        } else if (action === "yes-live-agent") {
            addMessage("Yes", true);
            setCurrentStep('transferring');
            setTimeout(() => {
                addMessage("Thanks – transferring you now", false);
            }, 500);
        }
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        addMessage(userMessage, true);
        setInput("");

        // Handle responses based on current step
        setTimeout(() => {
            switch (currentStep) {
                case 'first-name':
                    setUserData(prev => ({ ...prev, firstName: userMessage }));
                    addMessage("What is your last name?", false);
                    setCurrentStep('last-name');
                    break;
                    
                case 'last-name':
                    setUserData(prev => ({ ...prev, lastName: userMessage }));
                    addMessage("What is your mobile number?", false);
                    setCurrentStep('mobile');
                    break;
                    
                case 'mobile':
                    setUserData(prev => ({ ...prev, mobile: userMessage }));
                    addMessage("What is your email?", false);
                    setCurrentStep('email');
                    break;
                    
                case 'email':
                    setUserData(prev => ({ ...prev, email: userMessage }));
                    setCurrentStep('registered');
                    setTimeout(() => {
                        addMessage(`Hey ${userData.firstName}, looks like you are already registered with us`, false);
                        setTimeout(() => {
                            addMessage("Do you want to chat with our Live Agent?", false, true, "Yes", "yes-live-agent");
                            setCurrentStep('live-agent');
                        }, 1000);
                    }, 500);
                    break;
                    
                default:
                    addMessage("I'm here to help you with your study abroad journey. Please follow the questions above to get started.", false);
                    break;
            }
        }, 500);
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
                        <CardTitle className="text-sm font-semibold">Dunyaconsultants Virtual Assistant</CardTitle>
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
                                        {message.isButton && message.buttonText && message.buttonAction && !message.isUser && (
                                            <div className="mt-3">
                                                <Button
                                                    onClick={() => handleButtonClick(message.buttonAction!)}
                                                    size="sm"
                                                    className="bg-gray-800 hover:bg-gray-700 text-white"
                                                >
                                                    {message.buttonText}
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                    {message.isUser && (
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                            <User className="h-4 w-4 text-white" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    <div className="p-4 border-t bg-gray-50">
                        <div className="flex gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about study abroad, visas, universities..."
                                className="flex-1 text-sm"
                                disabled={false}
                            />
                            <Button
                                onClick={handleSend}
                                size="icon"
                                disabled={!input.trim()}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            Dunyaconsultants Virtual Assistant
                        </p>
                    </div>
                </CardContent>
            )}
        </Card>
    );
}