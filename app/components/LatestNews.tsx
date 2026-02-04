import Link from 'next/link';

async function getLatestPosts() {
    // ดึงข้อมูลจาก WordPress API เว็บจริงของคุณ (ไม่ต้องใช้ Token สำหรับการอ่านข้อมูลสาธารณะ)
    const res = await fetch('https://pakmedgbo.online/wp-json/wp/v2/posts?per_page=3&_embed', {
        next: { revalidate: 60 }, // Cache ไว้ 60 วินาที เพื่อความเร็ว
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    return res.json();
}

export default async function LatestNews() {
    const posts = await getLatestPosts();

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    บทความสาระสุขภาพ (จาก WordPress)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post: any) => (
                        <div key={post.id} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            {/* Image (ถ้ามี Featured Image ให้โชว์ ถ้าไม่มีให้ใช้ Placeholder) */}
                            <div className="h-48 bg-slate-100 relative overflow-hidden">
                                {post._embedded && post._embedded['wp:featuredmedia'] ? (
                                    <img
                                        src={post._embedded['wp:featuredmedia'][0].source_url}
                                        alt={post.title.rendered}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-green-50 text-green-200">
                                        <span className="text-4xl">💊</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3
                                    className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 min-h-[3.5rem]"
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                />

                                <div
                                    className="text-slate-500 text-sm mb-4 line-clamp-3"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                />

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700"
                                >
                                    อ่านต่อ <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
