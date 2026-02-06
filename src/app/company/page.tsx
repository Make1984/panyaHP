import Image from "next/image";

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/artisan_bread_1768539376848.jpeg"
                    alt="Artisan Bread Making"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="font-display text-5xl md:text-7xl mb-6 font-bold tracking-widest drop-shadow-lg">GURUMAN VITAL</h1>
                    <p className="text-xl md:text-2xl tracking-[0.3em] font-light uppercase">Inheriting the Soul of Bread</p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-cream">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-green-dark font-bold tracking-widest uppercase text-sm block mb-4">Our Story</span>
                        <h2 className="font-display text-4xl text-brown font-bold tracking-widest">パンと共に歩む、私たちの物語</h2>
                    </div>
                    <div className="bg-white p-12 rounded-[2rem] shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-light/10 rounded-bl-full"></div>
                        <p className="text-gray-700 leading-loose text-lg text-center font-medium">
                            2010年、表参道の小さな一角から私たちの挑戦は始まりました。<br />
                            「本当に美味しいパンとは何か」。その答えを求めて、私たちは世界中の小麦を巡り、伝統的な製法と現代の感性を掛け合わせることに情熱を注いできました。単なる食事ではなく、一口食べた瞬間に幸せが広がるような、記憶に残るパンを届けたい。その想いは今も変わることなく、職人たちの手によって受け継がれています。
                        </p>
                    </div>
                </div>
            </section>

            {/* By the Numbers */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <p className="text-green-dark text-5xl font-bold mb-2">2010</p>
                            <p className="text-gray-500 tracking-widest text-sm uppercase">Since</p>
                        </div>
                        <div>
                            <p className="text-green-dark text-5xl font-bold mb-2">1M+</p>
                            <p className="text-gray-500 tracking-widest text-sm uppercase">Breads Sold</p>
                        </div>
                        <div>
                            <p className="text-green-dark text-5xl font-bold mb-2">20+</p>
                            <p className="text-gray-500 tracking-widest text-sm uppercase">Wheat Varieties</p>
                        </div>
                        <div>
                            <p className="text-green-dark text-5xl font-bold mb-2">3</p>
                            <p className="text-gray-500 tracking-widest text-sm uppercase">Stores</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitments */}
            <section className="py-24 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl text-brown font-bold tracking-widest">5つのこだわり</h2>
                        <p className="text-gray-500 tracking-widest uppercase text-sm mt-3">Our Commitments</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {[
                            { title: "厳選素材", desc: "世界中から厳選した最高品質の小麦を使用。" },
                            { title: "天然酵母", desc: "独自の製法で育てる自家製天然酵母。" },
                            { title: "職人技", desc: "熟練の職人によるオールハンドメイド。" },
                            { title: "低温熟成", desc: "24時間以上かける丁寧な長時間発酵。" },
                            { title: "地域密着", desc: "その土地に愛される店作りを追求。" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="w-12 h-12 bg-green-light rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">{i + 1}</div>
                                <h3 className="text-brown-dark font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-24 bg-white">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl text-brown font-bold tracking-widest">私たちの歩み</h2>
                        <p className="text-gray-500 tracking-widest uppercase text-sm mt-3">History</p>
                    </div>
                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-beige-dark before:to-transparent">
                        {[
                            { year: "2010", event: "表参道にて1号店「GURUMAN VITAL Omotesando」開業" },
                            { year: "2015", event: "代官山に2号店をオープン。カフェ併設型ブーランジェリーを展開" },
                            { year: "2018", event: "二子玉川店オープン。地域最大級のベーカリーテラスとして話題に" },
                            { year: "2023", event: "公式オンラインストア開設。全国へ焼き立てを届けるサービスを開始" }
                        ].map((item, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-green-dark text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <svg className="fill-current" viewBox="0 0 12 12" width="12" height="12">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-cream shadow-sm">
                                    <time className="font-display text-2xl text-brown-dark font-bold">{item.year}</time>
                                    <p className="text-gray-600 mt-2">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Profile Table */}
            <section className="py-24 bg-cream">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl text-brown font-bold tracking-widest">会社概要</h2>
                        <p className="text-gray-500 tracking-widest uppercase text-sm mt-3">Company Profile</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2rem] shadow-sm">
                        <dl className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 text-base">
                            <dt className="font-bold text-brown py-4 border-b border-beige-dark/30">社名</dt>
                            <dd className="py-4 border-b border-beige-dark/30">株式会社 GURUMAN VITAL</dd>
                            <dt className="font-bold text-brown py-4 border-b border-beige-dark/30">所在地</dt>
                            <dd className="py-4 border-b border-beige-dark/30">〒150-0001 東京都渋谷区神宮前5-1-1</dd>
                            <dt className="font-bold text-brown py-4 border-b border-beige-dark/30">代表者</dt>
                            <dd className="py-4 border-b border-beige-dark/30">代表取締役　山田 太郎</dd>
                            <dt className="font-bold text-brown py-4 border-b border-beige-dark/30">設立</dt>
                            <dd className="py-4 border-b border-beige-dark/30">2010年4月</dd>
                            <dt className="font-bold text-brown py-4 border-b border-beige-dark/30">事業内容</dt>
                            <dd className="py-4 border-b border-beige-dark/30">パン・菓子の製造・販売、カフェの運営</dd>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    );
}

