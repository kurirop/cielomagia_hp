'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { newsItems } from '@/data/news';

export default function NewsContent() {
    return (
        <div className="min-h-screen pt-[var(--header-height)]">
            <section className="section container">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text text-center">
                    NEWS
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="max-w-3xl mx-auto space-y-6">
                        {newsItems.map((item) => (
                            <Link href={`/news/${item.id}`} key={item.id} className="block">
                                <div className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border-primary)] hover:border-[var(--accent-secondary)] transition-colors">
                                    <div className="flex items-center gap-4 mb-2 text-sm">
                                        <span className="text-[var(--text-muted)]">{item.date}</span>
                                        <span className="px-2 py-0.5 rounded bg-[var(--accent-primary)] text-xs font-bold text-white">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-[var(--text-secondary)]">{item.content}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}


