import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { newsItems } from '@/data/news';
import NewsDetailContent from '@/components/pages/NewsDetailContent';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const item = newsItems.find((n) => n.id === id);

    return {
        title: item ? `${item.title} | CieloMagia` : 'News | CieloMagia',
        description: item?.content,
    };
}

export default async function NewsDetailPage({ params }: PageProps) {
    const { id } = await params;
    const item = newsItems.find((n) => n.id === id);

    if (!item) {
        notFound();
    }

    return <NewsDetailContent item={item} />;
}
