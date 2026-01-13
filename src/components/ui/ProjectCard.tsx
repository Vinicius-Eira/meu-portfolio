import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi"; 

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    links: { github: string; live: string };
    badges?: string[];
}

export const ProjectCard = ({ project }: { project: ProjectProps }) => {
    return (
        <div className="group flex flex-col h-full bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">

            <div className="relative w-full h-48 overflow-hidden bg-gray-900">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                    {project.badges?.map((badge, index) => (
                        <span
                            key={index}
                            className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full backdrop-blur-md border shadow-sm ${
                                badge === "Featured" || badge === "Destaque"
                                    ? "bg-blue-600/90 border-blue-400 text-white"
                                    : "bg-gray-900/80 border-gray-700 text-gray-300"
                            }`}
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-[10px] font-mono text-blue-300 bg-blue-950/30 rounded border border-blue-900/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-800/50 mt-auto">
                    {project.links.live && (
                        <a 
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors group/btn"
                        >
                            <FiExternalLink /> Demo
                        </a>
                    )}
                    
                    {project.links.github && (
                        <a 
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg border border-transparent hover:border-gray-700 transition-all"
                            title="Ver Código no GitHub"
                        >
                            <FiGithub size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};