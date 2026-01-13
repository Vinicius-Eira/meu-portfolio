"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const CONTACT_INFO = [
    {
        id: "email",
        icon: Mail,
        label: "Email",
        value: "viniciusantos.eira@gmail.com",
        link: "mailto:viniciusantos.eira@gmail.com",
    },
    {
        id: "whatsapp",
        icon: Phone,
        label: "WhatsApp",
        value: "+55 (11) 99606-3094",
        link: "https://wa.me/5511996063094",
    },
    {
        id: "location",
        icon: MapPin,
        label: "Base",
        value: "São Paulo, SP",
        link: "#",
    },
];

const GlowInput = ({ label, name, value, onChange, type = "text", required = false }: any) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative group space-y-2">
            <label htmlFor={name} className="text-sm font-medium text-gray-400 ml-1">
                {label} {required && <span className="text-blue-400">*</span>}
            </label>

            <div className="relative">
                <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-0 transition-opacity duration-500 blur-sm ${isFocused ? "opacity-70" : "group-hover:opacity-30"}`} />

                {type === "textarea" ? (
                    <textarea
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        required={required}
                        className="relative w-full bg-[#0A0F1C] border border-gray-800/50 text-white placeholder-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:bg-[#0c1222] transition-all duration-300 h-32 resize-none z-10 shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)]"
                        placeholder="Escreva sua mensagem aqui..."
                    />
                ) : (
                    <input
                        id={name}
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        required={required}
                        className="relative w-full bg-[#0A0F1C] border border-gray-800/50 text-white placeholder-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:bg-[#0c1222] transition-all duration-300 z-10 shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)]"
                        placeholder="..."
                    />
                )}
            </div>
        </div>
    );
};

export const ContactSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({ message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const phoneNumber = "5511996063094";
        const text = formData.message;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setStatus("success");
            setFormData({ message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        }, 1000);
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-16 md:py-32 px-4 md:px-6 bg-[#030712] relative overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 md:left-1/3 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-900/10 blur-[80px] md:blur-[180px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 right-0 md:right-1/3 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-cyan-900/10 blur-[80px] md:blur-[180px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 flex flex-col gap-8 md:gap-10"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-950/40 border border-blue-800/30 mb-4 md:mb-6 backdrop-blur-md">
                                <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-green-500"></span>
                                </span>
                                <span className="text-blue-200 text-[10px] md:text-xs font-bold tracking-wider uppercase">
                                    Disponível para projetos
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 md:mb-6">
                                Vamos criar algo <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                    extraordinário.
                                </span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
                                Estou pronto para transformar seus desafios em soluções digitais de alto impacto. Entre em contato e vamos conversar.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-5">
                            {CONTACT_INFO.map((info, idx) => (
                                <motion.a
                                    key={info.id}
                                    href={info.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + (idx * 0.1) }}
                                    className="group flex items-center gap-4 p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 active:scale-95"
                                >
                                    <div className="p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 text-blue-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-inner">
                                        <info.icon size={18} className="md:w-5 md:h-5" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">{info.label}</p>
                                        <p className="text-white text-sm md:text-base font-medium truncate">{info.value}</p>
                                    </div>
                                    <ArrowRight className="ml-auto text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 w-full"
                    >
                        <div className="relative bg-[#0A0F1C]/60 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-2xl shadow-black/40 overflow-hidden lg:mt-12">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

                            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-lg md:text-xl font-bold text-white">Envie uma mensagem direta</h3>
                                </div>

                                <div className="space-y-5">
                                    <GlowInput 
                                        label="Como posso ajudar?" 
                                        name="message" 
                                        type="textarea" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status !== "idle"}
                                    className="relative w-full py-3.5 md:py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white font-bold text-base md:text-lg rounded-xl shadow-lg shadow-blue-500/25 mt-2 overflow-hidden"
                                >
                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                        {status === "idle" && (
                                            <>
                                                <span>Enviar Mensagem</span>
                                                <Send size={18} />
                                            </>
                                        )}
                                        {status === "sending" && (
                                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 md:w-6 md:h-6 border-2 border-white/30 border-t-white rounded-full" />
                                        )}
                                        {status === "success" && (
                                            <>
                                                <span>Sucesso!</span>
                                            </>
                                        )}
                                    </div>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};