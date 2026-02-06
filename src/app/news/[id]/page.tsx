import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/news";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
    const { id } = await params;
    const news = newsData.find((item) => item.id === id);

    if (!news) {
        notFound();
    }

    return (
        <div className="bg-cream min-h-screen pb-24">
            <div className="container max-w-4xl mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="flex mb-8 text-sm text-gray-500">
                    <Link href="/" className="hover:text-brown transition-colors no-underline">HOME</Link>
                    <span className="mx-2">&gt;</span>
                    <Link href="/news" className="hover:text-brown transition-colors no-underline">NEWS</Link>
                    <span className="mx-2">&gt;</span>
                    <span className="text-gray-800 font-medium truncate">{news.title}</span>
                </nav>

                <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-beige-dark flex flex-col items-center">
                    {/* Main Image */}
                    <div className="relative w-full max-w-[500px] aspect-square mt-8 rounded-2xl overflow-hidden">
                        <Image
                            src={news.image}
                            alt={news.title}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>

                    <div className="p-8 md:p-12 lg:p-16">
                        {/* Meta info */}
                        <div className="flex items-center gap-4 mb-8">
                            <span className="bg-beige-dark px-3 py-1 rounded text-brown-dark text-xs font-bold tracking-wider">
                                {news.category}
                            </span>
                            <time className="text-gray-500 font-medium">{news.date}</time>
                        </div>

                        {/* Title */}
                        <h1 className="font-display heading-xl text-brown-dark mb-12 leading-tight">
                            {news.title}
                        </h1>

                        {/* Content */}
                        <div className="prose prose-brown max-w-none text-gray-700 leading-loose space-y-8 whitespace-pre-wrap">
                            {news.content}
                        </div>

                        {/* Back Button */}
                        <div className="mt-20 pt-12 border-t border-beige-dark text-center">
                            <Link
                                href="/news"
                                className="inline-flex items-center gap-2 border border-brown text-brown px-12 py-3 rounded-full hover:bg-brown hover:text-white transition-all tracking-widest text-sm no-underline group"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="flex-shrink-0 transition-transform group-hover:-translate-x-1"
                                    style={{ width: '16px', height: '16px' }}
                                >
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                                一覧へ戻る
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

// Generate static paths for all news items
export async function generateStaticParams() {
    return newsData.map((news) => ({
        id: news.id,
    }));
}
