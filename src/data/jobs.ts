export interface Job {
    id: string;
    title: string;
    type: string;
    location: string;
    description: string;
    details: {
        background: string;
        requirements: string[];
        welcomed: string[];
        salary: string;
        hours: string;
        holiday: string;
        benefits: string[];
    };
}

export const jobs: Job[] = [
    {
        id: "boulanger",
        title: "職人（ブーランジェ）",
        type: "正社員",
        location: "表参道店 / 代官山店",
        description: "手作りパンの製造全般。素材にこだわり、技術を磨きたい方を募集します。",
        details: {
            background: "事業拡大に伴い、GURUMAN OVENの味を支える職人を募集します。伝統的な製法を守りつつ、新しい試みにも積極的に挑戦できる環境です。",
            requirements: [
                "パン製造の実務経験（3年以上推奨）",
                "高い向上心と探究心をお持ちの方",
                "チームワークを大切にできる方"
            ],
            welcomed: [
                "石窯での焼成経験がある方",
                "メニュー開発に興味がある方",
                "海外での修業経験がある方"
            ],
            salary: "月給 250,000円 〜 450,000円（経験・能力を考慮）",
            hours: "5:00 〜 15:00（実働8時間・休憩1時間）",
            holiday: "月8日（シフト制）、夏季・冬季休暇、有給休暇",
            benefits: [
                "社会保険完備",
                "交通費全額支給",
                "制服貸与",
                "従業員割引あり",
                "昇給随時・賞与年2回"
            ]
        }
    },
    {
        id: "patissier",
        title: "パティシエ",
        type: "正社員 / アルバイト",
        location: "代官山店",
        description: "季節のフルーツを使ったケーキや焼き菓子の製造。創作意欲のある方を歓迎します。",
        details: {
            background: "ベーカリーに併設されたパティスリー部門の強化のため、新しいメンバーを募集します。パンに合うデザートや、ギフト向けの焼き菓子など、幅広く手がけていただきます。",
            requirements: [
                "洋菓子製造の経験（未経験可・経験者優遇）",
                "丁寧な作業に自信がある方",
                "お菓子作りが好きな方"
            ],
            welcomed: [
                "製菓衛生師の資格保持者",
                "ウェディングケーキなどの細かな作業が得意な方",
                "店舗運営に興味がある方"
            ],
            salary: "【正】月給 220,000円 〜 / 【ア】時給 1,200円 〜",
            hours: "8:00 〜 20:00（シフト制、アルバイトは週3日〜応相談）",
            holiday: "【正】月8日（シフト制）、慶弔休暇",
            benefits: [
                "社会保険完備",
                "交通費全額支給",
                "正社員登用あり（アルバイト）",
                "まかないあり"
            ]
        }
    },
    {
        id: "service",
        title: "サービス・販売スタッフ",
        type: "アルバイト",
        location: "全店舗",
        description: "お客様への接客・販売。お客様の「美味しい」という笑顔のために。",
        details: {
            background: "お客様に最高の体験をお届けするため、ホール・販売スタッフを募集します。パンの知識を学びながら、お客様一人ひとりに寄り添った接客を目指しています。",
            requirements: [
                "明るい笑顔で接客できる方",
                "人と話すことが好きな方",
                "未経験者歓迎"
            ],
            welcomed: [
                "カフェや飲食店での接客経験",
                "英語などの語学力（観光客対応のため）",
                "SNSでの発信が得意な方"
            ],
            salary: "時給 1,150円 〜 1,500円（研修期間あり）",
            hours: "8:00 〜 22:00（シフト制、週2日・1日4時間〜OK）",
            holiday: "シフト希望制",
            benefits: [
                "交通費規定内支給",
                "昇給あり",
                "パンの試食・社割あり",
                "副業・WワークOK"
            ]
        }
    }
];
