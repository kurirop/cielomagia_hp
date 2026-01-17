'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

export default function ContactContent() {
    const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('LOADING');
        setMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            organization: formData.get('organization'),
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.error || '送信に失敗しました。');

            setStatus('SUCCESS');
            setMessage('お問い合わせありがとうございます。メッセージが送信されました。');
            (e.target as HTMLFormElement).reset();
        } catch (error: any) {
            setStatus('ERROR');
            setMessage(error.message || 'エラーが発生しました。時間をおいて再度お試しください。');
        } finally {
            // Reset status after a delay if success, or keep error
            if ((e.target as any).status !== 'ERROR') {
                setTimeout(() => setStatus('IDLE'), 5000);
            }
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
                        CONTACT
                    </h1>
                    <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
                        ビジネスに関するお問い合わせ、コラボレーションのご提案などは、以下のフォームよりお気軽にご連絡ください。
                    </p>

                    <div className="max-w-2xl mx-auto bg-[var(--bg-secondary)] p-8 rounded-xl border border-[var(--border-primary)]">
                        {status === 'SUCCESS' ? (
                            <div className="text-center py-12">
                                <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-4">Message Sent!</h3>
                                <p className="text-white">{message}</p>
                                <button
                                    onClick={() => setStatus('IDLE')}
                                    className="mt-8 px-8 py-3 bg-[var(--accent-secondary)] text-white rounded-full hover:opacity-90"
                                >
                                    戻る
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold mb-2">組織名または個人</label>
                                        <input name="organization" required type="text" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="●●株式会社 or 個人" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">お名前</label>
                                        <input name="name" required type="text" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="山田 太郎" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">メールアドレス</label>
                                        <input name="email" required type="email" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="your@email.com" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2">件名</label>
                                    <select name="subject" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors text-[var(--text-secondary)]">
                                        <option value="Business Inquiry">ビジネスに関するお問い合わせ</option>
                                        <option value="Collaboration">コラボレーションのご提案</option>
                                        <option value="Media/Press">メディア・取材について</option>
                                        <option value="Audition">オーディションに関するお問い合わせ</option>
                                        <option value="Other">その他</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2">お問い合わせ内容</label>
                                    <textarea name="message" required className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 h-40 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="詳細をご記入ください。" />
                                </div>

                                {status === 'ERROR' && (
                                    <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 rounded text-center">
                                        {message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'LOADING'}
                                    className="w-full py-4 bg-white text-black font-bold tracking-widest rounded-lg hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'LOADING' ? 'SENDING...' : 'SEND MESSAGE'}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
