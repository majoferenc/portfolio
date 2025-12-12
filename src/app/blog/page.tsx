import { Suspense } from "react";
import { getAllPosts } from "@/lib/posts";
import BlogContent from "./blog-content";

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}
export default async function BlogPage({ searchParams }: PageProps) {
    const posts = getAllPosts();
    
  function PaginationSkeleton() {
    return (
      <div className="h-10 w-full flex justify-center items-center gap-2">
        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
        <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }
  
    return (
        <Suspense fallback={<PaginationSkeleton />}>
          <BlogContent posts={posts} />
        </Suspense>
      );
}

