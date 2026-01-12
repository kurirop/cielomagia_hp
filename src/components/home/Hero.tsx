'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
            {/* Background Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-secondary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse delay-1000" />

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[var(--accent-secondary)] tracking-[0.2em] font-medium mb-4 uppercase text-sm md:text-base">
                        Apparel & VTuber Agency
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 font-display tracking-tight">
                        <span className="block text-white">Cielo</span>
                        <span className="block gradient-text">Magia</span>
                    </h1>
                    <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        バーチャルとリアルの境界を超え、
                        <br />
                        新しい時代の「輝き」を創造する。
                    </p>

                    <Link
                        href="/audition" // Assuming audition is under news or separate, sticking to /news for now or creating specific
                        className="inline-block px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 rounded-full"
                    >
                        JOIN AUDITION
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white mt-2 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
