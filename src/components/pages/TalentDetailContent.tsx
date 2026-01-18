'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, Youtube, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import { Talent } from '@/data/talents';

interface TalentDetailContentProps {
    talent: Talent;
}

export default function TalentDetailContent({ talent }: TalentDetailContentProps) {
    return (
        <div className="min-h-screen pt-[var(--header-height)]">
            <section className="section container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <Link href="/talents" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8 group">
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>BACK TO TALENTS</span>
                    </Link>

                    <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden border border-[var(--border-primary)] shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative w-full h-96 md:h-[600px] bg-[var(--bg-tertiary)]" style={{ backgroundColor: talent.imageColor + '20' }}>
                                {talent.imagePath && (
                                    <Image
                                        src={talent.imagePath}
                                        alt={talent.name}
                                        fill
                                        className="object-contain object-bottom"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                )}
                            </div>

                            {/* Info Section */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-[var(--accent-primary)] text-white text-xs font-bold rounded-full mb-4">
                                        {talent.role}
                                    </span>
                                    <h1 className="text-4xl md:text-5xl font-bold mb-2 font-display uppercase tracking-wider text-[var(--text-primary)]">
                                        {talent.name}
                                    </h1>
                                </div>

                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 whitespace-pre-wrap">
                                    {talent.description}
                                </p>

                                <div className="border-t border-[var(--border-primary)] pt-8">
                                    <h3 className="text-sm font-bold text-[var(--text-muted)] mb-4 tracking-widest uppercase">Social Media</h3>
                                    <div className="flex gap-6">
                                        {talent.links.youtube && (
                                            <a href={talent.links.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-red-500 transition-colors font-bold">
                                                <Youtube size={24} />
                                                YouTube
                                            </a>
                                        )}
                                        {talent.links.twitter && (
                                            <a href={talent.links.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-blue-400 transition-colors font-bold">
                                                <Twitter size={24} />
                                                X (Twitter)
                                            </a>
                                        )}
                                        {talent.links.instagram && (
                                            <a href={talent.links.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-pink-500 transition-colors font-bold">
                                                <Instagram size={24} />
                                                Instagram
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
