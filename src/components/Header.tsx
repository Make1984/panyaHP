'use client';

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF] shadow-sm border-b border-gray-100 font-sans">
            <div className="flex flex-col items-center w-full">
                {/* Logo & SNS Section */}
                <div className="w-full relative bg-white flex flex-col items-center justify-center py-[10px]">
                    {/* Logo */}
                    <Link href="/" className="inline-block relative w-48 md:w-64 transition-transform hover:scale-105">
                        <Image
                            src="/logo_2row.png"
                            alt="GURUMAN OVEN"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                            priority
                        />
                    </Link>

                    {/* Social Icons (Absolute position to keep them on the right while logo is centered) */}
                    <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 flex items-center gap-4">
                        <a href="https://www.instagram.com/guruman_vital/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:border-green hover:text-green transition-all shadow-sm bg-white">
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.974.974 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.31 3.608-.974.974-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.31-.974-.974-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.31-3.608.974-.974 2.242-1.248 3.608-1.31 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/gurumanvital/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:border-green hover:text-green transition-all shadow-sm bg-white">
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.072c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.532-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.072z" /></svg>
                        </a>
                    </div>
                </div>

                <nav className="w-full bg-[#FFFFFF]">
                    <ul className="flex flex-wrap items-center justify-center gap-x-[30px] pb-[10px] list-none m-0">
                        <li className="whitespace-nowrap"><Link href="/" className="text-sm font-medium text-black no-underline hover:text-green transition-colors tracking-wider px-2">パンの森</Link></li>
                        <li className="whitespace-nowrap"><Link href="/stores" className="text-sm font-medium text-black no-underline hover:text-green transition-colors tracking-wider px-2">店舗のご案内</Link></li>
                        <li className="whitespace-nowrap"><Link href="/products" className="text-sm font-medium text-black no-underline hover:text-green transition-colors tracking-wider px-2">商品紹介</Link></li>
                        <li className="whitespace-nowrap"><Link href="/news" className="text-sm font-medium text-black no-underline hover:text-green transition-colors tracking-wider px-2">お知らせ</Link></li>
                        <li className="whitespace-nowrap"><Link href="/company" className="text-sm font-medium text-black no-underline hover:text-green transition-colors tracking-wider px-2">会社概要</Link></li>
                        <li className="whitespace-nowrap"><Link href="/recruit" className="text-sm font-medium text-black no-underline hover:text-green transition-colors tracking-wider px-2">採用情報</Link></li>
                        <li className="whitespace-nowrap"><Link href="/contact" className="text-sm font-medium text-black no-underline hover:text-green transition-colors tracking-wider px-2">お問い合わせ</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
