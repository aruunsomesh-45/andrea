"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { AIChatWindow } from "@/components/ui/ai-chat-window";
import { createClient } from "@/utils/supabase/client";
import { useUser } from "@clerk/nextjs";


type FormData = {
    fullName: string;
    email: string;
    phone?: string;
    company?: string;
    projectType: string;
    description: string;
    features: string[];
    budget: string;
    timeline: string;
    existingUrl?: string;
    source?: string;
};

const PROJECT_TYPES = [
    "Personal Portfolio",
    "Business / Company Website",
    "E-commerce Website",
    "Landing Page",
    "Web App / SaaS",
    "Redesign Existing Website",
    "Not sure (let’s discuss)",
];

const FEATURES = [
    "Responsive (Mobile + Desktop)",
    "Contact Form",
    "Admin Dashboard",
    "Payment Integration",
    "Booking / Scheduling",
    "Authentication (Login / Signup)",
    "Animations / Advanced UI",
    "SEO Optimization",
    "Blog / CMS",
    "API Integration",
];

const BUDGET_RANGES = [
    "Less than $300",
    "$300 – $600",
    "$600 – $1,000",
    "$1,000 – $3,000",
    "$3,000+",
    "Not sure yet",
];

const TIMELINES = ["ASAP", "1–2 weeks", "3–4 weeks", "1–2 months", "Flexible"];

export default function StartProjectForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { user } = useUser();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormData>();

    // Watch features to handle checkbox styling if needed, though mostly handled by CSS
    const selectedFeatures = watch("features") || [];

    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setErrorMsg(null);

        try {
            const supabase = createClient();
            if (!supabase) {
                setErrorMsg("Configuration error: Missing Supabase keys.");
                setIsSubmitting(false);
                return;
            }
            // Construct structured data for JSON storage
            // Map Project Type to Enum
            const projectTypeMap: Record<string, string> = {
                "Personal Portfolio": "personal_portfolio",
                "Business / Company Website": "business_company",
                "E-commerce Website": "ecommerce",
                "Landing Page": "landing_page",
                "Web App / SaaS": "web_app_saas",
                "Redesign Existing Website": "redesign",
                "Not sure (let’s discuss)": "other"
            };

            // Map Budget to Enum
            const budgetMap: Record<string, string> = {
                "Less than $300": "less_300",
                "$300 – $600": "300_600",
                "$600 – $1,000": "600_1000",
                "$1,000 – $3,000": "1000_3000",
                "$3,000+": "plus_3000",
                "Not sure yet": "unknown"
            };

            // Map Timeline to Enum
            const timelineMap: Record<string, string> = {
                "ASAP": "asap",
                "1–2 weeks": "1_2_weeks",
                "3–4 weeks": "3_4_weeks",
                "1–2 months": "1_2_months",
                "Flexible": "flexible"
            };

            const submissionData = {
                full_name: data.fullName,
                email: data.email,
                phone: data.phone || null,
                company_name: data.company || null,
                project_type: projectTypeMap[data.projectType] || 'other',
                description: data.description,
                features: data.features || [],
                budget: budgetMap[data.budget] || 'unknown',
                timeline: timelineMap[data.timeline] || 'flexible',
                existing_url: data.existingUrl || null,
                status: 'new'
            };

            const { error } = await supabase
                .from('project_leads')
                .insert([submissionData]);

            if (error) throw error;

            console.log("Form Submitted Successfully to Secure Table");
            setIsSubmitted(true);
        } catch (error: any) {
            console.error("Error submitting form (Full details):", JSON.stringify(error, null, 2));
            setErrorMsg(error.message || "Something went wrong. Please try again.");
            if (error.details) console.error("Error details:", error.details);
            if (error.hint) console.error("Error hint:", error.hint);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="w-full max-w-2xl mx-auto p-12 bg-neutral-900 border border-neutral-800 rounded-3xl text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold font-michroma mb-4">Booking Confirmed!</h2>
                    <p className="text-neutral-400 text-lg mb-8">
                        Thank you for contacting us by Andrea Agency. The meeting link will be sent to your email, please check your email.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="/contact#contact"
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 inline-block"
                        >
                            Contact Us
                        </a>
                        <button
                            onClick={() => window.location.href = "/"}
                            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
                        >
                            Back to Home
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto space-y-12">
            {/* SECTION 1: CONTACT INFO */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
            >
                <h3 className="text-xl font-michroma text-white border-b border-white/10 pb-4">
                    01. Contact Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm text-neutral-400">Full Name *</label>
                        <input
                            {...register("fullName", { required: "Name is required" })}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-blue-500 rounded-lg p-4 text-white outline-none transition-colors"
                            placeholder="John Doe"
                        />
                        {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-neutral-400">Email Address *</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                            })}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-blue-500 rounded-lg p-4 text-white outline-none transition-colors"
                            placeholder="john@company.com"
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-neutral-400">Phone / WhatsApp *</label>
                        <input
                            {...register("phone", {
                                required: "Phone is required",
                                pattern: {
                                    value: /^\+?[0-9\s\-\(\)]{10,20}$/,
                                    message: "Please enter a valid phone number with country code (e.g. +1...)"
                                }
                            })}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-blue-500 rounded-lg p-4 text-white outline-none transition-colors"
                            placeholder="+1 (555) 000-0000"
                        />
                        {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-neutral-400">Company Name</label>
                        <input
                            {...register("company")}
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-blue-500 rounded-lg p-4 text-white outline-none transition-colors"
                            placeholder="Andrea Agency"
                        />
                    </div>
                </div>
            </motion.div>

            {/* SECTION 2: PROJECT TYPE */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
            >
                <h3 className="text-xl font-michroma text-white border-b border-white/10 pb-4">
                    02. Project Type
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PROJECT_TYPES.map((type) => (
                        <label key={type} className="relative group cursor-pointer">
                            <input
                                type="radio"
                                value={type}
                                {...register("projectType", { required: "Please select a project type" })}
                                className="peer sr-only"
                            />
                            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 peer-checked:border-blue-500 peer-checked:bg-blue-500/10 hover:border-neutral-600 transition-all text-sm text-neutral-300 peer-checked:text-white">
                                {type}
                            </div>
                        </label>
                    ))}
                </div>
                {errors.projectType && <span className="text-red-500 text-xs block">{errors.projectType.message}</span>}
            </motion.div>

            {/* SECTION 3: PROJECT DETAILS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <h3 className="text-xl font-michroma text-white border-b border-white/10 pb-4">
                    03. Project Details
                </h3>

                <div className="space-y-4">
                    <label className="text-sm text-neutral-400">Project Description</label>
                    <div className="animate-in fade-in zoom-in duration-300">
                        <AIChatWindow
                            onComplete={(summary) => {
                                // In a real app, we might continually update the hidden field or state as the conversation progresses
                                // For now, we are capturing the summary or last intent
                            }}
                        />
                        {/* We still register the field so react-hook-form handles submission, 
                            but we set a default value or update it via setValue if we wanted to be fancy.
                            For this demo, we can just let it be valid by default or "AI Assistant Context" */}
                        <input
                            type="hidden"
                            {...register("description")}
                            value="Discussion handled via AI Assistant"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-sm text-neutral-400 block">Required Features</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {FEATURES.map((feature) => (
                            <label key={feature} className="flex items-center space-x-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    value={feature}
                                    {...register("features")}
                                    className="w-5 h-5 rounded border-neutral-700 bg-neutral-800 checked:bg-blue-500 focus:ring-blue-500 focus:ring-offset-black"
                                />
                                <span className="text-neutral-300 text-sm group-hover:text-white transition-colors">{feature}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* SECTION 4: BUDGET & TIMELINE */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
            >
                <h3 className="text-xl font-michroma text-white border-b border-white/10 pb-4">
                    04. Budget & Timeline
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <label className="text-sm text-neutral-400 block">
                            Budget Range
                            <span className="block text-xs text-neutral-500 font-normal mt-1">
                                Estimate your project budget
                            </span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {BUDGET_RANGES.map((range) => (
                                <label key={range} className="relative cursor-pointer">
                                    <input
                                        type="radio"
                                        value={range}
                                        {...register("budget", { required: "Please select a budget range" })}
                                        className="peer sr-only"
                                    />
                                    <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 peer-checked:border-green-500 peer-checked:bg-green-500/10 hover:border-neutral-600 transition-all text-sm text-neutral-300 peer-checked:text-white flex items-center justify-between">
                                        {range}
                                    </div>
                                </label>
                            ))}
                        </div>
                        {errors.budget && <span className="text-red-500 text-xs">{errors.budget.message}</span>}
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm text-neutral-400 block">
                            Timeline
                            <span className="block text-xs text-neutral-500 font-normal mt-1">
                                When do you need this completed?
                            </span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {TIMELINES.map((time) => (
                                <label key={time} className="relative cursor-pointer">
                                    <input
                                        type="radio"
                                        value={time}
                                        {...register("timeline", { required: "Please select a timeline" })}
                                        className="peer sr-only"
                                    />
                                    <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 peer-checked:border-purple-500 peer-checked:bg-purple-500/10 hover:border-neutral-600 transition-all text-sm text-neutral-300 peer-checked:text-white flex items-center justify-between">
                                        {time}
                                    </div>
                                </label>
                            ))}
                        </div>
                        {errors.timeline && <span className="text-red-500 text-xs">{errors.timeline.message}</span>}
                    </div>
                </div>

                <div className="space-y-2 pt-4">
                    <label className="text-sm text-neutral-400">Existing Website URL (Optional)</label>
                    <input
                        {...register("existingUrl")}
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-blue-500 rounded-lg p-4 text-white outline-none transition-colors"
                        placeholder="https://example.com"
                    />
                </div>
            </motion.div>

            {/* SUBMIT */}
            <div className="pt-8">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-michroma"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        <>
                            Start My Project
                            <ArrowRight className="w-5 h-5" />
                        </>
                    )}
                </button>
                <p className="text-center md:text-left text-xs text-neutral-500 mt-4">
                    By submitting this form, you agree to the storing and processing of your data by Andrea Agency.
                </p>
                {errorMsg && (
                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm text-center">
                        {errorMsg}
                    </div>
                )}
            </div>

        </form>
    );
}
