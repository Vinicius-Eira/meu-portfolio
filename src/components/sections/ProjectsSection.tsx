"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const PROJECTS = [
    {
        id: "01",
        title: "CarCheck",
        subtitle: "Automotivo & Inteligência Artificial",
        description:
            "Uma revolução no autoatendimento veicular. Utilizamos a API do IBM Watson para criar um assistente virtual capaz de diagnosticar problemas mecânicos através de linguagem natural, agendar serviços e manter um histórico inteligente.",
        tags: ["React", "TypeScript", "Python", "IBM Watson"],
        image: "/images/carcheck.png",
        links: { github: "https://github.com/Vinicius-Eira/CarCheck", live: "https://carcheck-wine.vercel.app/" },
        color: "from-blue-600 to-cyan-500", 
    },
    {
        id: "02",
        title: "Saldo +",
        subtitle: "Fintech & Marketplace",
        description:
            "Solução financeira robusta para freelancers. Integra gestão de carreira, controle de fluxo de caixa e um sistema de marketplace para conexão direta com clientes, tudo em uma interface limpa e responsiva.",
        tags: ["Next.js", "TypeScript", "Supabase", "Stripe"],
        image: "/images/saldo-inteligente.png",
        links: { github: "https://github.com/Vinicius-Eira/saldo-inteligente", live: "https://saldoplus-app.vercel.app/" },
        color: "from-emerald-500 to-teal-400",
    },
];

const ProjectRow = ({ project, index }: { project: any; index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"], 
    });

    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            style={{ opacity: opacityProgress, scale: scaleProgress }}
            className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20 mb-32`}
        >
            <div className="w-full lg:w-3/5 group relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 rounded-[2rem]`} />

                <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-zinc-900">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                        sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center relative">

                <span className="absolute -top-20 -left-10 text-[150px] font-black text-white/5 select-none pointer-events-none z-0">
                    {project.id}
                </span>

                <div className="relative z-10 space-y-6">
                    <div className="space-y-2">
                        <span className={`text-sm font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}>
                            {project.subtitle}
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-zinc-400 text-lg leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 text-xs font-mono text-zinc-300 bg-white/5 border border-white/10 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn flex items-center gap-2 text-white font-semibold border-b border-white/30 pb-1 hover:border-white transition-all hover:text-blue-400 hover:border-blue-400"
                            >
                                <FiExternalLink /> Ver Projeto
                                <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                            </a>
                        )}
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
                            >
                                <FiGithub size={18} /> Código Fonte
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-[#030712] relative overflow-hidden">

            <div className="absolute inset-0 bg-[url('/grid-texture.svg')] opacity-[0.03] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">

                <div className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
                    >
                        Trabalhos <span className="text-zinc-600">Recentes.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
                    />
                </div>

                <div className="flex flex-col">
                    {PROJECTS.map((project, index) => (
                        <ProjectRow key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="text-center mt-20">
                    <a
                        href="https://github.com/Vinicius-Eira?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-zinc-900 text-white font-bold rounded-full border border-zinc-800 hover:bg-zinc-800 hover:scale-105 transition-all duration-300"
                    >
                        Ver Repositório Completo
                    </a>
                </div>

            </div>
        </section>
    );
};