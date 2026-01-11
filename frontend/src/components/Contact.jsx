import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto max-w-3xl text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Let's connect.</h2>
                <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="mailto:sahil2210517@ssn.edu.in"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:scale-105 transition-transform"
                    >
                        Email Me
                    </a>

                    <a
                        href="tel:+919622870824"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 text-white font-bold text-lg border border-white/10 hover:bg-white/20 hover:scale-105 transition-all"
                    >
                        +91 9622870824
                    </a>
                </div>

                <div className="flex items-center justify-center gap-8 mt-12 text-slate-400">
                    <a href="https://github.com/Sahil2210517" className="hover:text-white transition-colors flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        GitHub
                    </a>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        LinkedIn
                    </a>
                    <a href="https://leetcode.com/u/sahil7404442" className="hover:text-white transition-colors flex items-center gap-2">
                        {/* Simple LeetCode Icon Path */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 3.499 4.166 5.823 5.823 0 0 0 5.581-.593 5.86 5.86 0 0 0 1.968-2.365l3.149-1.41a1.946 1.946 0 0 1-1.755 2.158 7.275 7.275 0 0 1-4.26-1.097 7.517 7.517 0 0 1-3.292-3.291 7.265 7.265 0 0 1-.351-5.103 7.395 7.395 0 0 1 1.707-2.75l4.341-4.645A2.781 2.781 0 0 1 14.868 2.3a2.769 2.769 0 0 1 2.378 1.45l2.767-1.24A4.181 4.181 0 0 0 13.483 0zM12.013 7.311l-3.4 3.635a3.987 3.987 0 0 0-1.276 2.362 3.824 3.824 0 0 0 .052 1.636 3.931 3.931 0 0 0 .396 1.13c.123 2.395 2.396 4.542 4.095 4.542 2.396 0 4.166-2.02 4.166-4.541a4.26 4.26 0 0 0-.667-2.333l-3.366-6.431zM16.146 10.605l-2.008 4.292c.625.563 1.25.688 1.625.563.854-.271 2.166-1.521 2.166-2.604 0-1.021-.833-1.896-1.783-2.251z" /></svg>
                        LeetCode
                    </a>
                </div>

                <footer className="mt-24 pt-8 border-t border-white/10 text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sahil Singh. Built with MERN Stack.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
