import { Metadata } from 'next';
import AuditionContent from '@/components/pages/AuditionContent';

export const metadata: Metadata = {
    title: 'Audition | CieloMagia',
    description: 'VTuber Audition Recruitment Information',
};

export default function AuditionPage() {
    return <AuditionContent />;
}
