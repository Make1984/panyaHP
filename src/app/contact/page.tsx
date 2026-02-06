"use client";

import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "商品について",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // メールの受信先
        const toEmail = "matsushita-k2417@school.ac.jp";
        // メールの本文作成
        const body = `
お名前: ${formData.name}
メールアドレス: ${formData.email}
お問い合わせ項目: ${formData.subject}

【お問い合わせ内容】
${formData.message}
`.trim();

        const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(`【GURUMAN OVEN】${formData.subject}のお問い合わせ`)}&body=${encodeURIComponent(body)}`;

        // メールクライアントを起動
        window.location.href = mailtoUrl;

        // 送信完了画面へ切り替え
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <div className="text-center p-10 bg-white rounded-3xl shadow-xl max-w-xl mx-4">
                    <div className="w-20 h-20 bg-brown-light/10 text-brown-light rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
                        ✓
                    </div>
                    <h2 className="text-2xl font-bold text-brown-dark mb-4">お問い合わせありがとうございます</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        メールアプリが起動しました。内容を確認し、送信ボタンを押してください。<br />
                        追って担当者よりご連絡させていただきます。
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-brown font-bold hover:underline"
                    >
                        フォームに戻る
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <section className="bg-cream py-20">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="font-display text-4xl text-brown mb-4 font-bold tracking-widest">Contact</h1>
                        <p className="text-gray-500 tracking-widest uppercase text-sm">お問い合わせ</p>
                    </div>

                    <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-beige-dark">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 tracking-wider">NAME / お名前</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-gray-50 border border-beige-dark/30 rounded-lg p-4 focus:ring-2 focus:ring-brown-light outline-none transition-all"
                                        placeholder="山田 太郎"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-600 tracking-wider">EMAIL / メールアドレス</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-gray-50 border border-beige-dark/30 rounded-lg p-4 focus:ring-2 focus:ring-brown-light outline-none transition-all"
                                        placeholder="sample@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 tracking-wider">SUBJECT / お問い合わせ件名</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-gray-50 border border-beige-dark/30 rounded-lg p-4 focus:ring-2 focus:ring-brown-light outline-none appearance-none cursor-pointer"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    >
                                        <option>商品について</option>
                                        <option>店舗のご利用について</option>
                                        <option>採用について</option>
                                        <option>その他</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brown-light">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-600 tracking-wider">MESSAGE / お問い合わせ内容</label>
                                <textarea
                                    required
                                    className="w-full bg-gray-50 border border-beige-dark/30 rounded-lg p-4 h-40 focus:ring-2 focus:ring-brown-light outline-none resize-none transition-all"
                                    placeholder="こちらにご記入ください"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="text-center pt-4">
                                <button type="submit" className="bg-brown text-white px-16 py-4 rounded-full hover:bg-brown-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 font-bold tracking-widest uppercase text-sm">
                                    内容を確認して送信する
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-12 text-center text-gray-500 text-sm space-y-2">
                        <p>※お問い合わせ内容により、返信にお時間をいただく場合がございます。</p>
                        <p>お急ぎの場合は各店舗までお電話にてご連絡ください。</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
