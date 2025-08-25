import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { formatDate, getReadingTime } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";

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
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export function generateStaticParams(): { slug: string[] }[] {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default function PostPage({ params }: { params: PageParams }) {
  const post = getPostFromParams(params.slug);
  if (!post) notFound();

  const readingTime = getReadingTime(post.body);

  return (
    <div className="relative min-h-screen flex bg-background">
      <article className="flex-1 mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 max-w-4xl min-w-0 w-full overflow-hidden">
        {/* Metadata */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground mb-4">
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span>·</span>
            <span>{readingTime} min read</span>
          </div>


          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="prose prose-lg max-w-none min-w-0 w-full overflow-hidden">
          <MDXContent code={post.body} />
        </div>
      </article>
    </div>
  );
}
