import { Metadata } from 'next';
import CompanyContent from '@/components/pages/CompanyContent';

export const metadata: Metadata = {
    title: 'Company | CieloMagia',
    description: 'Company Overview of CieloMagia',
};

export default function CompanyPage() {
    return <CompanyContent />;
}
