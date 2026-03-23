import MethodSection from "@/components/home/blogPreview";
import Footer from "@/components/home/footer";
import Hero from "@/components/blog/Hero";
import FeaturedPosts from "@/components/blog/featuredPosts";
import AllPosts from "@/components/blog/AllPosts";
import Newsletter from "@/components/blog/Newsletter";

export default function MethodPage() {
  return (
      <>
          <Hero />
          <FeaturedPosts />
          <AllPosts />
          <Newsletter />
          <Footer />
      </>
  )
}
