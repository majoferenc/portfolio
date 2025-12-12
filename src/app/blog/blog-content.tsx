"use client";

import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import type { Post } from "@/lib/posts";

import { formatDate } from "@/lib/utils";
const POSTS_PER_PAGE = 6;


interface BlogContentProps {
    posts: Post[];
}
  
export default function BlogContent({ posts }: BlogContentProps) {
  const sortedPosts = sortPosts(posts.filter((post: Post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')?.toString()) || 1;

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );



  return (
      <div className="relative">
        <div className="mx-auto relative z-10 max-w-4xl lg:py-2 0 h-full px-2">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4 py-20">
              <h1 className="inline-block font-black text-4xl lg:text-5xl text-glow-white ml-10 mt-10 sm:mt-2">TechTalk Blog</h1>
              <p className="text-xl text-muted-foreground ml-10">
                Lets talk about trends in IT
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <section className="px-6 pb-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="blog-card group"
                    >
                      <div className="relative">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={200}
                          className="blog-card-image"
                        />
                        <div className="absolute top-4 left-4">
                        <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {
                                post.category
                              }
                            </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-3 line-clamp-3 group-hover:text-yellow-400 transition-colors">
                          {post.title}
                        </h2>

                        <p className="mb-4 line-clamp-2 leading-relaxed">
                          {post.description}
                        </p>

                        <div className="flex flex-col gap-2">
                          <p className="text-sm">
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
              <QueryPagination
                totalPages={totalPages}
                className="mt-4"
              />
            </div>  
            </section>
          </div>
        </div>
      </div>
    );
}
