export type PostSummary = {
    id: number;
    cat: string;
    title: string;
    slug: string;
    excerpt: string;
    authorId: number;
    date: string;
    read: string;
    featured: boolean;
    tags: string[];
};

export type PostDetail = PostSummary & {
    toc?: string[];
    sections?: { heading: string; body: string }[];
};
