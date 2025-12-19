"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, Loader2, CheckCircle, Lock } from "lucide-react";

export default function FormBPage() {
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
            department: formData.get("department"),
            notes: formData.get("notes"),
            clearance: formData.get("clearance"),
        };

        try {
            if (!supabase) {
                alert("Configuration Error: Missing Supabase Keys.");
                setLoading(false);
                return;
            }
            const { error } = await supabase
                .from("form_submissions")
                .insert([
                    {
                        user_id: user.id,
                        form_type: "form_b",
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
                    <p className="text-neutral-400 mb-6">Your entry for Form B has been securely recorded.</p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/form-a" className="text-purple-400 hover:text-purple-300">Go to Form A</Link>
                        <span className="text-neutral-600">|</span>
                        <Link href="/" className="text-neutral-400 hover:text-white">Home</Link>
                    </div>
                </div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black">
            <div className="w-full max-w-lg">
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest mb-4">
                        <Lock size={12} /> Secure Authenticated Zone
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Restricted Access: Form B</h1>
                    <p className="text-neutral-500">Logged in as {user.email}</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl space-y-6 shadow-2xl">
                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">Department</label>
                        <select name="department" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all appearance-none">
                            <option value="engineering">Engineering</option>
                            <option value="design">Design</option>
                            <option value="operations">Operations</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">Security Note</label>
                        <textarea name="notes" required rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all resize-none" placeholder="Confidential notes..." />
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="clearance" id="clearance" className="w-5 h-5 rounded border-white/10 bg-black/50 checked:bg-purple-500" required />
                        <label htmlFor="clearance" className="text-sm text-neutral-400">I confirm I have security clearance</label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <><ShieldCheck size={18} /> Submit Form B</>}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link href="/form-a" className="text-neutral-500 hover:text-white text-sm transition-colors">Switch to Form A →</Link>
                </div>
            </div>
        </div>
    );
}
