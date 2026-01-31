'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, Youtube, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import { Talent } from '@/data/talents';
import { useEffect, useState } from 'react';

interface TalentDetailContentProps {
    talent: Talent;
}

interface YouTubeVideo {
    title: string;
    thumbnail: string;
    url: string;
}

export default function TalentDetailContent({ talent }: TalentDetailContentProps) {
    const [videos, setVideos] = useState<YouTubeVideo[]>(talent.youtubeVideos || []);
    const [loadingVideos, setLoadingVideos] = useState(false);

    useEffect(() => {
        // If static videos exist, use them. Otherwise fetch from API if channel ID is present
        if ((!talent.youtubeVideos || talent.youtubeVideos.length === 0) && talent.youtubeChannelId) {
            const fetchVideos = async () => {
                setLoadingVideos(true);
                try {
                    const response = await fetch(`/api/youtube/${talent.youtubeChannelId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setVideos(data.videos || []);
                    }
                } catch (error) {
                    console.error('Failed to fetch videos:', error);
                } finally {
                    setLoadingVideos(false);
                }
            };
            fetchVideos();
        } else {
            setVideos(talent.youtubeVideos || []);
        }
    }, [talent]);

    return (
        <div className="min-h-screen pt-[var(--header-height)]">
            <section className="section container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <Link href="/talents" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8 group">
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>BACK TO TALENTS</span>
                    </Link>

                    <div className="bg-[var(--bg-secondary)] rounded-3xl overflow-hidden border border-[var(--border-primary)] shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative w-full h-96 md:h-[600px] bg-[var(--bg-tertiary)]" style={{ backgroundColor: talent.imageColor + '20' }}>
                                {talent.imagePath && (
                                    <Image
                                        src={talent.imagePath}
                                        alt={talent.name}
                                        fill
                                        className="object-contain object-bottom"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                )}
                            </div>

                            {/* Info Section */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-[var(--accent-primary)] text-white text-xs font-bold rounded-full mb-4">
                                        {talent.role}
                                    </span>
                                    <span className="block text-[var(--text-muted)] text-sm font-bold mb-1 tracking-wider uppercase">
                                        {talent.furigana}
                                    </span>
                                    <h1 className="text-4xl md:text-5xl font-bold mb-2 font-display uppercase tracking-wider text-[var(--text-primary)]">
                                        {talent.name}
                                    </h1>
                                </div>

                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 whitespace-pre-wrap">
                                    {talent.description}
                                </p>

                                {talent.profile && (
                                    <div className="bg-white/50 rounded-xl p-6 mb-8 border border-[var(--border-primary)]">
                                        <h3 className="text-sm font-bold text-[var(--text-muted)] mb-4 tracking-widest uppercase border-b border-[var(--border-primary)] pb-2">Profile</h3>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="block text-[var(--text-muted)] text-xs mb-1">BIRTHDAY</span>
                                                <span className="font-bold text-[var(--text-primary)]"> {talent.profile.birthday}</span>
                                            </div>
                                            <div>
                                                <span className="block text-[var(--text-muted)] text-xs mb-1">DEBUT DATE</span>
                                                <span className="font-bold text-[var(--text-primary)]"> {talent.profile.debutDate}</span>
                                            </div>
                                            <div>
                                                <span className="block text-[var(--text-muted)] text-xs mb-1">HEIGHT</span>
                                                <span className="font-bold text-[var(--text-primary)]"> {talent.profile.height}</span>
                                            </div>
                                            {talent.profile.mbti && (
                                                <div>
                                                    <span className="block text-[var(--text-muted)] text-xs mb-1">MBTI</span>
                                                    <span className="font-bold text-[var(--text-primary)]"> {talent.profile.mbti}</span>
                                                </div>
                                            )}
                                            {talent.profile.fanName && (
                                                <div className="">
                                                    <span className="block text-[var(--text-muted)] text-xs mb-1">FAN NAME</span>
                                                    <span className="font-bold text-[var(--text-primary)]"> {talent.profile.fanName}</span>
                                                </div>
                                            )}
                                            {talent.profile.fanMark && (
                                                <div className="">
                                                    <span className="block text-[var(--text-muted)] text-xs mb-1">FAN MARK</span>
                                                    <span className="font-bold text-[var(--text-primary)]"> {talent.profile.fanMark}</span>
                                                </div>
                                            )}
                                            <div className="col-span-2">
                                                <span className="block text-[var(--text-muted)] text-xs mb-1">HOBBIES</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {talent.profile.hobbies.map((hobby, index) => (
                                                        <span key={index} className="px-2 py-1 bg-[var(--bg-secondary)] rounded font-bold text-[var(--text-primary)] text-xs">
                                                            {hobby}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="border-t border-[var(--border-primary)] pt-8">
                                    <h3 className="text-sm font-bold text-[var(--text-muted)] mb-4 tracking-widest uppercase">Social Media</h3>
                                    <div className="flex gap-6">
                                        {talent.links.youtube && (
                                            <a href={talent.links.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-red-500 transition-colors font-bold">
                                                <Youtube size={24} />
                                                YouTube
                                            </a>
                                        )}
                                        {talent.links.twitter && (
                                            <a href={talent.links.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-blue-400 transition-colors font-bold">
                                                <Twitter size={24} />
                                                X (Twitter)
                                            </a>
                                        )}
                                        {talent.links.instagram && (
                                            <a href={talent.links.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-pink-500 transition-colors font-bold">
                                                <Instagram size={24} />
                                                Instagram
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Videos Section */}
                        {(videos.length > 0 || loadingVideos) && (
                            <div className="border-t border-[var(--border-primary)] bg-black/5 p-8 md:p-12">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                                    <Youtube className="text-red-500" />
                                    Recent Videos
                                </h3>
                                {loadingVideos ? (
                                    <div className="flex justify-center py-8">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--accent-primary)]"></div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {videos.map((video, index) => (
                                            <a
                                                key={index}
                                                href={video.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group block"
                                            >
                                                <div className="aspect-video relative rounded-lg overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all duration-300">
                                                    <img
                                                        src={video.thumbnail}
                                                        alt={video.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white opacity-80 group-hover:scale-110 transition-transform">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="text-sm font-bold text-[var(--text-primary)] line-clamp-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                                    {video.title}
                                                </h4>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
