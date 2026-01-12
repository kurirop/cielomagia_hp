import { Metadata } from 'next';
import NewsContent from '@/components/pages/NewsContent';

export const metadata: Metadata = {
    title: 'News & Audition | CieloMagia',
    description: 'Latest News and Audition Information',
};

export default function NewsPage() {
    return <NewsContent />;
}
