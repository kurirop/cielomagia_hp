'use client';

import TalentCard from '@/components/talents/TalentCard';

const talents = [
    {
        name: 'Aria Sky',
        role: 'Virtual Singer',
        imageColor: '#3b82f6',
        imagePath: '/images/talents/aria.png',
        links: { twitter: '#', youtube: '#' },
    },
    {
        name: 'Kanon Rose',
        role: 'Gaming Streamer',
        imageColor: '#ec4899',
        imagePath: '/images/talents/kanon.png',
        links: { twitter: '#', youtube: '#', instagram: '#' },
    },
    {
        name: 'Riu Dragon',
        role: 'Variety Streamer',
        imageColor: '#ef4444',
        imagePath: '/images/talents/riu.png',
        links: { twitter: '#', youtube: '#' },
    },
    {
        name: 'Sui Aqua',
        role: 'ASMR Artist',
        imageColor: '#06b6d4',
        imagePath: '/images/talents/sui.png',
        links: { twitter: '#', youtube: '#' },
    },
];

export default function TalentsContent() {
    return (
        <div className="min-h-screen pt-[var(--header-height)]">
            <section className="section container">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text text-center">
                    TALENTS
                </h1>
                <p className="text-center text-[var(--text-secondary)] mb-12">
                    次世代を担う個性豊かなタレントたち。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {talents.map((talent, index) => (
                        <TalentCard key={talent.name} {...talent} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}
