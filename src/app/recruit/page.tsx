import Link from "next/link";
import { jobs } from "@/data/jobs";

export default function RecruitPage() {
    return (
        <div className="min-h-screen">
            <section className="bg-white py-20">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="font-display text-4xl text-brown mb-4 font-bold tracking-widest">Recruit</h1>
                        <p className="text-gray-500 tracking-widest uppercase text-sm">採用情報</p>
                    </div>

                    <div className="space-y-8">
                        {jobs.map((job) => (
                            <div key={job.id} className="border border-beige-dark rounded-2xl p-8 hover:bg-cream transition-colors group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-brown-light text-white text-[10px] px-2 py-0.5 rounded uppercase">{job.type}</span>
                                            <h2 className="text-xl font-bold text-brown-dark">{job.title}</h2>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-4">{job.location}</p>
                                        <p className="text-gray-600 leading-relaxed">{job.description}</p>
                                    </div>
                                    <Link
                                        href={`/recruit/${job.id}`}
                                        className="whitespace-nowrap w-fit bg-brown text-white px-10 py-4 rounded-full hover:bg-brown-dark transition-all text-sm font-bold tracking-widest shadow-md no-underline text-center"
                                    >
                                        応募詳細を見る
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-beige/30 p-10 rounded-2xl text-center border border-beige-dark">
                        <h3 className="text-xl font-bold text-brown-dark mb-4">パン作りへの情熱をお持ちの方へ</h3>
                        <p className="text-gray-600 text-sm leading-loose">
                            私たちは技術だけでなく、パンを通してお客様を幸せにしたいという想いを大切にしています。<br />
                            経験は問いません。あなたの情熱を、GURUMAN OVENで形にしてみませんか。
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
