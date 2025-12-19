"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Loader2, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "ai";
    content: string;
    isTyping?: boolean;
}

interface AIChatWindowProps {
    onComplete?: (summary: string) => void;
    className?: string;
}

const INITIAL_MESSAGE: Message = {
    id: "init-1",
    role: "ai",
    content: "Hello! I noticed you're not quite sure what you need yet. No problem! Tell me a bit about your business or idea, and I'll help you figure out the perfect technical solution.",
};
export function AIChatWindow({ onComplete, className }: AIChatWindowProps) {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState("");
    const [isAiTyping, setIsAiTyping] = useState(false);
    const [isEnhancing, setIsEnhancing] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleEnhance = async () => {
        if (!inputValue.trim()) return;
        setIsEnhancing(true);

        // Simulate AI enhancement delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock enhancement logic - in a real app convert this to an API call
        const enhancements: Record<string, string> = {
            "website": "I am looking for a high-performance, responsive website that effectively communicates my brand identity and converts visitors into customers.",
            "shop": "I need a scalable e-commerce solution with secure payment gateways, inventory management, and an intuitive user experience to drive sales.",
            "app": "I require a custom web application (SaaS) with user authentication, a robust dashboard, and seamless data integration."
        };

        let enhancedText = inputValue;
        // Simple keyword matching for demo
        if (inputValue.toLowerCase().includes("shop") || inputValue.toLowerCase().includes("store")) {
            enhancedText = enhancements["shop"];
        } else if (inputValue.toLowerCase().includes("app")) {
            enhancedText = enhancements["app"];
        } else {
            enhancedText = `I am looking to build a digital solution that helps with: ${inputValue}. I need guidance on the best technologies and approach.`;
        }

        setInputValue(enhancedText);
        setIsEnhancing(false);
    };

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const newUserMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue,
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInputValue("");
        setIsAiTyping(true);

        // Simulate AI processing time
        await new Promise(resolve => setTimeout(resolve, 2000));

        const aiResponse: Message = {
            id: (Date.now() + 1).toString(),
            role: "ai",
            content: "Thanks for sharing that! Based on what you've described, I'd recommend we start with a discovery phase to outline your core features. Would you like to schedule a quick call to discuss this further?",
        };

        setMessages(prev => [...prev, aiResponse]);
        setIsAiTyping(false);

        if (onComplete) {
            onComplete(newUserMsg.content); // Or pass full conversation history
        }
    };

    return (
        <div className={cn("flex flex-col h-[600px] w-full bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl", className)}>

            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                        <Bot className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm">AI Project Assistant</h3>
                        <p className="text-xs text-blue-400 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Online
                        </p>
                    </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] sm:text-xs text-blue-300 font-mono hidden sm:block">
                    POWERED BY AI
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            "flex gap-4 max-w-[85%]",
                            msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                        )}
                    >
                        <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                            msg.role === "ai" ? "bg-blue-600/20 text-blue-400" : "bg-neutral-700 text-white"
                        )}>
                            {msg.role === "ai" ? <Bot size={16} /> : <User size={16} />}
                        </div>
                        <div className={cn(
                            "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                            msg.role === "ai"
                                ? "bg-neutral-800 text-neutral-200 rounded-tl-none border border-white/5"
                                : "bg-blue-600 text-white rounded-tr-none"
                        )}>
                            {msg.content}
                        </div>
                    </motion.div>
                ))}

                {isAiTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4 max-w-[85%]"
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot size={16} />
                        </div>
                        <div className="bg-neutral-800 text-neutral-400 p-4 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                            <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce" />
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-neutral-900 border-t border-white/5">
                <div className="relative">
                    <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        className="w-full bg-neutral-800 border-none rounded-2xl pl-4 pr-32 py-4 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-blue-500/50 resize-none h-14 scrollbar-hide"
                        rows={1}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                    />

                    <div className="absolute right-2 top-2 flex gap-2">
                        <button
                            onClick={handleEnhance}
                            disabled={!inputValue.trim() || isEnhancing}
                            className="p-2 rounded-xl bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group relative"
                            title="Enhance with AI"
                        >
                            {isEnhancing ? <Loader2 size={20} className="animate-spin" /> : <Sparkles size={20} />}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                                AI Elaborate
                            </span>
                        </button>

                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                            className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p className="text-[10px] text-neutral-500">
                        AI can make mistakes. Please review generated text.
                    </p>
                </div>
            </div>
        </div>
    );
}
