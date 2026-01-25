'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { newsItems } from '@/data/news';

export default function NewsContent() {
    return (
        <div className="min-h-screen pt-[var(--header-height)] bg-[var(--bg-secondary)]">
            <section className="section container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text text-center" style={{ marginBottom: '7rem' }}>
                        NEWS
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 px-4 md:px-8">
                        {newsItems.map((item, index) => {
                            // Random slight rotation for "pinned paper" effect
                            const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0'];
                            const rotation = rotations[index % rotations.length];
                            // Pin colors
                            const pinColors = ['bg-red-600', 'bg-blue-600', 'bg-green-600', 'bg-yellow-500'];
                            const pinColor = pinColors[index % pinColors.length];

                            return (
                                <Link
                                    href={`/news/${item.id}`}
                                    key={item.id}
                                    className={`block group relative transition-transform duration-300 ease-out hover:z-20 hover:scale-105 ${rotation} origin-top`}
                                >
                                    {/* Push Pin */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-4 h-4 rounded-full shadow-md border border-gray-300/50"
                                        style={{
                                            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), transparent), var(--tw-bg-opacity, 1)`
                                        }}>
                                        <div className={`w-full h-full rounded-full ${pinColor}`} />
                                    </div>

                                    {/* Card (Paper) */}
                                    <div className="news-card bg-white p-6 pt-10 h-full shadow-lg relative hover:shadow-2xl transition-shadow duration-300 border border-[var(--border-primary)]">

                                        <div className="flex flex-col h-full relative z-10">
                                            {item.imagePath && (
                                                <div className="relative w-full mb-4 overflow-hidden rounded-md border border-[var(--border-primary)] bg-gray-50" style={{ aspectRatio: '3/2' }}>
                                                    <img
                                                        src={item.imagePath}
                                                        alt={item.title}
                                                        className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-500"
                                                        style={{ objectFit: 'contain' }}
                                                    />
                                                </div>
                                            )}
                                            <div className="flex items-center justify-between gap-4 mb-4 pb-2 border-b border-gray-100 border-dashed">
                                                <span className="text-gray-500 font-mono text-sm">{item.date}</span>
                                                <span className={`px-2 py-0.5 rounded-sm text-xs font-bold text-white shadow-sm ${item.category === 'Audition' ? 'bg-pink-500' :
                                                    item.category === 'Press' ? 'bg-blue-500' : 'bg-gray-800'
                                                    }`}>
                                                    {item.category}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold mb-4 line-clamp-2 leading-relaxed text-[var(--text-primary)] font-display">
                                                {item.title}
                                            </h3>

                                            <p className="text-[var(--text-secondary)] text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
                                                {item.content}
                                            </p>

                                            <div className="mt-auto pt-4 flex justify-end">
                                                <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest border-b border-transparent pb-0.5 group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                                    Read More
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}


