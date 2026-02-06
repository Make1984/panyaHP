import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
    const products = [
        {
            name: "自家製バゲット",
            price: "¥320",
            img: "/artisan_bread_1768539376848.jpeg",
            description: "外はバリッと香ばしく、中はもっちり。小麦本来の豊かな香りが広がる、職人自慢の逸品です。お食事のお供に、そのままでも美味しくお召し上がりいただけます。"
        },
        {
            name: "クロワッサン・オ・ブール",
            price: "¥380",
            img: "/pastry_selection_1768539392420.png",
            description: "発酵バターを贅沢に使用。何層にも重なったサクサクの生地と、バターの芳醇な香りが楽しめます。朝食やティータイムを彩る贅沢な味わいをお楽しみください。"
        },
        {
            name: "季節のフルーツデニッシュ",
            price: "¥450",
            img: "/Gemini_Generated_Image_g3uo9jg3uo9jg3uo.png",
            description: "サクサクのデニッシュ生地に、旬のフルーツをたっぷり。自家製カスタードとの相性も抜群です。見た目にも鮮やかで、お土産やギフトにもぴったりの一品です。"
        },
        {
            name: "クラシック・モンブラン",
            price: "¥620",
            img: "/Gemini_Generated_Image_d8nrz6d8nrz6d8nr.png",
            description: "厳選した国産栗のペーストを贅沢に使用。上品な甘さと栗本来の風味が口いっぱいに広がります。中には濃厚な生クリームが隠れており、重厚な味わいを楽しめます。"
        },
        {
            name: "食パン",
            price: "¥480",
            img: "/Gemini_Generated_Image_cexzk0cexzk0cexz.png",
            description: "耳まで柔らかく、しっとりとした食感。毎日の食卓を彩る、飽きのこない優しい味わいです。トーストすると表面はカリッと、中はふんわりとした食感が際立ちます。"
        },
        {
            name: "季節のタルト",
            price: "¥580",
            img: "/seasonal_tart_news_1769720851945.png",
            description: "タルト生地の香ばしさと、旬のフルーツのみずみずしさが織りなす、パティシエ自慢のタルトです。季節ごとに変わる彩り豊かなラインナップをぜひお楽しみください。"
        },
        {
            name: "サンドウィッチ",
            price: "¥580",
            img: "/sandwich_plate_1768539417460.png",
            description: "具材たっぷりでボリューム満点。自家製パンと新鮮な具材のハーモニーをお楽しみください。ランチタイムにぴったりの、ヘルシーでいて満足感のある仕上がりです。"
        },
        {
            name: "春限定の桜あんぱん",
            price: "¥580",
            img: "/Gemini_Generated_Image_hrg5n3hrg5n3hrg5.png",
            description: "春の香りを閉じ込めた限定パン。ほんのり塩味の効いた桜の葉が、あんの甘さを引き立てます。この季節にしか味わえない、日本の四季を感じる優しい甘さのパンです。"
        },
        {
            name: "バレンタイン限定ギフト",
            price: "¥700",
            img: "/Gemini_Generated_Image_rio3odrio3odrio3.png",
            description: "大切な人への贈り物に。職人が一つ一つ丁寧に仕上げた、期間限定の贅沢なギフトセットです。ショコラの芳醇な香りと、パンの香ばしさが絶妙にマッチしています。"
        }
    ];

    return (
        <div className="bg-cream min-h-screen pb-24">
            <div className="container max-w-6xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 pt-10">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="h-px w-8 bg-brown-light"></span>
                        <h1 className="font-handwritten text-4xl text-brown">Menu List</h1>
                        <span className="h-px w-8 bg-brown-light"></span>
                    </div>
                    <p className="text-gray text-sm tracking-widest uppercase">商品一覧</p>
                </div>

                {/* Product Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-beige-dark overflow-hidden">
                    <div className="hidden md:grid grid-cols-[140px_1fr_2fr_120px] bg-beige-light border-b border-beige-dark px-6 py-4 text-brown-dark font-bold text-sm tracking-widest">
                        <div>商品画像</div>
                        <div>商品名</div>
                        <div>商品の特徴</div>
                        <div className="text-right">価格</div>
                    </div>

                    <div className="divide-y divide-beige-dark/50">
                        {products.map((product, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr_2fr_120px] items-center px-6 py-6 hover:bg-cream/30 transition-colors gap-4 md:gap-8">
                                {/* Image Column */}
                                <div className="flex justify-center md:justify-start">
                                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden border border-beige-dark shadow-sm bg-cream group">
                                        <Image
                                            src={product.img}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* Name Column */}
                                <div>
                                    <h2 className="text-gray-800 font-bold text-lg md:text-base mb-2">{product.name}</h2>
                                    <div className="md:hidden inline-block bg-beige-dark/30 px-3 py-1 rounded text-brown-dark text-sm font-bold">
                                        {product.price}
                                    </div>
                                </div>

                                {/* Description Column */}
                                <div>
                                    <p className="text-gray-600 text-sm md:text-xs leading-loose opacity-90">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Price Column (Desktop only) */}
                                <div className="hidden md:block text-right">
                                    <span className="text-brown font-bold text-xl">{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
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
