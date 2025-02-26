import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";
import { useMemo } from "react";
import { WavyBackground } from "../../components/WavyBackground/WavyBackground";

export const metadata: Metadata = {
  title: "Ing. Marian Ferenc - Blog",
  description: "Ing. Marian Ferenc blog page",
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  params: {
    page?: string;
  };
}

export async function generateStaticParams() {
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }));
}

export default function BlogPage({ params }: BlogPageProps) {
  const currentPage = Number(params?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );
  const wavyBgElement = useMemo(
    () => <WavyBackground className="absolute inset-0 w-full h-full -z-10 shadow-md" />,
    []
  );

  return (
    <div className="relative min-h-screen">
      {wavyBgElement}

      <div className="container relative z-10 max-w-4xl lg:py-2 0 h-full">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4 py-20">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">Ing. Marian Ferenc Blog</h1>
            <p className="text-xl text-muted-foreground">
              Lets talk about trends in IT
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-8">
          <div>
            <hr />
            {displayPosts?.length > 0 ? (
              <ul className="flex flex-col">
                {displayPosts.map((post) => {
                  const { slug, date, title, description, tags } = post;
                  return (
                    <li key={slug}>
                      <PostItem
                        slug={slug}
                        date={date}
                        title={title}
                        description={description}
                        tags={tags}
                      />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>Nothing to see here yet</p>
            )}
          </div>
          <div className="flex justify-center">
            <QueryPagination
              totalPages={totalPages}
              className="mt-4"
            />
          </div>  
        </div>
      </div>
    </div>
  );
}
