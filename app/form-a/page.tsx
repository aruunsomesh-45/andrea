"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FileText, Loader2, CheckCircle, Lock } from "lucide-react";

export default function FormAPage() {
    const supabase = createClient();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const checkUser = async () => {
            if (!supabase) return;
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/login');
            } else {
                setUser(user);
            }
        };
        checkUser();
    }, [router, supabase]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            title: formData.get("title"),
            description: formData.get("description"),
            priority: formData.get("priority"),
        };

        try {
            if (!supabase) {
                alert("Configuration Error: Missing Supabase keys.");
                setLoading(false);
                return;
            }
            const { error } = await supabase
                .from("form_submissions")
                .insert([
                    {
                        user_id: user.id,
                        form_type: "form_a",
                        form_data: data,
                    },
                ]);

            if (error) throw error;
            setSubmitted(true);
        } catch (error: any) {
            console.error("Error submitting form:", error);
            alert("Submission failed: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
                <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl max-w-md w-full text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Submission Received</h2>
                    <p className="text-neutral-400 mb-6">Your entry for Form A has been securely recorded.</p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/form-b" className="text-blue-400 hover:text-blue-300">Go to Form B</Link>
                        <span className="text-neutral-600">|</span>
                        <Link href="/" className="text-neutral-400 hover:text-white">Home</Link>
                    </div>
                </div>
            </div>
        );
    }

    if (!user) return null; // Or loading spinner

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 bg-[grid-white/5]">
            <div className="w-full max-w-lg">
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">
                        <Lock size={12} /> Secure Authenticated Zone
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Restricted Access: Form A</h1>
                    <p className="text-neutral-500">Logged in as {user.email}</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl space-y-6 shadow-2xl">
                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">Project Title</label>
                        <input name="title" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Enter project title..." />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">Description</label>
                        <textarea name="description" required rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none" placeholder="Describe the requirements..." />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">Priority Level</label>
                        <select name="priority" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                            <option value="low">Low Priority</option>
                            <option value="medium">Medium Priority</option>
                            <option value="high">High Priority</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <><FileText size={18} /> Submit Form A</>}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link href="/form-b" className="text-neutral-500 hover:text-white text-sm transition-colors">Switch to Form B →</Link>
                </div>
            </div>
        </div>
    );
}
