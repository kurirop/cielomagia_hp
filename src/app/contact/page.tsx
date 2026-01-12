import { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
    title: 'Contact | CieloMagia',
    description: 'Contact Us',
};

export default function ContactPage() {
    return <ContactContent />;
}
