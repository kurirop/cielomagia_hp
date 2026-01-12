'use client';

import { motion } from 'framer-motion';

export default function CompanyContent() {
    return (
        <div className="min-h-screen pt-[var(--header-height)]">
            <section className="section container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-12 gradient-text text-center">
                        COMPANY
                    </h1>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="bg-[var(--bg-secondary)] p-8 rounded-2xl border border-[var(--border-primary)]">
                            <h2 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">
                                Our Vision
                            </h2>
                            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                                CieloMagiaは、アパレルとVTuberを通じて、バーチャルとリアルの境界線を繋ぎます。
                                服を選ぶときの高揚感も、アバターを纏って輝く瞬間も、本質的な自己表現の形であると私たちは信じています。
                                クリエイター一人ひとりが星のように空で煌めく、その魔法を共に作り上げることが私たちの使命です。
                            </p>
                            <div className="text-right">
                                <p className="font-bold text-[var(--accent-secondary)]">星野 ルナ</p>
                                <p className="text-sm text-[var(--text-muted)]">CEO / 代表取締役</p>
                            </div>
                        </div>

                        <div>
                            <dl className="divide-y divide-[var(--border-primary)]">
                                {[
                                    { label: '会社名', value: '株式会社CieloMagia' },
                                    { label: '英語表記', value: 'CieloMagia Inc.' },
                                    { label: '設立', value: '2024年1月' },
                                    { label: '代表者', value: '星野 ルナ' },
                                    { label: '所在地', value: '東京都渋谷区' },
                                    { label: '事業内容', value: 'VTuberグループの運営・マネジメント、アパレルブランドの企画・販売' },
                                ].map((item) => (
                                    <div key={item.label} className="py-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                                        <dt className="text-[var(--text-muted)] font-medium">{item.label}</dt>
                                        <dd className="md:col-span-2 text-[var(--text-primary)]">{item.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
