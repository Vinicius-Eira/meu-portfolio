"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiSpring,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiFigma,
    SiLinux,
    SiJavascript,
    SiPrisma,
    SiMongodb,
    SiGraphql
} from "react-icons/si";
import { FaJava, FaCode } from "react-icons/fa";

const SKILLS = [
    {
        category: "Backend & Core",
        icon: <SiNodedotjs className="text-green-500" />,
        description: "APIs, regras de negócio e arquitetura de sistemas",
        techs: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "Spring", icon: SiSpring, color: "#6DB33F" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
        ],
    },
    {
        category: "Database & Cloud",
        icon: <SiPostgresql className="text-blue-300" />,
        description: "Modelagem de dados, persistência e infraestrutura de aplicações",
        techs: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            { name: "Prisma", icon: SiPrisma, color: "#ffffff" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
        ],
    },
    {
        category: "Frontend & UI",
        icon: <SiReact className="text-blue-400" />,
        description: "Interfaces e dashboards para consumo de APIs",
        techs: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "JavaScript", icon: SiJavascript, color: "#f2cb1eff"},
        ],
    },
];

const SkillCard = ({ category, index }: { category: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-3xl bg-[#111827]/40 border border-gray-800 backdrop-blur-sm overflow-hidden hover:border-blue-500/30 transition-all duration-500"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />

            <div className="relative z-10 mb-8">
                <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-700 text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {category.category}
                    </h3>
                </div>
                <p className="text-gray-400 text-sm pl-1 border-l-2 border-gray-800 group-hover:border-blue-500/50 transition-colors">
                    {category.description}
                </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-3">
                {category.techs.map((tech: any, i: number) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:border-gray-500 hover:bg-gray-800 transition-all cursor-default"
                    >
                        <tech.icon style={{ color: tech.color }} className="text-lg" />
                        <span className="text-xs font-medium text-gray-300">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const TechMarquee = () => {
    return (
        <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex whitespace-nowrap gap-10 text-8xl font-black text-white"
            >
                {["REACT", "NEXT.JS", "NODE", "TYPESCRIPT", "PYTHON", "JAVA", "SQL", "API REST"].map((text, i) => (
                    <span key={i}>{text}</span>
                ))}
                {["REACT", "NEXT.JS", "NODE", "TYPESCRIPT", "PYTHON", "AWS", "JAVA", "DOCKER"].map((text, i) => (
                    <span key={i + 10}>{text}</span>
                ))}
            </motion.div>
        </div>
    );
};

export const SkillsSection = () => {
    const sectionRef = useRef(null);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="py-32 px-6 bg-[#030712] relative overflow-hidden">
            <TechMarquee />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Tech Stack
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Técnica.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Tecnologias que utilizo no desenvolvimento de sistemas, com foco principal em backend e visão full-cycle..
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {SKILLS.map((item, index) => (
                        <SkillCard key={index} category={item} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-gray-800 text-center"
                >
                    <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                        <FaCode className="text-blue-500" />
                        <span>Sempre aprendendo e explorando novas tecnologias.</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};