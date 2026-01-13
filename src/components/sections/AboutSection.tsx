"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import {
    Heart, Coffee, BookOpen,
    GraduationCap, Code, Briefcase, Rocket
} from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const AboutSection = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const timelineRef = useRef<HTMLDivElement | null>(null);

    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const timelineInView = useInView(timelineRef, { once: true, margin: "-50px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const passions = [
        {
            icon: Heart,
            title: "Experiência do usuário",
            description: "Gosto de construir soluções claras, onde o usuário entende o que está acontecendo sem precisar pensar demais."
        },
        {
            icon: Coffee,
            title: "Solução de problemas",
            description: "Me sinto mais confortável quando o problema é complexo e exige análise, organização e tomada de decisão."
        },
        {
            icon: BookOpen,
            title: "Aprendizagem Contínua",
            description: "Aprender faz parte do meu processo, mas só adoto tecnologias quando elas fazem sentido para o problema."
        }
    ];

    const journeySteps = [
        {
            year: "2023",
            title: "Começo da Jornada",
            company: "FIAP & Projetos Pessoais",
            description: "Início da formação em tecnologia, com foco em lógica de programação, desenvolvimento backend e criação de projetos pessoais para consolidar fundamentos em Java, Python e desenvolvimento web.",
            icon: GraduationCap,
            color: "bg-purple-600",
            glow: "shadow-purple-500/50"
        },
        {
            year: "2023",
            title: "Desenvolvedor de Software",
            company: "EuFormado - Baías Educacionais",
            description: "Atuação no desenvolvimento e manutenção de sistemas web, integrando APIs de pagamento e automações de marketing. Participei da modelagem e otimização de bancos de dados, além da implementação de regras de negócio e integrações entre sistemas.",
            icon: Code,
            color: "bg-blue-600",
            glow: "shadow-blue-500/50"
        },
        {
            year: "2024",
            title: "Analista de Sistemas - Estagiário",
            company: "Forest - Tecnologia da Informação",
            description: "Atuação com ERP Protheus, realizando configurações no sistema, criação e gestão de usuários, manutenção de menus, relatórios personalizados e suporte a processos internos, com foco em estabilidade e aderência às regras de negócio.",
            icon: Briefcase,
            color: "bg-green-600",
            glow: "shadow-green-500/50"
        },
        {
            year: "2025",
            title: "Desenvolvedor Full-Stack Júnior",
            company: "Veridion Tecnologia",
            description: "Desenvolvimento de sistemas corporativos como CRM, ERP e chat interno, atuando principalmente na construção de APIs REST, regras de negócio e integrações. Também participei do desenvolvimento do front-end para consumo das APIs utilizando React e TypeScript.",
            icon: Rocket,
            color: "bg-orange-600",
            glow: "shadow-orange-500/50"
        }
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 px-6 relative overflow-hidden bg-[#030712] text-white"
        >
            <motion.div style={{ y }} className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-20 bg-blue-600" />
                <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-600" />
            </motion.div>

            <div className="max-w-6xl mx-auto relative z-10 mb-20 text-center">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                        Por Trás do Código
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light">
                        Sobre <span className="text-blue-500 font-medium">Mim</span>
                    </motion.h2>
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    <div className="flex-1 w-full space-y-12">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-md relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-transparent h-full opacity-50" />

                            <h3 className="text-2xl font-semibold mb-6 text-white">Meu Propósito</h3>
                            <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
                                <p>
                                    Acredito que tecnologia só faz sentido quando resolve problemas reais e simplifica a vida das pessoas.                                </p>
                                <p>
                                    Gosto de entender o contexto por trás de cada projeto, pensar na solução com calma e construir algo que funcione de verdade, não só no código, mas no dia a dia de quem usa.                                </p>
                            </div>
                        </motion.div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-white pl-2 border-l-4 border-blue-500">
                                O Que Eu Amo Construir
                            </h3>
                            <div className="space-y-4">
                                {passions.map((passion, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5, backgroundColor: "rgba(31, 41, 55, 0.5)" }}
                                        className="flex items-center space-x-4 p-4 rounded-xl border border-gray-800/50 bg-gray-900/30 transition-all duration-300"
                                    >
                                        <div className="p-3 rounded-lg bg-gray-800 text-blue-400">
                                            <passion.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-200">{passion.title}</h4>
                                            <p className="text-xs md:text-sm text-gray-500">{passion.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">Desenvolvido Com Dedicação Por</p>
                            <p className="text-lg font-medium text-blue-500">Vinícius Eira</p>
                        </div>
                    </div>

                    <motion.div
                        ref={timelineRef}
                        initial="hidden"
                        animate={timelineInView ? "visible" : "hidden"}
                        className="flex-1 w-full"
                    >
                        <h3 className="text-xl font-semibold mb-8 text-white pl-2 border-l-4 border-purple-500">
                            Minha Jornada de Desenvolvedor
                        </h3>

                        <div className="relative space-y-8 pl-4">
                            <div className="absolute left-[35px] top-4 bottom-10 w-0.5 bg-gray-800" />

                            {journeySteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative flex items-start gap-6 group"
                                >
                                    <div className={`relative z-10 w-14 h-14 rounded-full ${step.color} flex items-center justify-center shrink-0 shadow-lg ${step.glow} group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon size={22} className="text-white" />
                                    </div>

                                    <div className="flex-1 p-6 rounded-xl border border-gray-800 bg-gray-900/40 hover:bg-gray-900/60 transition-colors backdrop-blur-sm">
                                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                            <h4 className="text-lg font-bold text-gray-100">{step.title}</h4>
                                            <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                                                {step.year}
                                            </span>
                                        </div>

                                        <div className="text-sm font-medium text-blue-400 mb-3">
                                            {step.company}
                                        </div>

                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-24"
            >
                <p className="text-gray-400 mb-6">Cada projeto começa com uma boa conversa. Que tal iniciarmos a nossa?</p>
                <button
                    onClick={scrollToContact}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-600/40"
                >
                    Vamos Trabalhar Juntos
                </button>
            </motion.div>
        </section>
    );
};