import { Metadata } from 'next';
import TalentsContent from '@/components/pages/TalentsContent';

export const metadata: Metadata = {
    title: 'Talents | CieloMagia',
    description: 'Our Talents',
};

export default function TalentsPage() {
    return <TalentsContent />;
}
