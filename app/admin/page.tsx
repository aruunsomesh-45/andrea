"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut, Loader2, MessageSquare, Briefcase, Calendar, DollarSign, Layout, User, Mail, Phone, ExternalLink } from "lucide-react";

type Lead = {
    id: string;
    created_at: string;
    name: string;
    email: string;
    project_details: string;
    status: string;
};

type ProjectLead = {
    id: string;
    created_at: string;
    full_name: string;
    email: string;
    phone?: string;
    company_name?: string;
    project_type: string;
    description: string;
    features: string[];
    budget: string;
    timeline: string;
    existing_url?: string;
    status: string;
};

type Appointment = {
    id: string;
    created_at: string;
    name: string;
    email: string;
    message?: string;
    start_time: string;
    end_time: string;
    status: string;
};

export default function AdminDashboard() {
    const supabase = createClient();
    const [loading, setLoading] = useState(true);
    const [leads, setLeads] = useState<Lead[]>([]);
    const [projectLeads, setProjectLeads] = useState<ProjectLead[]>([]);
    const [formSubmissions, setFormSubmissions] = useState<any[]>([]);
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [activeTab, setActiveTab] = useState<'contact' | 'projects' | 'forms' | 'bookings'>('contact');
    const router = useRouter();

    useEffect(() => {
        fetchData();
        setLoading(false);
    }, []);

    const fetchData = async () => {
        if (!supabase) return;
        try {
            // Fetch Contact Form Leads
            const { data: leadsData, error: leadsError } = await supabase
                .from('leads')
                .select('*')
                .order('created_at', { ascending: false });

            if (!leadsError && leadsData) setLeads(leadsData);

            // Fetch Project Leads
            const { data: projectData, error: projectError } = await supabase
                .from('project_leads')
                .select('*')
                .order('created_at', { ascending: false });

            if (!projectError && projectData) setProjectLeads(projectData);

            // Fetch Secure Forms (RLS will filter this to user's own data, unless policy allows all)
            const { data: formsData, error: formsError } = await supabase
                .from('form_submissions')
                .select('*')
                .order('created_at', { ascending: false });

            if (!formsError && formsData) setFormSubmissions(formsData);

            // Fetch Appointments
            const { data: appointmentData, error: appointmentError } = await supabase
                .from('appointments')
                .select('*')
                .order('start_time', { ascending: true }); // Order by upcoming

            if (!appointmentError && appointmentData) setAppointments(appointmentData);

        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30">

            {/* Navbar */}
            <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">A</div>
                        <span className="font-bold text-white">Admin Dashboard</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="/form-a" className="text-xs text-blue-400 hover:text-blue-300">Form A</a>
                        <a href="/form-b" className="text-xs text-purple-400 hover:text-purple-300">Form B</a>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-6 py-10">

                {/* Tabs */}
                <div className="flex gap-6 border-b border-white/10 mb-8 overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('contact')}
                        className={`pb-4 px-2 text-sm font-medium transition-colors relative whitespace-nowrap ${activeTab === 'contact' ? 'text-blue-500' : 'text-neutral-500 hover:text-neutral-300'}`}
                    >
                        Contact Inquiries
                        <span className="ml-2 bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full">{leads.length}</span>
                        {activeTab === 'contact' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>}
                    </button>
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`pb-4 px-2 text-sm font-medium transition-colors relative whitespace-nowrap ${activeTab === 'projects' ? 'text-purple-500' : 'text-neutral-500 hover:text-neutral-300'}`}
                    >
                        Project Applications
                        <span className="ml-2 bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full">{projectLeads.length}</span>
                        {activeTab === 'projects' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"></div>}
                    </button>
                    <button
                        onClick={() => setActiveTab('forms')}
                        className={`pb-4 px-2 text-sm font-medium transition-colors relative whitespace-nowrap ${activeTab === 'forms' ? 'text-green-500' : 'text-neutral-500 hover:text-neutral-300'}`}
                    >
                        Secure Forms
                        <span className="ml-2 bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full">{formSubmissions.length}</span>
                        {activeTab === 'forms' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"></div>}
                    </button>
                    <button
                        onClick={() => setActiveTab('bookings')}
                        className={`pb-4 px-2 text-sm font-medium transition-colors relative whitespace-nowrap ${activeTab === 'bookings' ? 'text-amber-500' : 'text-neutral-500 hover:text-neutral-300'}`}
                    >
                        Bookings
                        <span className="ml-2 bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full">{appointments.length}</span>
                        {activeTab === 'bookings' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></div>}
                    </button>
                </div>

                {/* Content */}
                <div className="space-y-6">

                    {/* CONTACT LEADS TAB */}
                    {activeTab === 'contact' && (
                        <div className="grid grid-cols-1 gap-4">
                            {leads.length === 0 ? (
                                <div className="text-center py-20 text-neutral-500">No contact inquiries yet.</div>
                            ) : (
                                leads.map((lead) => (
                                    <div key={lead.id} className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-white font-bold text-lg mb-1">{lead.name}</h3>
                                                <a href={`mailto:${lead.email}`} className="text-blue-400 text-sm hover:underline flex items-center gap-2">
                                                    <Mail size={14} /> {lead.email}
                                                </a>
                                            </div>
                                            <span className="text-xs text-neutral-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                                                {new Date(lead.created_at).toLocaleDateString()} at {new Date(lead.created_at).toLocaleTimeString()}
                                            </span>
                                        </div>
                                        <div className="bg-black/50 p-4 rounded-xl border border-white/5 text-neutral-300 text-sm leading-relaxed">
                                            {lead.project_details}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* PROJECT LEADS TAB */}
                    {activeTab === 'projects' && (
                        <div className="grid grid-cols-1 gap-4">
                            {projectLeads.length === 0 ? (
                                <div className="text-center py-20 text-neutral-500">
                                    No project applications yet.
                                    <br /><span className="text-xs opacity-50">(If you just created the table, submit a test form!)</span>
                                </div>
                            ) : (
                                projectLeads.map((project) => (
                                    <div key={project.id} className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:border-purple-500/20 transition-colors group">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="text-white font-bold text-lg">{project.full_name}</h3>
                                                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">
                                                        {project.project_type}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                                                    <a href={`mailto:${project.email}`} className="hover:text-white flex items-center gap-1.5"><Mail size={14} /> {project.email}</a>
                                                    {project.phone && <span className="flex items-center gap-1.5"><Phone size={14} /> {project.phone}</span>}
                                                    {project.company_name && <span className="flex items-center gap-1.5"><Briefcase size={14} /> {project.company_name}</span>}
                                                </div>
                                            </div>
                                            <span className="text-xs text-neutral-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                                                {new Date(project.created_at).toLocaleDateString()}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div className="space-y-4">
                                                <div>
                                                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-1 block">Vision</span>
                                                    <p className="text-neutral-300 text-sm bg-black/50 p-3 rounded-lg border border-white/5">
                                                        {project.description || "No description provided."}
                                                    </p>
                                                </div>
                                                {project.existing_url && (
                                                    <div>
                                                        <span className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-1 block">Current Site</span>
                                                        <a href={project.existing_url} target="_blank" rel="noreferrer" className="text-blue-400 text-sm hover:underline flex items-center gap-1">
                                                            {project.existing_url} <ExternalLink size={12} />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <span className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-1 block flex items-center gap-1"><DollarSign size={10} /> Budget</span>
                                                        <span className="text-white text-sm">{project.budget}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-1 block flex items-center gap-1"><Calendar size={10} /> Timeline</span>
                                                        <span className="text-white text-sm">{project.timeline}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-2 block flex items-center gap-1"><Layout size={10} /> Features</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.features && project.features.map((f, i) => (
                                                            <span key={i} className="text-xs bg-white/5 border border-white/5 text-neutral-300 px-2 py-1 rounded">
                                                                {f}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* SECURE FORMS TAB */}
                    {activeTab === 'forms' && (
                        <div className="grid grid-cols-1 gap-4">
                            {formSubmissions.length === 0 ? (
                                <div className="text-center py-20 text-neutral-500">
                                    No form submissions found.
                                    <br /><span className="text-xs opacity-50">(Only your own submissions need to be fetched via RLS)</span>
                                </div>
                            ) : (
                                formSubmissions.map((form) => (
                                    <div key={form.id} className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:border-green-500/20 transition-colors">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <span className={`inline-block px-2 py-0.5 rounded text-xs uppercase font-bold tracking-wider mb-2 ${form.form_type === 'form_a' ? 'bg-blue-900/20 text-blue-400 border border-blue-500/30' : 'bg-purple-900/20 text-purple-400 border border-purple-500/30'}`}>
                                                    {form.form_type === 'form_a' ? 'Form A' : 'Form B'}
                                                </span>
                                                <h3 className="text-white font-bold text-lg">Submission {form.id.slice(0, 8)}...</h3>
                                            </div>
                                            <span className="text-xs text-neutral-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                                                {new Date(form.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="bg-black/50 p-4 rounded-xl border border-white/5 text-neutral-300 text-sm font-mono overflow-x-auto">
                                            <pre>{JSON.stringify(form.form_data, null, 2)}</pre>
                                        </div>
                                        <div className="mt-4 text-xs text-neutral-500">
                                            User ID: {form.user_id}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* BOOKINGS TAB */}
                    {activeTab === 'bookings' && (
                        <div className="grid grid-cols-1 gap-4">
                            {appointments.length === 0 ? (
                                <div className="text-center py-20 text-neutral-500">
                                    No appointments scheduled yet.
                                </div>
                            ) : (
                                appointments.map((apt) => (
                                    <div key={apt.id} className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:border-amber-500/20 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                            <div className="flex items-start gap-4">
                                                <div className="bg-amber-500/10 text-amber-500 p-3 rounded-xl">
                                                    <Calendar size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold text-lg mb-1">{apt.name}</h3>
                                                    <a href={`mailto:${apt.email}`} className="text-neutral-400 text-sm hover:text-white transition-colors flex items-center gap-1.5 mb-2">
                                                        <Mail size={14} /> {apt.email}
                                                    </a>
                                                    <div className="text-sm text-neutral-300 flex items-center gap-2">
                                                        <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                                            {new Date(apt.start_time).toLocaleDateString()}
                                                        </span>
                                                        <span>
                                                            {new Date(apt.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(apt.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end gap-2">
                                                <span className={`px-3 py-1 rounded-full text-xs uppercase font-bold tracking-wider ${apt.status === 'confirmed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                                                    {apt.status}
                                                </span>
                                                <span className="text-[10px] text-neutral-600">
                                                    Booked: {new Date(apt.created_at).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                        {apt.message && (
                                            <div className="mt-4 pt-4 border-t border-white/5">
                                                <p className="text-neutral-500 text-xs uppercase font-bold mb-1">Message</p>
                                                <p className="text-neutral-300 text-sm">{apt.message}</p>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
