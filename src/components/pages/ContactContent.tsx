'use client';

import { motion } from 'framer-motion';

export default function ContactContent() {
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2">お名前</label>
                                    <input type="text" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="山田 太郎" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">メールアドレス</label>
                                    <input type="email" className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="your@email.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">件名</label>
                                <select className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 focus:outline-none focus:border-[var(--accent-primary)] transition-colors text-[var(--text-secondary)]">
                                    <option>ビジネスに関するお問い合わせ</option>
                                    <option>コラボレーションのご提案</option>
                                    <option>メディア・取材について</option>
                                    <option>その他</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">お問い合わせ内容</label>
                                <textarea className="w-full bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded p-3 h-40 focus:outline-none focus:border-[var(--accent-primary)] transition-colors" placeholder="詳細をご記入ください。" />
                            </div>

                            <button type="submit" className="w-full py-4 bg-white text-black font-bold tracking-widest rounded-lg hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
