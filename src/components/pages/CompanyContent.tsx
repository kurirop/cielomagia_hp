'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
    <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4 inline-block">
            {children}
        </h2>
        {subtitle && (
            <p className="text-[var(--text-secondary)] text-sm md:text-base tracking-wider uppercase">
                {subtitle}
            </p>
        )}
    </div>
);

export default function CompanyContent() {
    return (
        <div className="min-h-screen pt-[var(--header-height)]">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-[var(--bg-secondary)] border-b border-[var(--border-primary)]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-primary)] opacity-50" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">COMPANY</h1>
                    <p className="text-[var(--text-secondary)] text-lg md:text-xl font-light tracking-wide">
                        会社情報
                    </p>
                </motion.div>
            </section>

            {/* Mission / Value */}
            <section className="section container py-32 md:py-40">
                <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
                    <span className="text-[var(--accent-primary)] font-bold tracking-widest uppercase mb-4 block">Mission</span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
                        夢を現実に、<br className="md:hidden" />技術を未来に。
                    </h2>
                    <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                        「CieloMagia」には、空（Cielo）のように無限に広がる可能性を、<br className="hidden md:block" />
                        魔法（Magia）のように鮮やかな形に変えていきたいという想いを込めています。
                    </p>
                </motion.div>
            </section>

            {/* CEO Message */}
            <section className="py-32 md:py-40 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
                <div className="container">
                    <SectionTitle subtitle="Message">代表挨拶</SectionTitle>
                    <div className="grid md:grid-cols-12 gap-12 items-start">
                        {/* Image Placeholder */}
                        <motion.div
                            {...fadeInUp}
                            className="md:col-span-5 relative"
                        >
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--border-primary)] relative shadow-2xl">
                                {/* Placeholder for CEO Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-[var(--text-muted)]">
                                    <span className="text-lg">CEO Portrait</span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white font-bold text-xl">中島 健人</p>
                                    <p className="text-white/80 text-sm">CEO / 代表取締役</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="md:col-span-7 space-y-8"
                        >
                            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                                新しい日常を創造し続ける
                            </h3>
                            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed text-justify">
                                <p>
                                    エンターテインメントの形は、今この瞬間も進化し続けています。 かつては遠い存在だった「スター」は、VTuberという新しい表現の形を得て、私たちの日常に寄り添う、より身近で等身大な存在となりました。
                                </p>
                                <p>
                                    私たちの理念は、「夢を現実に、技術を未来に」。
                                </p>
                                <p>
                                    タレントが抱く純粋な「夢」を、単なる憧れで終わらせるのではなく、私たちが持つ確かな「技術」と「情熱」によって、手触りのある「現実」へと変えていく。そして、その結晶を次世代のエンターテインメントという「未来」へと繋いでいくこと。それが私たちの使命です。
                                </p>
                                <p>
                                    その挑戦の象徴が、自社プロジェクト「Magia100item（マギア100）」です。 これは単なるグッズ販売ではありません。所属タレント一人ひとりが持つ「物語」を、私たちの技術によってエンターテインメントへと昇華させ、世界中のファンの日常へ届けるための架け橋です。
                                </p>
                                <p>
                                    株式会社CieloMagiaは、クリエイターが安心して夢を追える場所を創り、そこから生まれる魔法を最高の形でお届けすることで、まだ誰も見たことのない「新しい日常」を創造し続けます。
                                </p>
                            </div>
                            <div className="pt-8 flex flex-col items-end">
                                <img src="/signature.png" alt="Signature" className="w-48 opacity-60 block mb-2" style={{ maxWidth: '200px' }} /> {/* Placeholder for signature */}
                                {/* <p className="font-english text-2xl text-[var(--accent-secondary)] opacity-80" style={{ fontFamily: 'cursive' }}>Kento Nakajima</p> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Company Profile & History Wrapper */}
            <div className="container py-32 md:py-40 grid md:grid-cols-2 gap-16 md:gap-24">

                {/* Profile */}
                <section>
                    <motion.div {...fadeInUp}>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-2">Company Profile</h2>
                            <p className="text-[var(--text-muted)]">会社概要</p>
                        </div>

                        <dl className="divide-y divide-[var(--border-primary)] border-t border-[var(--border-primary)]">
                            {[
                                { label: '会社名', value: '株式会社CieloMagia (CieloMagia Inc.)' },
                                { label: '設立', value: '2026年3月' },
                                { label: '代表者', value: '代表取締役 中島 健人' },
                                { label: '資本金', value: '1,000万円' }, // Placeholder
                                { label: '所在地', value: '〒189-0001\n東京都東村山市秋津町5-12-89' },
                                { label: '事業内容', value: 'VTuberグループの運営・マネジメント\nアパレルブランドの企画・販売\nECサイト運営' },
                            ].map((item, i) => (
                                <div key={item.label} className="py-6 grid grid-cols-1 md:grid-cols-3 gap-2">
                                    <dt className="text-[var(--text-muted)] font-medium text-sm">{item.label}</dt>
                                    <dd className="md:col-span-2 text-[var(--text-primary)] whitespace-pre-wrap">{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </motion.div>
                </section>

                {/* History */}
                <section>
                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-2">History</h2>
                            <p className="text-[var(--text-muted)]">沿革</p>
                        </div>

                        <div className="relative border-l border-[var(--border-primary)] ml-3 pl-8 space-y-12 py-4">
                            {[
                                { date: '2026.03', title: '株式会社CieloMagia 設立', desc: '東京都東村山市にて事業開始' },
                                { date: '2026.04', title: 'VTuberプロジェクト始動', desc: '1期生オーディション開始' },
                            ].map((item, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[var(--accent-primary)] border-4 border-[var(--bg-primary)] shadow-sm" />
                                    <span className="text-[var(--accent-secondary)] font-bold text-sm mb-1 block">{item.date}</span>
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h4>
                                    <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </div>

            {/* Access */}
            <section className="section py-32 md:py-40 bg-[var(--bg-secondary)] border-t border-[var(--border-primary)]">
                <div className="container">
                    <SectionTitle subtitle="Access">アクセス</SectionTitle>
                    <motion.div
                        {...fadeInUp}
                        className="rounded-2xl overflow-hidden border border-[var(--border-primary)] shadow-lg h-[400px] relative bg-[var(--card-bg)]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.56789!2d139.497!3d35.778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzQ4LjAiTiAxMznCsDI5JzQ5LjIiRQ!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-4 left-4 bg-[var(--bg-primary)]/90 backdrop-blur-md p-4 rounded-lg border border-[var(--border-primary)] shadow-lg max-w-sm">
                            <p className="font-bold mb-1">本社所在地</p>
                            <p className="text-sm text-[var(--text-secondary)]">東京都東村山市秋津町5-12-89</p>
                            <a
                                href="https://maps.google.com/?q=東京都東村山市秋津町5-12-89"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--accent-primary)] text-sm mt-2 inline-block hover:underline"
                            >
                                Google Mapsで見る →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
