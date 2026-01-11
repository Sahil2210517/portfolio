import React from 'react';
import LoginForm from '../components/LoginForm';
import { useTheme } from '../context/ThemeContext';

const LoginPage = () => {
    const { theme } = useTheme();

    return (
        <div className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden transition-colors duration-500 ${theme.bg}`}>
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full blur-[130px] animate-pulse transition-colors duration-700 ${theme.blobs[0]}`}></div>
                <div className={`absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[130px] animate-pulse delay-700 transition-colors duration-700 ${theme.blobs[1]}`}></div>
                <div className={`absolute top-[30%] right-[20%] h-[400px] w-[400px] rounded-full blur-[110px] animate-pulse delay-1000 transition-colors duration-700 ${theme.blobs[2]}`}></div>
            </div>

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4">
                <div className="mb-8 flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 p-2 shadow-lg shadow-blue-500/20">
                        <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-white" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">MERN App</span>
                </div>

                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
