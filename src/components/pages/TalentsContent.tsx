'use client';

import TalentCard from '@/components/talents/TalentCard';
import { talents } from '@/data/talents';

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
