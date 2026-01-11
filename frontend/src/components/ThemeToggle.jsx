import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { themeKey, toggleTheme, theme } = useTheme();

    return (
        <div className="fixed top-6 right-6 z-50">
            <button
                onClick={toggleTheme}
                className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 shadow-2xl"
            >
                <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Theme</span>
                    <span className="text-sm font-bold text-white transition-all group-hover:text-blue-400">
                        {theme.name}
                    </span>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 shadow-inner transition-transform group-hover:rotate-180">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5 text-white"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                        <circle cx="12" cy="12" r="4" />
                    </svg>
                </div>
            </button>
        </div>
    );
};

export default ThemeToggle;
