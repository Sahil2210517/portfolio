import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();
    // Retrieve user securely
    const user = JSON.parse(localStorage.getItem('user') || '{"name": "Sahil Singh"}');
    const name = user.name || "Sahil Singh";
    const firstName = "Sahil"; // Hardcoded for design preference or use split

    return (
        <section id="hero" className="relative flex min-h-screen items-center justify-center pt-20 overflow-hidden">
            {/* Background Blooms */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className={`absolute top-[20%] left-[10%] h-[500px] w-[500px] rounded-full blur-[120px] opacity-40 bg-blue-600/30 animate-pulse`}></div>
                <div className={`absolute bottom-[20%] right-[10%] h-[500px] w-[500px] rounded-full blur-[120px] opacity-40 bg-purple-600/30 animate-pulse delay-1000`}></div>
            </div>

            <div className="container relative z-10 px-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-8 backdrop-blur-xl animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-slate-300">Available for hire</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6">
                    Hi, I'm <br className="md:hidden" />
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {firstName}.
                    </span>
                </h1>

                <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                    I build exceptional digital experiences. Specialized in <span className="text-white font-semibold">MERN Stack</span> development,
                    crafting pixel-perfect, performant, and accessible web applications.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-200"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 text-white font-bold text-lg border border-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-200 backdrop-blur-md"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
