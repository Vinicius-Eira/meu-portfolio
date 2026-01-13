"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const HeroSection = () => {

    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, -100]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

    const socialLinks = [
        { icon: FiGithub, href: "https://github.com/Vinicius-Eira" },
        { icon: FiLinkedin, href: "https://www.linkedin.com/in/vin%C3%ADcius-eira-342ab42a5/" },
        { icon: Mail, href: "mailto:viniciusantos.eira@gmail.com" },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const textVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const imageVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut", delay: 0.5 },
        },
    };

    return (
        <div className="min-h-screen transition-colors duration-500 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
            <motion.section
                id="home"
                style={{ y: heroY }}
                className="min-h-screen flex items-center justify-center relative px-6 pt-10 overflow-hidden"
            >
                <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 
              ${isDark ? "bg-blue-500" : "bg-blue-400"}`}
                    />
                    <motion.div
                        animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 
              ${isDark ? "bg-purple-500" : "bg-purple-400"}`}
                    />
                </div>

                <div className="max-w-7xl mx-auto w-full z-10 mt-20 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-center lg:text-left max-w-xl"
                    >
                        <motion.h2
                            variants={textVariants}
                            className="text-sm uppercase tracking-widest mb-4 text-gray-600 dark:text-gray-500"
                        >
                            BACKEND DEVELOPER JÚNIOR
                        </motion.h2>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-light mb-6 leading-tight"
                        >
                            <span className="text-gray-900 dark:text-white">
                                Desenvolvedor Backend{" "}
                            </span>
                            <span className="font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                focado em APIs
                            </span>
                            <br />
                            <span className="text-gray-900 dark:text-white">
                                e regra de negócios
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-base md:text-lg mb-8 font-light leading-relaxed text-gray-600 dark:text-gray-400"
                        >
                            Backends pensados para crescer com o produto
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="/CV-ORIGINAL.pdf" 
                                download="Vinicius-Eira-CV.pdf" 
                                whileHover={{ scale: 1.05, y: -3, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 inline-block text-center"
                            >
                                Ver Currículo
                            </motion.a>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -3, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection("contact")}
                                className="cursor-pointer border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300
                           border-gray-300 hover:border-gray-400 text-gray-700
                           dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-300"
                            >
                                Entrar em Contato
                            </motion.button>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center lg:justify-start space-x-6"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="p-3 rounded-full transition-colors 
                             text-gray-600 hover:text-gray-900 hover:bg-gray-200
                             dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative flex flex-col items-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="flex justify-center space-x-6 mb-6 text-xs md:text-sm uppercase tracking-widest text-gray-500"
                        >
                            <span>Node.Js</span>
                            <span>•</span>
                            <span>Java</span>
                            <span>•</span>
                            <span>APIs REST</span>
                            <span>•</span>
                            <span>SQL</span>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 shadow-2xl relative z-10
                           border-gray-300 dark:border-gray-800"
                            >
                                <Image
                                    src="/images/meu_rosto.png"
                                    alt="Foto de Vinícius Eira"
                                    width={320}
                                    height={384}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </motion.div>

                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-4 rounded-3xl border border-blue-500/20"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-8 rounded-3xl border border-purple-500/10"
                            />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    onClick={() => scrollToSection("about")}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                >
                    <ArrowDown
                        size={20}
                        className="text-gray-400 dark:text-gray-600"
                    />
                </motion.div>
            </motion.section>
        </div>
    );
};