'use client';

import { motion } from 'framer-motion';

export default function AuditionContent() {
    const requirements = [
        { label: '応募資格', value: '18歳以上の健康な方（高校生不可）。継続的に週3回以上の配信活動が可能な方。' },
        { label: '求める人物像', value: '歌、ゲーム、トークなど、自分の得意分野で表現することが大好きな方。プロとして責任感を持って活動できる方。' },
        { label: 'サポート体制', value: '専用Live2Dモデルの提供、作画・動画制作支援、配信機材の貸与相談、各種広報サポート、アパレル展開の優先権。' },
    ];

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
                        {/* Recruitment Details */}
                        <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-primary)]">
                            <h2 className="text-2xl font-bold mb-6 text-[var(--accent-secondary)]">募集要項</h2>
                            <div className="space-y-6">
                                {requirements.map((item, index) => (
                                    <div key={index} className="border-b border-[var(--border-primary)] pb-4 last:border-0 last:pb-0">
                                        <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.label}</h3>
                                        <p className="text-[var(--text-secondary)] leading-relaxed">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Selection Flow */}
                        <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-primary)]">
                            <h2 className="text-2xl font-bold mb-6 text-[var(--accent-secondary)]">選考フロー</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                                {['書類選考', '面談(1次)', '面談(2次)', 'デビュー'].map((step, i) => (
                                    <div key={i} className="relative">
                                        <div className="w-12 h-12 bg-[var(--accent-primary)] rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                                            {i + 1}
                                        </div>
                                        <p className="font-bold">{step}</p>
                                        {i < 3 && <div className="hidden md:block absolute top-6 left-[70%] w-full h-[2px] bg-[var(--border-primary)] -z-10" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Application Form */}
                        <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-primary)]" id="application-form">
                            <h2 className="text-2xl font-bold mb-6 text-[var(--accent-secondary)] text-center">Audition Application Form</h2>
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

                        {/* Contact for Audition */}
                        <div className="text-center bg-[var(--bg-primary)] p-8 rounded-2xl border border-[var(--accent-primary)] border-dashed">
                            <h2 className="text-xl font-bold mb-4">お問い合わせ先</h2>
                            <p className="text-[var(--text-secondary)] mb-4">
                                オーディションに関するご不明点は、以下のメールアドレスまでお問い合わせください。
                            </p>
                            <a href="mailto:audition@cielomagia.com" className="text-2xl font-bold text-[var(--accent-primary)] hover:underline">
                                audition@cielomagia.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
