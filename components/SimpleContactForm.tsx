"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useUser } from "@clerk/nextjs";

type SimpleFormData = {
    fullName: string;
    email: string;
    message: string;
};

export default function SimpleContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const { user } = useUser();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SimpleFormData>();

    const onSubmit = async (data: SimpleFormData) => {
        setIsSubmitting(true);
        setErrorMsg(null);

        try {

            const supabase = createClient();

            if (!supabase) {
                console.error("Supabase client is null. Check environment variables.");
                setErrorMsg("Configuration error. Please try again later.");
                return;
            }

            const { error } = await supabase.from('form_submissions').insert([
                {
                    user_id: user?.id || null,
                    form_type: 'contact',
                    form_data: {
                        full_name: data.fullName,
                        email: data.email,
                        message: data.message
                    }
                }
            ]);

            if (error) throw error;
            setIsSubmitted(true);
        } catch (error: any) {
            console.error("Error submitting form:", error?.message || "Unknown error"); setErrorMsg("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle className="text-green-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-neutral-400">Thanks for reaching out. I'll get back to you shortly.</p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-blue-400 hover:text-blue-300 mt-4 underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
                {/* Name */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-neutral-400 mb-1">
                        Name
                    </label>
                    <input
                        id="fullName"
                        {...register("fullName", { required: "Name is required" })}
                        type="text"
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                        placeholder="John Doe"
                    />
                    {errors.fullName && <span className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })}
                        type="email"
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register("message", { required: "Message is required" })}
                        rows={4}
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
                        placeholder="How can I help you?"
                    />
                    {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
                </div>
            </div>

            {errorMsg && <div className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded-lg">{errorMsg}</div>}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="w-4 h-4 ml-1" />
                    </>
                )}
            </button>
        </form>
    );
}
