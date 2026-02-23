"use client";

import { useRef } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = [
    { name: "GitHub", icon: Github, url: "https://github.com/viniciuseira" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/viniciuseira" },
    { name: "Email", icon: Mail, url: "mailto:viniciusantos.eira@gmail.com" },
];

export const Footer = () => {
    const footerRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer ref={footerRef} className="bg-[#02040a] text-gray-300 py-12 px-6 border-t border-gray-900/50">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col gap-6 mb-20">
                    <h3 className="text-white font-bold tracking-widest uppercase text-sm">
                        Conecte-se
                    </h3>

                    <div className="flex flex-col gap-4">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 text-gray-400 hover:text-white group transition-colors w-fit"
                            >
                                <div className="p-3 rounded-full bg-[#0A0F1C] border border-gray-800 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all">
                                    <link.icon size={20} />
                                </div>

                                <span className="text-lg font-medium">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-800/50">

                    <p className="text-gray-500 text-sm font-mono text-center md:text-left">
                        &copy; {new Date().getFullYear()} Vinícius Eira.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                        <span className="text-sm font-medium">Voltar ao topo</span>
                        <div className="p-2 rounded-full border border-gray-700 group-hover:border-blue-400 group-hover:-translate-y-1 transition-all">
                            <ArrowUp size={16} />
                        </div>
                    </button>

                </div>

            </div>
        </footer>
    );
};
