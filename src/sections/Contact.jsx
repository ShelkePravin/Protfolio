import React, { useState } from "react";
import * as Icons from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from "../utils/constants";
import FadeIn from "../components/animations/FadeIn";
import { useRef } from "react"
import emailjs from "@emailjs/browser";


const Contact = () => {

    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const sendEmail = async () => {
        try {
            // Debug logs
            console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
            console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
            console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
            
            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    to_email: PERSONAL_INFO.email,
                    message: formData.message,
                }
            );
            console.log('Email sent successfully:', response);
            return true;
        } catch (error) {
            console.error('Email error:', error.text || error);
            return false;
        }
    };

    const [status, setStatus] = useState({ type: '', message: ''});

    // Select available icons safely
    const GitHubIcon = Icons.Github || Icons.GitHub || Icons.GithubIcon || null;
    const LinkedInIcon = Icons.Linkedin || Icons.LinkedIn || null;
    const TwitterIcon = Icons.Twitter || null;
    const MailIcon = Icons.Mail || null;
    const MapPinIcon = Icons.MapPin || null;
    const SendIcon = Icons.Send || null;
    const MessageSquareIcon = Icons.MessageSquare || null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }; 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
        setStatus({ type: 'error', message: 'Please fill in all fields' });
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        setStatus({ type: 'error', message: 'Please enter a valid email' });
        return;
    }

    const success = await sendEmail();

    if (success) {
        setStatus({
            type: 'success',
            message: "Message sent successfully! I'll get back to you soon."
        });
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } else {
        setStatus({
            type: 'error',
            message: 'Failed to send message. Please try again later.'
        });
    }
    };

    const socialIcons = {
        github: GitHubIcon,
        linkedin: LinkedInIcon,
        twitter: TwitterIcon
    }; 



    return (
        <section id="contact" className="relative py-20 bg-black overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22C55E]/20 opacity-30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22C55E]/20 opacity-30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#22C55E]/10 opacity-30 rounded-full blur-3xl"></div> 
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={0}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full mb-6">
                            {MessageSquareIcon && <MessageSquareIcon className="w-4 h-4 text-[#22C55E]" />}
                            <span className="text-sm text-[#22C55E] font-medium tracking-wider uppercase">Get In Touch</span>
                        </div> 
                        <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                            Let's Work Together
                        </h2>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">Let's discuss how we can bring your ideas to life.</p> 
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12">
                    <FadeIn delay={100}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E]/50 transition-all duration-300" placeholder="Your Name"/>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E]/50 transition-all duration-300" 
                                    placeholder="your.email@example.com"/>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E]/50 transition-all duration-300 resize-none" 
                                    rows="5"
                                    placeholder="Your message..."/>
                                </div>

                                <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-[#22C55E]/10 to-[#22C55E] text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-[#22C55E]/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                                    <span>Send Message</span>
                                    {SendIcon && <SendIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
                                </button>

                                {status.message && (
                                    <div
                                        className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'}`}
                                    >
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </FadeIn>

                    {/* Contact Info */}
                    <FadeIn delay={200}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    Let's Connect
                                </h3>
                                <p className="text-white/60 leading-relaxed">
                                    I'm Open To Work.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#22C55E]/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gradient-to-br from-[#22C55E]/20 to-[#22C55E]/20 border border-[#22C55E]/30 rounded-3xl">
                                            {MailIcon && <MailIcon className="w-6 h-6 text-[#22C55E]" />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-white/60 mb-1">Email</p>
                                            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-[#22C55E] transition-colors font-medium">
                                                {PERSONAL_INFO.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/0 to-[#22C55E]/0 group-hover:from-[#22C55E]/5 group-hover:to-[#22C55E]/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                                </div>

                                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#22C55E]/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gradient-to-br from-[#22C55E]/20 to-[#22C55E]/20 border border-[#22C55E]/30 rounded-3xl">
                                            <MapPinIcon className="w-6 h-6 text-[#22C55E]" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-white/60 mb-1">
                                                Location
                                            </p>
                                            <p className="text-white font-medium">
                                                {PERSONAL_INFO.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-white/60 m-4">Connect with me</p>
                            <div className="flex gap-4">
                                {Object.entries(SOCIAL_LINKS).slice(0,3).map(([platform, url]) => {
                                    const Icon = socialIcons[platform];
                                    return Icon ? (
                                        <a 
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#22C55E]/50 hover:scale-110 transition-all duration-300 group"
                                        >
                                            <Icon className="w-6 h-6 text-white/60 group-hover:text-[#22C55E] transition-colors" />
                                        </a>
                                    ) : null;
                                })}
                            </div>  
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}

export default Contact