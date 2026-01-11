import React from 'react';

const About = () => {
    const skills = [
        "Java", "Python", "JavaScript", "React.js", "Node.js",
        "Explore Express", "MongoDB", "SQL", "TailwindCSS", "Git/GitHub"
    ];

    const education = [
        {
            school: "Sri Sivasubramaniya Nadar College of Engineering",
            degree: "B.E. Computer Science and Engineering",
            year: "2022 - 2026",
            grade: "CGPA: 6.58/10"
        },
        {
            school: "Shiksha Niketan School, Jammu",
            degree: "Class XII - PCM + Physical Education",
            year: "2022",
            grade: "94.6%"
        }
    ];

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
        <section id="about" className="py-24 px-6 bg-black/20">
            <div className="container mx-auto max-w-5xl">
                {/* Intro & Skills */}
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-white">About Me</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            I am Sahil Singh, a final year Computer Science student with a passion for building scalable web applications.
                            My experience spans across full-stack development, from crafting responsive front-ends to architecting robust back-ends.
                            I have solved 250+ DSA problems and am constantly learning new technologies.
                        </p>
                    </div>

                    <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-6">Technical Arsenal</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-lg bg-white/10 text-white font-medium text-sm border border-white/5"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Experience & Education Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </span>
                            Experience
                        </h3>
                        <div className="space-y-8 pl-4 border-l-2 border-white/10">
                            {experience.map((exp, index) => (
                                <div key={index} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-500 border-4 border-[#0f1014]"></div>
                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                    <p className="text-blue-400 font-medium mb-2">{exp.company} • {exp.duration}</p>
                                    <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                            </span>
                            Education
                        </h3>
                        <div className="space-y-8 pl-4 border-l-2 border-white/10">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-purple-500 border-4 border-[#0f1014]"></div>
                                    <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                                    <p className="text-purple-400 font-medium mb-1">{edu.degree}</p>
                                    <p className="text-slate-500 text-sm mb-2">{edu.year}</p>
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300 border border-white/5">
                                        {edu.grade}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
