import React from 'react';
import SignupForm from '../components/SignupForm';
import { useTheme } from '../context/ThemeContext';

const SignupPage = () => {
    const { theme } = useTheme();

    return (
        <div className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden transition-colors duration-500 ${theme.bg}`}>
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full blur-[130px] animate-pulse transition-colors duration-700 ${theme.blobs[0]}`}></div>
                <div className={`absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[130px] animate-pulse delay-700 transition-colors duration-700 ${theme.blobs[1]}`}></div>
                <div className={`absolute bottom-[20%] right-[10%] h-[400px] w-[400px] rounded-full blur-[110px] animate-pulse delay-1000 transition-colors duration-700 ${theme.blobs[2]}`}></div>
            </div>

            {/* Centered Content */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 py-12">
                <div className="mb-8 flex items-center gap-2 lg:hidden">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-400 p-2 shadow-lg shadow-indigo-500/20">
                        <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-white" stroke="currentColor" strokeWidth="2">
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <polyline points="17 11 19 13 23 9" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">MERN.</span>
                </div>

                <SignupForm />
            </div>
        </div>
    );
};

export default SignupPage;
