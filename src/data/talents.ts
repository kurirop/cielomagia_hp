export interface Talent {
    id: string;
    name: string;
    role: string;
    imageColor: string;
    imagePath?: string;
    description: string;
    links: {
        youtube?: string;
        twitter?: string;
        instagram?: string;
    };
}

export const talents: Talent[] = [
    {
        id: 'aria-sky',
        name: 'Aria Sky',
        role: 'Virtual Singer',
        imageColor: '#3b82f6',
        imagePath: '/images/talents/aria.png',
        description: '透き通るような歌声で世界を魅了するバーチャルシンガー。',
        links: { twitter: '#', youtube: '#' },
    },
    {
        id: 'kanon-rose',
        name: 'Kanon Rose',
        role: 'Gaming Streamer',
        imageColor: '#ec4899',
        imagePath: '/images/talents/kanon.png',
        description: 'FPSからRPGまで幅広くプレイするゲーマー。',
        links: { twitter: '#', youtube: '#', instagram: '#' },
    },
    {
        id: 'riu-dragon',
        name: 'Riu Dragon',
        role: 'Variety Streamer',
        imageColor: '#ef4444',
        imagePath: '/images/talents/riu.png',
        description: '雑談から企画まで何でもこなすエンターテイナー。',
        links: { twitter: '#', youtube: '#' },
    },
    {
        id: 'sui-aqua',
        name: 'Sui Aqua',
        role: 'ASMR Artist',
        imageColor: '#06b6d4',
        imagePath: '/images/talents/sui.png',
        description: '癒やしの声で安らぎを届けるASMRアーティスト。',
        links: { twitter: '#', youtube: '#' },
    },
];
