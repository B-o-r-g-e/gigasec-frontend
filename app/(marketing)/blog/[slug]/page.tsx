import {AUTHORS, POSTS} from "@/app/(marketing)/blog/components/blogs";
import PostHero from "@/app/(marketing)/blog/[slug]/components/PostHero";
import EachBlogBody from "@/app/(marketing)/blog/[slug]/components/EachBlogBody";
import Newsletter from "@/app/(marketing)/blog/components/Newsletter";
import MiniFooter from "@/components/layout/MiniFooter";
import RelatedPosts from "@/app/(marketing)/blog/[slug]/components/RelatedPosts";
import {generateUniqueId, slugify} from "@/app/(marketing)/blog/[slug]/components/functions";
export default async function BlogPost({
                                           params
                                       }: {
    params: { slug: string }
}) {
    const {slug} = await params;
    const blog = POSTS.find((b) => slugify(b.title) === slug);
    const author = AUTHORS.find((b) => b.id === blog?.authorId);
    const authorBadge = author?.name
        ? author.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()
        : undefined;

    if (!blog) {
        return <div>Post not found</div>
    }

    //Generate unique id for each sections in the blog
    const iDSection = generateUniqueId(blog.sections)

    //Find related blogs using category and tags
    const sameCategory = POSTS.filter(b => blog.cat === b.cat && b.id !== blog.id)
    const related = sameCategory.map(relatedblog => {
        const matchCount = relatedblog.tags.filter(tag =>
            blog.tags.includes(tag)
        ).length

        return {...relatedblog, matchCount}
    })

    //Sort the related array in descending order of matchCount
    related.sort((a, b) => b.matchCount - a.matchCount)
    const topRelated = related.slice(0, 3)

    return (
        <div>
            <PostHero
                POST={blog}
                author={
                    author
                        ? {...author, avatar: authorBadge}
                        : undefined
                }
            />
            <EachBlogBody blog={blog} author={author} avatar={authorBadge} iDSection={iDSection}/>
            <RelatedPosts topRelated={topRelated} />
            <Newsletter/>
            <MiniFooter/>
        </div>
    );
}
