import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';

// Function to fetch post by slug
async function getPost(slug: string) {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://api.pakmedgbo.online';
    const res = await fetch(`${apiUrl}/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        return null;
    }

    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
}

// Format date
function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-green-200 selection:text-green-900">
            {/* Navigation Bar (Simple Version) */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group text-slate-800 hover:text-green-600 transition-colors">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">กลับหน้าหลัก</span>
                    </Link>
                    <div className="font-bold text-lg text-green-800">PakMed <span className="text-green-600">GBO</span> Blog</div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">

                    {/* Featured Image */}
                    {post._embedded && post._embedded['wp:featuredmedia'] && (
                        <div className="relative h-64 md:h-96 w-full">
                            <img
                                src={post._embedded['wp:featuredmedia'][0].source_url}
                                alt={post.title.rendered}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                    )}

                    <div className="p-8 md:p-12">
                        {/* Header */}
                        <header className="mb-10 text-center">
                            <div className="flex items-center justify-center gap-4 text-sm text-slate-500 mb-4 flex-wrap">
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Health Knowledge</span>
                                <span className="flex items-center gap-1 text-slate-600"><Calendar size={14} /> {formatDate(post.date)}</span>
                                <span className="flex items-center gap-1 text-slate-600"><User size={14} /> Admin</span>
                            </div>
                            <h1
                                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />
                        </header>

                        {/* Content Body */}
                        <div
                            className="prose prose-lg prose-slate max-w-none mx-auto text-slate-800
                prose-headings:font-bold prose-headings:text-slate-900 
                prose-p:text-slate-800 prose-p:leading-relaxed
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-li:text-slate-800
                prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-lg
                prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:bg-green-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:font-medium prose-blockquote:not-italic prose-blockquote:text-slate-800"
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />

                        {/* Tags / Categories (Optional) */}
                        <div className="mt-12 pt-8 border-t border-slate-100">
                            <p className="text-slate-500 text-sm text-center">
                                ขอบคุณที่ติดตามบทความจาก PakMed GBO
                            </p>
                        </div>
                    </div>
                </article>

                {/* Call to Action Footer */}
                <div className="mt-12 text-center">
                    <Link href="/#order" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-green-700 transition-all hover:scale-105">
                        สนใจสินค้า PakMed GBO สั่งซื้อเลย <ArrowLeft className="rotate-180" size={20} />
                    </Link>
                </div>
            </main>
        </div>
    );
}
