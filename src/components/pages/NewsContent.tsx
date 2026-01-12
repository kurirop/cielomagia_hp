'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { newsItems } from '@/data/news';

export default function NewsContent() {
    const [activeTab, setActiveTab] = useState<'NEWS' | 'AUDITION'>('NEWS');

    return (
        <div className="min-h-screen pt-[var(--header-height)]">
            <section className="section container">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text text-center">
                    NEWS & AUDITION
                </h1>

                <div className="flex justify-center gap-8 mb-12">
                    {['NEWS', 'AUDITION'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`text-xl font-bold tracking-widest pb-2 border-b-2 transition-colors ${activeTab === tab
                                ? 'border-[var(--accent-primary)] text-white'
                                : 'border-transparent text-[var(--text-muted)] hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {activeTab === 'NEWS' ? (
                        <div className="max-w-3xl mx-auto space-y-6">
                            {newsItems.map((item) => (
                                <Link href={`/news/${item.id}`} key={item.id} className="block">
                                    <div className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border-primary)] hover:border-[var(--accent-secondary)] transition-colors">
                                        <div className="flex items-center gap-4 mb-2 text-sm">
                                            <span className="text-[var(--text-muted)]">{item.date}</span>
                                            <span className="px-2 py-0.5 rounded bg-[var(--accent-primary)] text-xs font-bold text-white">
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-[var(--text-secondary)]">{item.content}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="max-w-2xl mx-auto bg-[var(--bg-secondary)] p-8 rounded-xl border border-[var(--border-primary)]">
                            <h2 className="text-2xl font-bold mb-6 text-center">Audition Application Form</h2>
                            <p className="mb-8 text-center text-[var(--text-secondary)]">
                                次世代VTuberオーディションへの応募は以下のフォームからお願いします。
                            </p>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2">お名前 / 活動名</label>
                                    <input type="text" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="山田 太郎" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">メールアドレス</label>
                                    <input type="email" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">配信経験・ポートフォリオURL</label>
                                    <input type="url" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="https://" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">自己紹介・志望動機</label>
                                    <textarea className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 h-32 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="あなたの想いを聞かせてください..." />
                                </div>
                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] text-white font-bold tracking-widest rounded-lg hover:opacity-90 transition-opacity">
                                    APPLY NOW
                                </button>
                            </form>
                        </div>
                    )}
                </motion.div>
            </section>
        </div>
    );
}
