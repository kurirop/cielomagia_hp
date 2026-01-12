'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'TOP', href: '/' },
    { name: 'COMPANY', href: '/company' },
    { name: 'TALENTS', href: '/talents' },
    { name: 'NEWS', href: '/news' },
    { name: 'CONTACT', href: '/contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(5,5,16,0.8)] backdrop-blur-md border-b border-[var(--border-primary)]' : 'bg-transparent'
                }`}
            style={{ height: 'var(--header-height)' }}
        >
            <div className="container h-full flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-display tracking-wider z-50">
                    CieloMagia
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium tracking-widest hover:text-[var(--accent-secondary)] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-white bg-transparent"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed inset-0 bg-[var(--bg-primary)] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-bold tracking-widest hover:text-[var(--accent-secondary)] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
