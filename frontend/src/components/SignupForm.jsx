import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../lib/axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            const res = await axios.post('/auth/signup', {
                name: formData.username,
                email: formData.email,
                password: formData.password,
            });
            console.log('Signup success:', res.data);
            // Cookie is set by backend
            navigate('/login'); // Redirect to login page
        } catch (err) {
            console.error('Signup failed:', err);
            setError(err.response?.data?.message || 'Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex w-full max-w-[900px] flex-col overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-3xl lg:flex-row shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
            {/* Right Login Form Side (Used as Register on left for variety) */}
            <div className="flex flex-1 flex-col justify-center p-8 sm:p-12 lg:p-16">
                <div className="mb-10 space-y-3">
                    <h1 className="text-4xl font-bold tracking-tight text-white lg:hidden">
                        Create Account
                    </h1>
                    <h1 className="hidden text-4xl font-bold tracking-tight text-white lg:block">
                        Join MERN.
                    </h1>
                    <p className="text-slate-400">
                        Sign up to get started with your new account.
                    </p>
                </div>

                {error && (
                    <div className="mb-6 rounded-xl bg-red-500/10 p-4 text-sm text-red-500 border border-red-500/20">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2.5">
                            <label
                                htmlFor="username"
                                className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500 ml-1"
                            >
                                Full Name
                            </label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full rounded-2xl border border-white/5 bg-white/5 px-5 py-3.5 text-white placeholder-slate-600 outline-none transition-all group-hover:bg-white/[0.07] focus:border-blue-500/50 focus:bg-white/[0.1] focus:ring-4 focus:ring-blue-500/10 shadow-inner"
                                />
                            </div>
                        </div>

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
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                    required
                                    className="w-full rounded-2xl border border-white/5 bg-white/5 px-5 py-3.5 text-white placeholder-slate-600 outline-none transition-all group-hover:bg-white/[0.07] focus:border-blue-500/50 focus:bg-white/[0.1] focus:ring-4 focus:ring-blue-500/10 shadow-inner"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        <label
                            htmlFor="password"
                            className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500 ml-1"
                        >
                            Password
                        </label>
                        <div className="relative group">
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                                className="w-full rounded-2xl border border-white/5 bg-white/5 px-5 py-3.5 text-white placeholder-slate-600 outline-none transition-all group-hover:bg-white/[0.07] focus:border-blue-500/50 focus:bg-white/[0.1] focus:ring-4 focus:ring-blue-500/10 shadow-inner"
                            />
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        <label
                            htmlFor="confirmPassword"
                            className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500 ml-1"
                        >
                            Confirm Password
                        </label>
                        <div className="relative group">
                            <input
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                                className="w-full rounded-2xl border border-white/5 bg-white/5 px-5 py-3.5 text-white placeholder-slate-600 outline-none transition-all group-hover:bg-white/[0.07] focus:border-blue-500/50 focus:bg-white/[0.1] focus:ring-4 focus:ring-blue-500/10 shadow-inner"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4.5 text-base font-bold text-white shadow-2xl shadow-blue-500/20 transition-all hover:scale-[1.01] hover:shadow-blue-500/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                <div className="mt-10 text-center lg:text-left">
                    <p className="text-sm text-slate-500 font-medium">
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-white hover:text-blue-400 transition-colors border-b border-white/20 hover:border-blue-400/50 pb-0.5">
                            Sign In here
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Decoration Side (Visible on large screens) */}
            <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-12 lg:flex border-l border-white/10">
                <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-400 p-2.5 shadow-xl shadow-indigo-500/20">
                        <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-white" stroke="currentColor" strokeWidth="2.5">
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <polyline points="17 11 19 13 23 9" />
                        </svg>
                    </div>
                    <span className="text-3xl font-bold tracking-tight text-white">MERN.</span>
                </div>

                <div className="space-y-6">
                    <h2 className="text-5xl font-extrabold leading-tight text-white">
                        Build your <br />
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">Future</span> today.
                    </h2>
                    <p className="max-w-xs text-lg text-slate-400">
                        Join thousands of developers building amazing things with our comprehensive stack.
                    </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                    <span>&copy; 2026 MERN App.</span>
                    <span className="h-1 w-1 rounded-full bg-slate-700"></span>
                    <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
