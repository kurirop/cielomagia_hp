'use client';

import { motion } from 'framer-motion';
import { Youtube, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';

interface TalentProps {
    name: string;
    role: string;
    imageColor: string;
    imagePath?: string;
    links: {
        youtube?: string;
        twitter?: string;
        instagram?: string;
    };
    index: number;
}

export default function TalentCard({ name, role, imageColor, imagePath, links, index }: TalentProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]"
        >
            {/* Image Section */}
            {/* Image Section */}
            <div
                className="w-full relative overflow-hidden"
                style={{ backgroundColor: imageColor, height: '320px' }}
            >
                {imagePath && (
                    <Image
                        src={imagePath}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                )}
            </div>

            {/* Content & Social Links */}
            <div className="p-5 bg-[var(--bg-secondary)] relative z-10">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] font-display uppercase tracking-wider group-hover:text-[var(--accent-primary)] transition-colors">
                        {name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{role}</p>
                </div>

                <div className="flex gap-4 justify-end border-t border-[var(--border-primary)] pt-4">
                    {links.youtube && (
                        <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                            <Youtube size={20} />
                        </a>
                    )}
                    {links.twitter && (
                        <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <Twitter size={20} />
                        </a>
                    )}
                    {links.instagram && (
                        <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                            <Instagram size={20} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
