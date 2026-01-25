'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { NewsItem } from '@/data/news';

interface NewsDetailContentProps {
    item: NewsItem;
}

export default function NewsDetailContent({ item }: NewsDetailContentProps) {
    return (
        <div className="min-h-screen pt-[var(--header-height)]">
            <section className="section container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <Link href="/news" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8 group">
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>BACK TO NEWS</span>
                    </Link>

                    <div className="bg-[var(--bg-secondary)] p-8 md:p-12 rounded-2xl border border-[var(--border-primary)]">
                        <div className="flex items-center gap-4 mb-6 text-sm">
                            <span className="text-[var(--text-muted)]">{item.date}</span>
                            <span className="px-2 py-0.5 rounded bg-[var(--accent-primary)] text-xs font-bold text-white uppercase">
                                {item.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)] leading-tight">
                            {item.title}
                        </h1>

                        {item.imagePath && (
                            <div className="relative w-full mb-10 rounded-xl overflow-hidden shadow-lg bg-gray-50" style={{ aspectRatio: '3/2' }}>
                                <img
                                    src={item.imagePath}
                                    alt={item.title}
                                    className="w-full h-full object-contain object-center"
                                />
                            </div>
                        )}

                        <div className="prose prose-invert max-w-none text-[var(--text-secondary)] leading-loose whitespace-pre-wrap mb-10">
                            {item.body || item.content}
                        </div>

                        {item.category === 'AUDITION' && (
                            <div className="mt-8 pt-8 border-t border-[var(--border-primary)] text-center">
                                <Link
                                    href="/audition"
                                    className="inline-block px-8 py-4 bg-transparent text-[var(--text-primary)] border-2 border-[var(--text-primary)] font-bold tracking-widest hover:bg-[var(--text-primary)] hover:text-white transition-all duration-300 rounded-full"
                                >
                                    AUDITION PAGE
                                </Link>
                            </div>
                        )}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
