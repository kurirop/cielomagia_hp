export interface NewsItem {
    id: string;
    date: string;
    category: string;
    title: string;
    content: string;
    body?: string;
}

export const newsItems: NewsItem[] = [
    {
        id: '1',
        date: '2024.01.12',
        category: 'AUDITION',
        title: '第1期生VTuberオーディション開催！',
        content: '新しい物語を共に紡ぐ、輝く個性を募集しています。',
        body: `
      CieloMagiaでは、第1期生となるVTuberオーディションを開催いたします。
      
      【募集内容】
      ・活動名義：未定（キャラクター決定後、協議の上決定）
      ・募集人数：若干名
      
      【応募条件】
      ・18歳以上の方
      ・週3回以上の継続的な配信が可能な方
      ・特定のプロダクションと契約していない方
      
      詳細はオーディションページをご確認ください。皆様のご応募をお待ちしております。
    `,
    },
    {
        id: '2',
        date: '2024.01.01',
        category: 'INFO',
        title: '公式サイトをリニューアルしました',
        content: 'CieloMagiaの最新情報をお届けする公式サイトを公開しました。',
        body: `
      株式会社CieloMagiaの公式サイトをリニューアルいたしました。
      
      今後は本サイトを通じて、所属タレントの活動情報やアパレル商品の最新情報、オーディション告知などを発信してまいります。
      
      引き続きCieloMagiaをよろしくお願いいたします。
    `,
    },
];
