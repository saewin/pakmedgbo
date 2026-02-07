"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchLatestPosts, BlogPost } from "@/lib/wordpress";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function BlogSection() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPosts() {
            try {
                const data = await fetchLatestPosts(3);
                setPosts(data);
            } catch (error) {
                console.error("Failed to load posts", error);
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, []);

    if (loading) return null; // Or a skeleton loader
    if (posts.length === 0) return null;

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Latest Insights</h2>
                        <p className="text-[var(--text-secondary)]">บทความและข่าวสารล่าสุดจาก Selfpreneur</p>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                        ดูทั้งหมด <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel rounded-xl overflow-hidden hover:border-blue-500/30 transition-all group"
                        >
                            <div className="aspect-video bg-slate-800 relative overflow-hidden">
                                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={post._embedded["wp:featuredmedia"][0].source_url}
                                        alt={post.title.rendered}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-slate-900/20">
                                        <BookOpen size={40} className="text-slate-600" />
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="text-xs text-blue-400 mb-2">
                                    {new Date(post.date).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </div>
                                <h3
                                    className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors"
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                />
                                <div
                                    className="text-[var(--text-secondary)] text-sm line-clamp-3 mb-4"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                />
                                <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-blue-400 hover:underline">
                                    อ่านเพิ่มเติม (Read More)
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
