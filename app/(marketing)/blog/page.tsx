'use client'
import {useState} from "react";
import MethodSection from "@/components/home/blogPreview";
import Footer from "@/components/home/footer";
import Hero from "@/components/blog/Hero";
import FeaturedPosts from "@/components/blog/featuredPosts";
import AllPosts from "@/components/blog/AllPosts";
import Newsletter from "@/components/blog/Newsletter";

export default function MethodPage() {
  const [query, setQuery] = useState("");
  return (
      <>
          <Hero query={query} onQueryChange={setQuery} />
          <FeaturedPosts />
          <AllPosts query={query} />
          <Newsletter />
          <Footer />
      </>
  )
}
