export interface Talent {
    id: string;
    name: string;
    furigana: string;
    role: string;
    imageColor: string;
    imagePath?: string;
    description: string;
    profile?: {
        birthday: string;
        debutDate?: string;
        height: string;
        mbti?: string;
        hobbies: string[];
        fanName?: string;
        fanMark?: string;
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
        id: 'toahaato',
        name: '叶愛華 あと',
        furigana: 'Toaha Ato',
        role: 'Virtual Talent',
        imageColor: '#a855f7',
        imagePath: '/images/talents/toahato.png',
        description: '「あーっと！はぁと♡とあはあと！」\nはーとの国の天真爛漫ワガママお姫様！\nアイドルに憧れて日々活動中！\n愛嬌100点♡笑顔100点♡なんでも挑戦していくぞ〜♡\n',
        profile: {
            birthday: '11月11日',
            debutDate: '2026年2月14日',
            height: '160cm',
            mbti: 'ENFP',
            hobbies: ['歌', 'ゲーム', 'お菓子作り'],
            fanName: 'あとないと',
            fanMark: '❤️🪽'
        },
        links: {
            youtube: 'https://www.youtube.com/@叶愛華あと',
            twitter: 'https://x.com/toahaatoch?s=21&t=a-HGPVv3LFSMBdrhTwj8VQ',
        },
        youtubeChannelId: 'UCKM8yxfr3PxbOwwwFHAhwsw'
    },
    {
        id: 'coming-soon',
        name: 'Coming Soon',
        furigana: 'カミングスーン',
        role: 'Coming Soon',
        imageColor: '#ec4899',
        imagePath: '/images/talents/comingsoon.png',
        description: '近日公開！',
        profile: {
            birthday: '???',
            debutDate: '???',
            height: '???',
            mbti: '???',
            hobbies: ['???'],
            fanName: '???',
            fanMark: '???'
        },
        links: {},
    },
    {
        id: 'coming-soon2',
        name: 'Coming Soon ',
        furigana: 'カミングスーン',
        role: 'Coming Soon',
        imageColor: '#5348ecff',
        imagePath: '/images/talents/comingsoon.png',
        description: '近日公開！',
        profile: {
            birthday: '???',
            debutDate: '???',
            height: '???',
            mbti: '???',
            hobbies: ['???'],
            fanName: '???',
            fanMark: '???'
        },
        links: {},
    },

];
