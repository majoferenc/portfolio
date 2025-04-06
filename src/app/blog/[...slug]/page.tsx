import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { formatDate, getReadingTime } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";
import { Tag } from "@/components/tag";

interface PageParams {
  slug: string[];
}

function getPostFromParams(slug: string[]) {
  const slugStr = slug.join("/");
  const post = posts.find((post) => post.slugAsParams === slugStr);
  return post || null;
}

export function generateMetadata({ params }: { params: PageParams }): Metadata {
  const post = getPostFromParams(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export function generateStaticParams(): { slug: string[] }[] {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/")
  }));
}

export default function PostPage({ params }: { params: PageParams }) {
  const post = getPostFromParams(params.slug);

  if (!post) {
    notFound();
  }
  const readingTime = getReadingTime(post.body);

  return (
    <div className="relative min-h-screen flex">

      <article className="flex-1 mx-auto py-10 lg:py-20 max-w-5xl">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground mb-2">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{readingTime} min read</span>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">{post.title}</h1>

          {post.description && (
            <p className="text-xl text-muted-foreground">{post.description}</p>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4">
              {post.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>

        <Separator className="my-8" />

        <div className="prose">
          <MDXContent code={post.body} />
        </div>
      </article>
    </div>
  );
}