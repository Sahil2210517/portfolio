import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
    const { theme } = useTheme();

    return (
        <div className="min-h-screen bg-slate-950">
            <Navbar />

            <main>
                <Hero />
                <Projects />
                <About />
                <Contact />
            </main>
        </div>
    );
};

export default HomePage;
