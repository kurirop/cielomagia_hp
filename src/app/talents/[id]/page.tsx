import { notFound } from 'next/navigation';
import { talents } from '@/data/talents';
import TalentDetailContent from '@/components/pages/TalentDetailContent';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return talents.map((talent) => ({
        id: talent.id,
    }));
}

export default async function TalentDetailPage({ params }: PageProps) {
    const { id } = await params;
    const talent = talents.find((t) => t.id === id);

    if (!talent) {
        notFound();
    }

    return <TalentDetailContent talent={talent} />;
}
