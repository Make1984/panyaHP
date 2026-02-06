import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/news";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden flex flex-col items-center">

        <div className="relative w-full h-[500px] z-0">
          <Image
            src="/bakery_storefront_hero.png"
            alt="GURUMAN OVEN Storefront"
            fill
            className="object-cover"
            priority
          />
          {/* Logo Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
            <div className="relative w-48 h-24 md:w-80 md:h-40 animate-fade-in">
              <Image
                src="/logo_transparent.png"
                alt="Logo Overlay"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-brown-light drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20 pb-24 bg-cream">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-6">
              <span className="decorative-circle"></span>
              <span className="decorative-circle"></span>
              <span className="decorative-circle"></span>
            </div>
            <h2 className="font-display heading-lg text-brown mb-7">Our Story</h2>
            <p className="font-handwritten text-3xl text-brown-light mb-4">
              〜 伝統と革新、そして心からの「おいしい」を 〜
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in order-2 md:order-1">
              <h3 className="heading-md mb-8 text-brown-dark relative inline-block">
                受け継がれる「本物」へのこだわり
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-brown-light"></span>
              </h3>
              <div className="space-y-6 text-gray leading-relaxed">
                <p className="body-base">
                  GURUMAN OVENの物語は、パンを愛し、素材を愛し、そしてそこに集まる人々を愛することから始まりました。創業以来、私たちが守り続けているのは、職人の手の感覚を何よりも大切にする「手作り」の精神です。
                </p>
                <p className="body-base">
                  厳選された国産小麦、風味豊かな発酵バター、そして時間をかけて丁寧に育てた自家製天然酵母。それらの素材は、その日の気温や湿度によって表情を変えます。職人は毎日、生地と対話し、その瞬間に最適な魔法をかけます。
                </p>
                <p className="body-base">
                  「昨日よりも今日、今日よりも明日。」
                  毎朝、オーブンから溢れ出す香ばしい香りは、私たちが皆さまにお届けする最高のご挨拶です。何気ない日常の食卓に、小さな驚きと、確かな幸せを添えられる存在でありたい。それが私たちの変わらない願いです。
                </p>
              </div>
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[450px] md:h-[600px] transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/artisan_bread_1768539376848.jpeg"
                  alt="Artisan Bread Making"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* The Art of Baking - Illustration Process Section */}
          <div className="mt-32 border-t border-beige-dark pt-24 text-center">
            <h4 className="font-handwritten text-4xl text-brown mb-16">The Art of Baking</h4>

            <div className="grid min-[850px]:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {/* Step 01: Materials */}
              <div className="flex flex-col items-center group">
                <div className="w-[100px] h-[100px] bg-white rounded-full border border-beige-dark shadow-sm flex items-center justify-center mb-6 overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brown-light">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h5 className="font-bold text-brown-dark mb-4 text-lg">01. 素材の厳選</h5>
                <p className="text-xs text-gray-600 leading-relaxed px-4 text-center max-w-[250px]">
                  北海道産小麦「春よ恋」や自家製天然酵母など、パンの「命」となる最高級の素材を世界中から選び抜きます。
                </p>
              </div>

              {/* Step 02: Fermentation */}
              <div className="flex flex-col items-center group">
                <div className="w-[100px] h-[100px] bg-white rounded-full border border-beige-dark shadow-sm flex items-center justify-center mb-6 overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brown-light">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="font-bold text-brown-dark mb-4 text-lg">02. 長時間熟成</h5>
                <p className="text-xs text-gray-600 leading-relaxed px-4 text-center max-w-[250px]">
                  低温でじっくりと時間をかけて発酵させることで、小麦本来の甘みと旨みを最大限に引き出します。
                </p>
              </div>

              {/* Step 03: Baking */}
              <div className="flex flex-col items-center group">
                <div className="w-[100px] h-[100px] bg-white rounded-full border border-beige-dark shadow-sm flex items-center justify-center mb-6 overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brown-light">
                    <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h5 className="font-bold text-brown-dark mb-4 text-lg">03. 職人の焼成</h5>
                <p className="text-xs text-gray-600 leading-relaxed px-4 text-center max-w-[250px]">
                  石窯の爆発的な熱で一気に焼き上げ。外はパリッと香ばしく、中は驚くほどもちもちの食感を実現します。
                </p>
              </div>
            </div>
          </div>

          {/* The Process - Visual Diagram */}
          <div className="mt-32">
            <div className="text-center mb-12">
              <h4 className="font-handwritten text-3xl text-brown-light mb-2">Our Process</h4>
              <p className="text-xs text-gray uppercase tracking-widest">パンができるまで</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px border-t-2 border-dashed border-brown-light/30 -translate-y-1/2 z-0"></div>

              <div className="grid md:grid-cols-3 gap-12 relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-cream border-2 border-brown-light rounded-full flex items-center justify-center mb-6 shadow-md bg-white">
                    <span className="text-brown font-display font-bold text-xl">01</span>
                  </div>
                  <h5 className="font-bold text-brown-dark mb-2">素材の厳選</h5>
                  <p className="text-xs text-gray text-center px-4">国産小麦、天然酵母など、パンに命を吹き込む最高級の素材を選び抜きます。</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-cream border-2 border-brown-light rounded-full flex items-center justify-center mb-6 shadow-md bg-white">
                    <span className="text-brown font-display font-bold text-xl">02</span>
                  </div>
                  <h5 className="font-bold text-brown-dark mb-2">長時間発酵</h5>
                  <p className="text-xs text-gray text-center px-4">生地の旨みを最大限に引き出すため、時間をかけてゆっくりと熟成させます。</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-brown border-2 border-brown rounded-full flex items-center justify-center mb-6 shadow-xl bg-brown">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                  <h5 className="font-bold text-brown mb-2 text-lg">焼き上がり</h5>
                  <p className="text-xs text-brown-light text-center px-4 font-bold">石窯の遠赤外線で、外はカリッと、中はもちもちに焼き上げます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Menu Section */}
      <section id="menu" className="section bg-beige">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display heading-lg text-brown mb-6">Our Menu</h2>
            <p className="body-lg text-gray mb-8">
              毎日焼きたて、こだわりの商品をお届けします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "自家製パン",
                desc: "24時間じっくり低温発酵させた、小麦本来の甘みが際立つ逸品。外皮はカリッと、中は驚くほどにもっちりとした食感が特徴です。",
                price: "¥300〜",
                img: "/artisan_bread_1768539376848.jpeg"
              },
              {
                title: "ペストリー",
                desc: "AOP認定の発酵バターを贅沢に使用し、幾層にも重ねた職人技の結晶。ひと口ごとに広がる豊かな香りとサクサクの食感をお楽しみください。",
                price: "¥350〜",
                img: "/pastry_selection_1768539392420.png"
              },
              {
                title: "手作りケーキ",
                desc: "旬のフルーツと提携農家の新鮮な卵を使用。甘さ控えめの生クリームが、素材の良さを最大限に引き立てるパティシエ自慢のケーキです。",
                price: "¥520〜",
                img: "/cake_slice_1768539432340.png"
              }
            ].map((item, idx) => (
              <div key={idx} className="card group">
                <div className="overflow-hidden relative h-64">
                  <Image src={item.img} alt={item.title} fill className="card-image object-cover" />
                </div>
                <div className="card-content">
                  <div className="flex justify-between items-start mb-4 border-b border-beige-dark pb-2">
                    <h3 className="heading-sm text-brown-dark">{item.title}</h3>
                    <span className="text-brown font-bold font-display">{item.price}</span>
                  </div>
                  <p className="body-sm text-gray leading-relaxed mb-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products" className="inline-block border border-brown text-brown px-10 py-3 rounded-full hover:bg-brown hover:text-white transition-colors tracking-widest text-sm">
              VIEW ALL MENU
            </Link>
          </div>
        </div>
      </section>

      {/* Select & Recommend Banner */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-handwritten text-4xl text-brown mb-2">Select & Recommend</h2>
            <p className="text-xs text-gray uppercase tracking-widest">お勧め商品</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
              <Image src="/sandwich_plate_1768539417460.png" alt="Lunch" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-display text-3xl tracking-widest mb-2 font-bold">LUNCH MENU</h3>
                <span className="text-sm underline underline-offset-8">VIEW MORE</span>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
              <Image src="/cake_slice_1768539432340.png" alt="Sweets" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                <h3 className="font-display text-3xl tracking-widest mb-2 font-bold">SEASONAL SWEETS</h3>
                <span className="text-sm underline underline-offset-8">VIEW MORE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-8 bg-brown-light"></span>
              <h2 className="font-handwritten text-4xl text-brown">What's New</h2>
              <span className="h-px w-8 bg-brown-light"></span>
            </div>
            <p className="text-gray text-sm tracking-widest">お知らせ</p>
          </div>

          <div className="grid min-[800px]:grid-cols-2 gap-[40px] max-w-5xl mx-auto">
            {newsData.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`} className="group cursor-pointer no-underline block">
                <div className="relative overflow-hidden rounded-xl max-w-[400px] aspect-square mx-auto mb-6 shadow-md">
                  <Image src={news.image} alt={news.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-green-dark text-white text-xs px-3 py-1 rounded">{news.category}</span>
                </div>
                <div className="max-w-[400px] mx-auto">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                    <span className="bg-beige-dark px-2 py-0.5 rounded text-brown-dark text-[10px]">{news.category}</span>
                    <time>{news.date}</time>
                  </div>
                  <h3 className="text-gray-800 text-lg font-medium group-hover:text-brown transition-colors leading-relaxed">
                    {news.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/news" className="inline-block border border-brown text-brown px-12 py-3 rounded-full hover:bg-brown hover:text-white transition-colors tracking-widest text-sm no-underline">
              VIEW ALL NEWS
            </Link>
          </div>
        </div>
      </section>

      {/* Store Information Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-handwritten text-5xl text-brown mb-2">Store Information</h2>
            <p className="text-gray text-xs tracking-widest uppercase">店舗情報</p>
          </div>

          <div className="grid min-[962px]:grid-cols-3 gap-8 min-[950px]:gap-[10px]">
            {[
              { name: "表参道店", address: "〒150-0001 東京都渋谷区神宮前5-1-1", tel: "03-1234-5678", img: "/hero_storefront_1768539361418.png" },
              { name: "代官山店", address: "〒150-0033 東京都渋谷区代官山町20-20", tel: "03-1234-5679", img: "/Gemini_Generated_Image_4efmg44efmg44efm.png" },
              { name: "二子玉川店", address: "〒158-0094 東京都世田谷区玉川2-21-1", tel: "03-1234-5680", img: "/Gemini_Generated_Image_ycdfrjycdfrjycdf.png" }
            ].map((store, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-full max-w-[300px] aspect-square mx-auto rounded-xl overflow-hidden mb-6 shadow-md">
                  <Image src={store.img} alt={store.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-2xl text-brown-dark mb-4 font-bold">{store.name}</h3>
                <div className="text-xs text-gray-500 space-y-2 mb-6 leading-loose">
                  <p>{store.address}</p>
                  <p>TEL: {store.tel}</p>
                </div>
                <Link href="/stores" className="inline-block bg-green text-white text-xs px-8 py-2.5 rounded-full hover:bg-green-dark transition-colors shadow-sm">
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}