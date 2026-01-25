import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ channelId: string }> }
) {
    const { channelId } = await params;

    if (!channelId) {
        return NextResponse.json({ error: 'Channel ID is required' }, { status: 400 });
    }

    try {
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const response = await fetch(rssUrl);

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch YouTube feed' }, { status: response.status });
        }

        const xmlText = await response.text();

        // Simple XML parsing using regex to extract video entries
        const videos = [];
        const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
        let match;

        while ((match = entryRegex.exec(xmlText)) !== null) {
            if (videos.length >= 3) break;

            const entryContent = match[1];

            const titleMatch = /<media:title>([\s\S]*?)<\/media:title>/.exec(entryContent);
            const videoIdMatch = /<yt:videoId>([\s\S]*?)<\/yt:videoId>/.exec(entryContent);
            const thumbnailMatch = /<media:thumbnail url="([\s\S]*?)"/.exec(entryContent);

            if (titleMatch && videoIdMatch && thumbnailMatch) {
                videos.push({
                    title: titleMatch[1],
                    url: `https://www.youtube.com/watch?v=${videoIdMatch[1]}`,
                    thumbnail: thumbnailMatch[1],
                });
            }
        }

        return NextResponse.json({ videos });
    } catch (error) {
        console.error('Error fetching YouTube feed:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
