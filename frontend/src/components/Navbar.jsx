import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import axios from '../lib/axios';

const Navbar = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post('/auth/logout');
            localStorage.removeItem('user');
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
            localStorage.removeItem('user');
            navigate('/login');
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 p-1.5">
                        <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-white" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    PORTFOLIO.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#hero" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</a>
                    <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Projects</a>
                    <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
                    <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</a>

                    <div className="h-4 w-px bg-white/10"></div>

                    <div className="h-4 w-px bg-white/10"></div>

                    {localStorage.getItem('user') && (
                        <button
                            onClick={handleLogout}
                            className="rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white transition-all hover:bg-white/20 border border-white/10 hover:border-white/20"
                        >
                            Sign Out
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white p-2"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4">
                    <a href="#hero" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-300">Home</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-300">Projects</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-300">About</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-300">Contact</a>
                    <div className="h-px w-full bg-white/10 my-2"></div>
                    <div className="h-px w-full bg-white/10 my-2"></div>
                    {localStorage.getItem('user') && (
                        <button
                            onClick={handleLogout}
                            className="w-full rounded-xl bg-red-500/10 px-5 py-3 text-sm font-bold text-red-400 border border-red-500/20"
                        >
                            Sign Out
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
