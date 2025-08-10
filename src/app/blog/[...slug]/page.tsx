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
    <div className="relative min-h-screen flex">
      <article className="flex-1 mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 max-w-3xl min-w-0 w-full overflow-hidden">
        {/* Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground mb-2">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{readingTime} min read</span>
          </div>

          {/* Title */}
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl leading-tight break-words">
            {post.title}
          </h1>

          {/* Description */}
          {post.description && (
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed break-words">
              {post.description}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4">
              {post.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>

        <Separator className="my-8" />

        <div
          className="prose prose-lg max-w-none min-w-0 w-full overflow-hidden
                     prose-img:rounded-lg prose-img:max-w-full prose-img:h-auto
                     prose-table:overflow-x-auto prose-table:block prose-table:w-full
                     prose-headings:font-serif prose-headings:font-bold prose-headings:break-words
                     prose-a:text-primary hover:prose-a:underline prose-a:break-words
                     prose-p:break-words prose-p:overflow-wrap-break-word prose-p:word-break-break-word
                     prose-li:break-words prose-li:overflow-wrap-break-word
                     prose-h1:break-words prose-h2:break-words prose-h3:break-words 
                     prose-h4:break-words prose-h5:break-words prose-h6:break-words
                     prose-strong:break-words prose-code:break-words prose-code:text-wrap
                     [&>*]:max-w-full [&>*]:overflow-hidden"
        >
          <MDXContent code={post.body} />
        </div>
      </article>
    </div>
  );
}