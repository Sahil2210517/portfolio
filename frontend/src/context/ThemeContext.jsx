import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    midnight: {
        name: 'Midnight',
        bg: 'bg-slate-950',
        blobs: ['bg-blue-600/20', 'bg-cyan-600/20', 'bg-indigo-600/20'],
    },
    ocean: {
        name: 'Ocean',
        bg: 'bg-teal-950',
        blobs: ['bg-emerald-600/20', 'bg-cyan-600/20', 'bg-teal-600/20'],
    },
    sunset: {
        name: 'Sunset',
        bg: 'bg-orange-950',
        blobs: ['bg-rose-600/20', 'bg-orange-600/20', 'bg-amber-600/20'],
    },
    royal: {
        name: 'Royal',
        bg: 'bg-purple-950',
        blobs: ['bg-fuchsia-600/20', 'bg-purple-600/20', 'bg-indigo-600/20'],
    }
};

export const ThemeProvider = ({ children }) => {
    const [themeKey, setThemeKey] = useState('midnight');

    const toggleTheme = () => {
        const keys = Object.keys(themes);
        const currentIndex = keys.indexOf(themeKey);
        const nextIndex = (currentIndex + 1) % keys.length;
        setThemeKey(keys[nextIndex]);
    };

    return (
        <ThemeContext.Provider value={{ theme: themes[themeKey], themeKey, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
