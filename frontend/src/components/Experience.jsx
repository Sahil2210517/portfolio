import React from 'react';

const Experience = () => {
    const experience = [
        {
            role: "Software Developer Intern",
            company: "DreamPi",
            duration: "2025 - Present",
            description: "Contributing to the development of a working ERP system, handling core modules and real-world business workflows. Involved in feature implementation, bug fixing, and optimization."
        },
        {
            role: "Software Developer Intern",
            company: "Satven (Tech Mahindra)",
            duration: "Dec 2024 - Jan 2025",
            description: "Developed a responsive front end for an ID card generator using React.js and integrated QR code scanning functionality."
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Work Experience</h2>

                <div className="space-y-12">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-white/10 group hover:border-blue-500/50 transition-colors">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-[#0f1014] group-hover:scale-110 transition-transform"></div>

                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                                <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
                                <div className="flex flex-wrap items-center gap-3 text-sm font-medium mb-4">
                                    <span className="text-blue-400">{exp.company}</span>
                                    <span className="h-1 w-1 rounded-full bg-slate-500"></span>
                                    <span className="text-slate-400">{exp.duration}</span>
                                </div>
                                <p className="text-slate-300 leading-relaxed text-lg">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
