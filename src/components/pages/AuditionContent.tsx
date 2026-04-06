'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function AuditionContent() {
    const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('LOADING');
        setMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            subject: 'オーディション応募',
            name: formData.get('name'),
            email: formData.get('email'),
            message: `
【応募内容】
配信経験・ポートフォリオ: ${formData.get('portfolio')}
自己紹介:
${formData.get('self_introduction')}
            `.trim(),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || '送信に失敗しました');

            setStatus('SUCCESS');
            setMessage('応募ありがとうございます。担当者より改めてご連絡いたします。');
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            setStatus('ERROR');
            setMessage(error instanceof Error ? error.message : '送信中にエラーが発生しました');
        }
    };


    return (
        <div className="min-h-screen pt-[var(--header-height)]">
            <section className="section container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text text-center">
                        AUDITION
                    </h1>

                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Application Form */}
                        <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-primary)]" id="application-form">
                            <h2 className="text-2xl font-bold mb-6 text-[var(--accent-secondary)] text-center">Audition Application Form</h2>
                            <p className="mb-8 text-center text-[var(--text-secondary)]">
                                次世代VTuberになりたい方（サポートを受けたい方）は以下のフォームからお願いします。
                            </p>

                            {status === 'SUCCESS' ? (
                                <div className="text-center py-12">
                                    <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-4">Application Sent!</h3>
                                    <p className="text-[var(--text-primary)]">{message}</p>
                                    <button
                                        onClick={() => setStatus('IDLE')}
                                        className="mt-8 px-8 py-3 bg-[var(--accent-secondary)] text-white rounded-full hover:opacity-90 transition-all font-bold"
                                    >
                                        戻る
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">お名前 / 活動名</label>
                                        <input name="name" required type="text" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="山田 太郎" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">メールアドレス</label>
                                        <input name="email" required type="email" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="your@email.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">配信経験・ポートフォリオURL</label>
                                        <input name="portfolio" type="text" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="https://" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">自己紹介</label>
                                        <textarea name="self_introduction" required className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 h-32 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="あなたの想いを聞かせてください..." />
                                    </div>

                                    {status === 'ERROR' && (
                                        <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 rounded text-center">
                                            {message}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'LOADING'}
                                        className="w-full py-4 bg-transparent text-[var(--text-primary)] border-2 border-[var(--text-primary)] font-bold tracking-widest rounded transition-all duration-300 hover:bg-[var(--text-primary)] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                                    >
                                        {status === 'LOADING' ? 'SENDING...' : 'APPLY NOW'}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact for Audition */}
                        <div className="text-center bg-[var(--bg-primary)] p-12 rounded-2xl border border-[var(--accent-secondary)]">
                            <h2 className="text-xl font-bold mb-4">お問い合わせ先</h2>
                            <p className="text-[var(--text-secondary)] mb-8">
                                オーディションに関するご不明点は、お問い合わせフォームよりご連絡ください。
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-12 py-3 bg-transparent text-[var(--text-primary)] border border-[var(--text-primary)] font-bold tracking-widest rounded-full transition-all duration-300 hover:bg-[var(--text-primary)] hover:text-white"
                            >
                                CONTACT FORM
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
