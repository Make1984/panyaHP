import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/news";

export default function NewsListPage() {
    return (
        <div className="bg-cream min-h-screen pb-24">
            <div className="container max-w-5xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 pt-10">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="h-px w-8 bg-brown-light"></span>
                        <h1 className="font-handwritten text-4xl text-brown">What's New</h1>
                        <span className="h-px w-8 bg-brown-light"></span>
                    </div>
                    <p className="text-gray text-sm tracking-widest uppercase">お知らせ一覧</p>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((news) => (
                        <Link key={news.id} href={`/news/${news.id}`} className="group cursor-pointer no-underline block max-w-sm mx-auto w-full">
                            <div className="relative overflow-hidden rounded-xl aspect-video mb-4 shadow-sm border border-beige-dark bg-white">
                                <Image
                                    src={news.image}
                                    alt={news.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="absolute top-3 left-3 bg-green-dark text-white text-[10px] px-3 py-1 rounded-full shadow-sm">{news.category}</span>
                            </div>
                            <div className="px-1">
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                                    <span className="bg-beige-dark px-2 py-0.5 rounded text-brown-dark text-[10px]">{news.category}</span>
                                    <time>{news.date}</time>
                                </div>
                                <h2 className="text-gray-800 text-lg font-medium group-hover:text-brown transition-colors leading-relaxed line-clamp-2 min-h-[3.5rem]">
                                    {news.title}
                                </h2>
                                <p className="text-gray-600 text-xs mt-3 line-clamp-2 leading-relaxed opacity-80">
                                    {news.content.trim().split('\n')[0]}...
                                </p>
                                <div className="mt-4 flex items-center text-brown font-bold text-[10px] tracking-widest group-hover:translate-x-1 transition-transform">
                                    READ MORE
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="ml-1.5 flex-shrink-0"
                                        style={{ width: '12px', height: '12px' }}
                                    >
                                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Back to Home */}
                <div className="mt-20 text-center">
                    <Link href="/" className="inline-block border border-gray-200 text-gray-400 px-10 py-2.5 rounded-full hover:border-brown hover:text-brown transition-all tracking-widest text-[11px] font-bold no-underline">
                        TOPに戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}
