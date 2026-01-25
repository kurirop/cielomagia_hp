export interface Talent {
    id: string;
    name: string;
    role: string;
    imageColor: string;
    imagePath?: string;
    description: string;
    profile?: {
        birthday: string;
        height: string;
        hobbies: string[];
        fanName?: string;
    };
    links: {
        youtube?: string;
        twitter?: string;
        instagram?: string;
    };
    youtubeChannelId?: string;
    youtubeVideos?: {
        title: string;
        thumbnail: string;
        url: string;
    }[];
}

export const talents: Talent[] = [
    {
        id: 'toahato',
        name: '叶愛華 あと',
        role: 'Virtual Talent',
        imageColor: '#a855f7',
        imagePath: '/images/talents/toahato.png',
        description: 'あなたの心に愛と華を。',
        profile: {
            birthday: '11月11日',
            height: '256cm',
            hobbies: ['歌', 'ゲーム'],
            fanName: 'Flowers'
        },
        links: {
            youtube: 'https://www.youtube.com/@叶愛華あと',
            twitter: '#',
            instagram: '#'
        },
        youtubeChannelId: 'UCKM8yxfr3PxbOwwwFHAhwsw'
    },
    {
        id: 'coming-soon',
        name: 'Coming Soon',
        role: 'Coming Soon',
        imageColor: '#ec4899',
        imagePath: '/images/talents/comingsoon.png',
        description: '近日公開！',
        profile: {
            birthday: '???',
            height: '???',
            hobbies: ['???'],
            fanName: '???'
        },
        links: {},
    },
    {
        id: 'coming-soon2',
        name: 'Coming Soon ',
        role: 'Coming Soon',
        imageColor: '#5348ecff',
        imagePath: '/images/talents/comingsoon.png',
        description: '近日公開！',
        profile: {
            birthday: '???',
            height: '???',
            hobbies: ['???'],
            fanName: '???'
        },
        links: {},
    },

];
