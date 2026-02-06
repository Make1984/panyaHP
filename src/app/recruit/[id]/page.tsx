import { jobs } from "@/data/jobs";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const job = jobs.find(j => j.id === id);

    if (!job) {
        notFound();
    }

    return (
        <div className="bg-cream min-h-screen pb-20">
            <div className="container max-w-4xl mx-auto px-4 pt-16">
                <Link
                    href="/recruit"
                    className="inline-flex items-center text-brown hover:text-brown-dark transition-all mb-10 no-underline group bg-white/50 hover:bg-white px-5 py-2 rounded-full border border-beige-dark shadow-sm"
                >
                    <svg className="w-3.5 h-3.5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Back to List</span>
                </Link>

                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-beige-dark">
                    {/* Header */}
                    <div className="bg-brown p-10 md:p-16 text-center">
                        <span className="inline-block bg-white/20 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                            {job.type}
                        </span>
                        <h1 className="text-3xl md:text-4xl text-white font-bold tracking-tight mb-4">
                            {job.title}
                        </h1>
                        <p className="text-white/80 text-sm md:text-base">
                            {job.location}
                        </p>
                    </div>

                    <div className="p-8 md:p-16">
                        {/* Background Section */}
                        <div className="mb-16">
                            <h2 className="text-xl font-bold text-brown-dark mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-brown rounded-full"></span>
                                募集背景・メッセージ
                            </h2>
                            <p className="text-gray-600 leading-loose">
                                {job.details.background}
                            </p>
                        </div>

                        {/* Requirements */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-lg font-bold text-brown-dark mb-6">応募要件</h3>
                                <ul className="space-y-3">
                                    {job.details.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                                            <span className="w-5 h-5 bg-brown-light/10 text-brown-light rounded-full flex items-center justify-center flex-shrink-0 text-[10px] pt-0.5">✔</span>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-brown-dark mb-6">歓迎するスキル</h3>
                                <ul className="space-y-3">
                                    {job.details.welcomed.map((w, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                                            <span className="w-5 h-5 bg-green/10 text-green rounded-full flex items-center justify-center flex-shrink-0 text-[10px] pt-0.5">★</span>
                                            {w}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Summary Table */}
                        <div className="bg-cream/40 rounded-3xl p-8 md:p-12 border border-beige-dark mb-16">
                            <h3 className="text-lg font-bold text-brown-dark mb-8 text-center uppercase tracking-widest">募集要項詳細</h3>
                            <dl className="grid grid-cols-1 gap-y-6">
                                {[
                                    { label: "給与", value: job.details.salary },
                                    { label: "勤務時間", value: job.details.hours },
                                    { label: "休日・休暇", value: job.details.holiday },
                                    { label: "待遇・福利厚生", value: job.details.benefits.join("、") }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col md:flex-row border-b border-beige-dark/50 pb-6 last:border-0 last:pb-0">
                                        <dt className="md:w-1/4 font-bold text-brown text-sm mb-2 md:mb-0">{item.label}</dt>
                                        <dd className="md:w-3/4 text-gray-600 text-sm leading-relaxed">{item.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        {/* Application Button */}
                        <div className="text-center pt-8 border-t border-dashed border-beige-dark">
                            <p className="text-xs text-gray-400 mb-6 tracking-widest uppercase">
                                あなたのご応募を心よりお待ちしております
                            </p>
                            <button className="bg-brown text-white px-16 py-5 rounded-full hover:bg-brown-dark transition-all text-sm font-bold tracking-widest shadow-xl transform hover:scale-105">
                                この職種に応募する
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Link */}
                <div className="mt-12 text-center text-gray-400">
                    <p className="text-xs">採用に関するお問い合わせ: recruit@gurumanoven.com</p>
                </div>
            </div>
        </div>
    );
}
