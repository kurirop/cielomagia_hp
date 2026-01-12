'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Newspaper, Building2, Mail } from 'lucide-react';

const features = [
    {
        title: 'COMPANY',
        description: 'About CieloMagia',
        icon: Building2,
        href: '/company',
        color: 'var(--accent-secondary)',
    },
    {
        title: 'TALENTS',
        description: 'Our Stars',
        icon: Users,
        href: '/talents',
        color: 'var(--accent-primary)',
    },
    {
        title: 'NEWS',
        description: 'Latest Updates',
        icon: Newspaper,
        href: '/news',
        color: '#3b82f6', // distinct blue
    },
    {
        title: 'CONTACT',
        description: 'Get in Touch',
        icon: Mail,
        href: '/contact',
        color: '#10b981', // emerald
    },
];

export default function FeatureCards() {
    return (
        <section className="section bg-[var(--bg-secondary)] relative">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Link href={feature.href} key={feature.title} className="group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[var(--bg-primary)] p-8 rounded-2xl border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition-all duration-300 h-full relative overflow-hidden group-hover:-translate-y-2"
                            >
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 bg-current opacity-5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:opacity-10 transition-opacity"
                                    style={{ color: feature.color }}
                                />

                                <feature.icon size={48} className="mb-6 text-[var(--text-muted)] group-hover:text-white transition-colors" />

                                <h3 className="text-2xl font-bold mb-2 font-display tracking-wide">{feature.title}</h3>
                                <p className="text-[var(--text-secondary)] text-sm">{feature.description}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
