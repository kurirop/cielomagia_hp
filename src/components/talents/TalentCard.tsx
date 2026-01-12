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
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 z-10">
                    <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wider group-hover:text-[var(--accent-primary)] transition-colors drop-shadow-lg">
                        {name}
                    </h3>
                    <p className="text-sm text-white/90 drop-shadow-md">{role}</p>
                </div>
            </div>

            {/* Social Links */}
            <div className="p-4 flex gap-4 justify-end bg-[var(--bg-secondary)] relative z-10">
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
        </motion.div>
    );
}
