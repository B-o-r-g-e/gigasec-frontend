'use client'
import {useState} from "react";
import Hero from "@/app/(marketing)/blog/components/Hero";
import FeaturedPosts from "@/app/(marketing)/blog/components/featuredPosts";
import AllPosts from "@/app/(marketing)/blog/components/AllPosts";
import Newsletter from "@/app/(marketing)/blog/components/Newsletter";
import MiniFooter from "@/components/layout/MiniFooter";

export default function MethodPage() {
  const [query, setQuery] = useState("");
  return (
      <>
          <Hero query={query} onQueryChange={setQuery} />
          <FeaturedPosts />
          <AllPosts query={query} />
          <Newsletter />
          <MiniFooter />
      </>
  )
}
