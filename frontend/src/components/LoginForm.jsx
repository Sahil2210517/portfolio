import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../lib/axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await axios.post('/auth/login', { email, password });
            console.log('Login success:', res.data);
            // Token is now handled via httpOnly cookie, so we don't store it in localStorage
            localStorage.setItem('user', JSON.stringify(res.data.user)); // Keep user info if needed suitable for non-sensitive data
            navigate('/'); // Redirect to dashboard/home
        } catch (err) {
            console.error('Login failed:', err);
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex w-full max-w-[900px] flex-col overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-3xl lg:flex-row shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
            {/* Left Decoration Side (Visible on large screens) */}
            <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-12 lg:flex border-r border-white/10">
                <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-2.5 shadow-xl shadow-blue-500/20">
                        <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-white" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="text-3xl font-bold tracking-tight text-white">MERN.</span>
                </div>

                <div className="space-y-6">
                    <h2 className="text-5xl font-extrabold leading-tight text-white">
                        Start your <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Journey</span> with us.
                    </h2>
                    <p className="max-w-xs text-lg text-slate-400">
                        Experience the next generation of full-stack development with our MERN platform.
                    </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                    <span>&copy; 2026 MERN App.</span>
                    <span className="h-1 w-1 rounded-full bg-slate-700"></span>
                    <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                </div>
            </div>

            {/* Right Login Form Side */}
            <div className="flex flex-1 flex-col justify-center p-8 sm:p-12 lg:p-16">
                <div className="mb-10 space-y-3">
                    <h1 className="text-4xl font-bold tracking-tight text-white lg:hidden">
                        Sign In
                    </h1>
                    <h1 className="hidden text-4xl font-bold tracking-tight text-white lg:block">
                        Welcome Back
                    </h1>
                    <p className="text-slate-400">
                        Please enter your credentials to continue.
                    </p>
                </div>

                {error && (
                    <div className="mb-6 rounded-xl bg-red-500/10 p-4 text-sm text-red-500 border border-red-500/20">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2.5">
                        <label
                            htmlFor="email"
                            className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500 ml-1"
                        >
                            Email Address
                        </label>
                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                required
                                className="w-full rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-white placeholder-slate-600 outline-none transition-all group-hover:bg-white/[0.07] focus:border-blue-500/50 focus:bg-white/[0.1] focus:ring-4 focus:ring-blue-500/10 shadow-inner"
                            />
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between ml-1">
                            <label
                                htmlFor="password"
                                className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500"
                            >
                                Password
                            </label>
                            <a href="#" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                                Forgot password?
                            </a>
                        </div>
                        <div className="relative group">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-white placeholder-slate-600 outline-none transition-all group-hover:bg-white/[0.07] focus:border-blue-500/50 focus:bg-white/[0.1] focus:ring-4 focus:ring-blue-500/10 shadow-inner"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4.5 text-base font-bold text-white shadow-2xl shadow-blue-500/20 transition-all hover:scale-[1.01] hover:shadow-blue-500/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                        {loading ? 'Signing in...' : 'Sign In to Account'}
                    </button>
                </form>

                <div className="mt-12 text-center lg:text-left">
                    <p className="text-sm text-slate-500 font-medium">
                        Don't have an account yet?{' '}
                        <Link to="/signup" className="font-bold text-white hover:text-blue-400 transition-colors border-b border-white/20 hover:border-blue-400/50 pb-0.5">
                            Create one for free
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
