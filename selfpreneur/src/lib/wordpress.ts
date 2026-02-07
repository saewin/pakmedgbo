
export const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://course.selfpreneur.club/wp-json/wp/v2';

export interface BlogPost {
    id: number;
    date: string;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    link: string;
    featured_media: number;
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
    };
}

export async function fetchLatestPosts(limit = 3): Promise<BlogPost[]> {
    try {
        const res = await fetch(`${WP_API_URL}/posts?per_page=${limit}&_embed`);
        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }
        return await res.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
    try {
        const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`);
        if (!res.ok) return null;
        const posts = await res.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        return null;
    }
}
