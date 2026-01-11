import React from 'react';
import { useTheme } from '../context/ThemeContext';

const projects = [
    {
        title: "Learning App",
        description: "Full-stack social learning platform with real-time chat, video calling, and user management. Features secure JWT authentication.",
        tags: ["MERN Stack", "Socket.io", "WebRTC", "Tailwind"],
        color: "from-blue-600 to-indigo-500",
        link: "https://learning-app-qs2x.onrender.com/friends"
    },
    {
        title: "Job Portal",
        description: "Comprehensive job searching platform enabling interaction between users and recruiters with skill-based job recommendations.",
        tags: ["MERN Stack", "React", "Node.js", "MongoDB"],
        color: "from-emerald-500 to-teal-400",
        link: "https://job-portal-harsh.vercel.app/login"
    },
    {
        title: "Cryptotracker",
        description: "Real-time cryptocurrency price tracking application using Redux Toolkit for centralized state management.",
        tags: ["React", "TypeScript", "Redux Toolkit"],
        color: "from-orange-500 to-amber-400",
        link: "#"
    }
];

const Projects = () => {
    const { theme } = useTheme();

    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">A selection of my recent work in Full Stack Development.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2 flex flex-col cursor-pointer block"
                        >
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            <div className="p-8 flex flex-col h-full">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-slate-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <span className="inline-flex items-center text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                                    View Project <span className="ml-2">→</span>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
