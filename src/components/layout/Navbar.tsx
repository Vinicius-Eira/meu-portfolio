"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [hasScrolled, setHasScrolled] = useState(false);

    const navItems = [
        { id: "home", label: "Início" },
        { id: "skills", label: "Habilidades" },
        { id: "projects", label: "Projetos" },
        { id: "about", label: "Sobre" },
        { id: "contact", label: "Contato" },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }

            let current = "home";
            for (const item of navItems) {
                const el = document.getElementById(item.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = item.id;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${hasScrolled
                    ? "py-3 bg-[#02040a]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/5"
                    : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => scrollToSection("home")}
                >
                    <div className="p-1.5 rounded-lg bg-blue-600/10 border border-blue-600/20 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Code2 size={20} />
                    </div>
                    <span className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        Vinícius Eira
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5 ${activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {item.label}

                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                        aria-label="Abrir menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#02040a] border-b border-white/5 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left text-lg font-medium transition-colors ${activeSection === item.id ? "text-blue-400" : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.nav>
    );
};