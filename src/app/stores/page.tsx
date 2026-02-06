'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Store {
    id: string;
    name: string;
    concept: string;
    description: string;
    features: string[];
    address: string;
    tel: string;
    hours: string;
    access: string;
    img: string;
}

export default function StoresPage() {
    const stores: Store[] = [
        {
            id: 'omotesando',
            name: "表参道店",
            concept: "Urban Oasis & Premium Coffee",
            description: "表参道の喧騒を離れた一角に広がる、光溢れるブーランジェリー。職人が目の前で焼き上げるクロワッサンと、バリスタが淹れるフルーティなスペシャリティコーヒー。都会の真ん中で「本物」と出会う、贅沢なひとときをお愉しみください。",
            features: [
                "テラス席完備（ペット同伴可）",
                "コーヒーペアリングの提案",
                "限定ギフトBOXの販売",
                "Wi-Fi・電源完備"
            ],
            address: "〒150-0001 東京都渋谷区神宮前5-1-1 表参道ヒルズ 1F",
            tel: "03-1234-5678",
            hours: "8:00 - 20:00 (不定休)",
            access: "東京メトロ「表参道駅」A2出口より徒歩2分",
            img: "/hero_storefront_1768539361418.png"
        },
        {
            id: 'daikanyama',
            name: "代官山店",
            concept: "Tradition & Modern Artisan",
            description: "代官山の穏やかな空気感に馴染む、石造りの温かな店構え。創業以来の伝統技術と新しい感性が融合した、ここでしか味わえない独創的なパンの数々。木漏れ日の中で、大切な人とゆっくり流れる時間をお過ごしいただけます。",
            features: [
                "石窯での直火焼き bread",
                "代官山限定スイーツ",
                "イートインスペース 30席",
                "専属ソムリエおすすめのワイン"
            ],
            address: "〒150-0033 東京都渋谷区代官山町20-20 T-SITE 2F",
            tel: "03-1234-5679",
            hours: "9:00 - 21:00 (年中無休)",
            access: "東急東横線「代官山駅」正面口より徒歩5分",
            img: "/Gemini_Generated_Image_4efmg44efmg44efm.png"
        },
        {
            id: 'futakotamagawa',
            name: "二子玉川店",
            concept: "Family, Nature & Freshly Baked",
            description: "多摩川の水辺に近い、開放感あふれるファミリー・ブーランジェリー。お子様にも安心な無添加素材にこだわり、毎朝100種類以上のパンがオーブンから溢れ出します。笑顔の絶えない、街の「パンの森」として親しまれています。",
            features: [
                "キッズスペース・おむつ替え室",
                "多摩川を一望するビュー窓",
                "パン作り体験イベント開催",
                "ベビーカー入店OK（ゆったり通路）"
            ],
            address: "〒158-0094 東京都世田谷区玉川2-21-1 ライズ S.C. 1F",
            tel: "03-1234-5680",
            hours: "8:00 - 21:00 (年中無休)",
            access: "東急各線「二子玉川駅」改札直結",
            img: "/Gemini_Generated_Image_ycdfrjycdfrjycdf.png"
        }
    ];

    const [activeTab, setActiveTab] = useState(stores[0].id);

    return (
        <div className="bg-cream min-h-screen pb-24">
            <section className="bg-white pt-20 pb-12 shadow-sm mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-display text-4xl text-brown mb-4 font-bold tracking-widest">Store Information</h1>
                    <p className="text-gray-500 tracking-widest uppercase text-sm font-medium">店舗のご案内</p>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-7xl">
                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-0">
                    {stores.map((store) => (
                        <button
                            key={store.id}
                            onClick={() => setActiveTab(store.id)}
                            className={`flex-1 md:flex-none min-w-[140px] md:px-16 py-6 md:py-8 rounded-2xl font-bold tracking-widest transition-all duration-300 border-2 ${activeTab === store.id
                                ? "bg-brown border-brown text-white shadow-xl transform md:scale-105"
                                : "bg-white border-beige-dark text-brown-light hover:border-brown hover:text-brown"
                                }`}
                        >
                            <span className="text-base md:text-xl whitespace-nowrap">{store.name}</span>
                        </button>
                    ))}
                </div>

                {/* Spacer (20px) */}
                <div className="h-5" />

                {/* Store Content */}
                <div className="relative">
                    {stores.map((store) => (
                        <div
                            key={store.id}
                            className={`transition-all duration-700 ${activeTab === store.id
                                ? "opacity-100 translate-y-0 relative z-10"
                                : "opacity-0 translate-y-10 absolute inset-0 -z-10 pointer-events-none"
                                }`}
                        >
                            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-beige-dark flex flex-col lg:flex-row items-stretch min-h-[600px] lg:min-h-[750px]">
                                {/* Left Side: Image */}
                                <div className="relative w-full lg:w-[55%] min-h-[400px] lg:h-auto">
                                    <Image
                                        src={store.img}
                                        alt={store.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-8 left-8 bg-brown/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-white/20">
                                        <p className="font-display text-white text-sm font-bold tracking-widest uppercase">
                                            {store.concept}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side: Info */}
                                <div className="p-10 md:p-16 lg:p-20 w-full lg:w-[45%] flex flex-col justify-center">
                                    <div className="mb-12">
                                        <h2 className="font-display text-4xl md:text-5xl text-brown-dark mb-8 font-bold tracking-tight relative inline-block">
                                            {store.name}
                                            <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-brown/10 rounded-full"></span>
                                        </h2>
                                        <p className="text-gray-600 text-base md:text-lg leading-loose mb-10 font-medium opacity-90">
                                            {store.description}
                                        </p>

                                        {/* Store Features */}
                                        <div className="bg-cream/40 rounded-[2rem] p-8 border border-beige-dark/50">
                                            <h3 className="text-brown font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
                                                <span className="w-2 h-2 bg-brown rounded-full animate-pulse"></span>
                                                Store Features
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                                {store.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                                                        <svg
                                                            width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                            stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                                            className="text-green flex-shrink-0"
                                                        >
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Data Table */}
                                    <div className="space-y-6 text-gray-700 border-t border-beige-dark pt-10">
                                        <div className="grid grid-cols-[30px_1fr] gap-4 items-start">
                                            <div className="text-brown pt-1">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-brown-dark mb-1">住所</p>
                                                <p className="text-sm leading-relaxed">{store.address}</p>
                                                <p className="text-[10px] text-gray-400 mt-1">{store.access}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:flex-row md:items-start md:gap-x-12 gap-y-6">
                                            <div className="grid grid-cols-[30px_1fr] gap-4 items-start">
                                                <div className="text-brown pt-1">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-brown-dark mb-1">電話番号</p>
                                                    <p className="text-sm">{store.tel}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-[30px_1fr] gap-4 items-start">
                                                <div className="text-brown pt-1">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-brown-dark mb-1">営業時間</p>
                                                    <p className="text-sm">{store.hours}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-dashed border-beige-dark">
                                        <a href="#" className="flex-1 bg-brown text-white text-xs font-bold tracking-widest px-8 py-3.5 rounded-xl hover:bg-brown-dark transition-all text-center shadow-md uppercase no-underline">
                                            Google Maps
                                        </a>
                                        <a href="#" className="flex-1 border-2 border-brown text-brown text-xs font-bold tracking-widest px-8 py-3.5 rounded-xl hover:bg-brown hover:text-white transition-all text-center no-underline uppercase">
                                            Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back to Home */}
                <div className="mt-20 text-center">
                    <Link href="/" className="inline-block border border-gray-200 text-gray-400 px-10 py-2.5 rounded-full hover:border-brown hover:text-brown transition-all tracking-widest text-[11px] font-bold no-underline uppercase">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
