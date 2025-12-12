import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate, getReadingTime } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { ZoomableImage } from "@/components/zoomable-image";
import { CodeBlock } from "@/components/CodeBlock";
import "@/styles/mdx.css";

interface PageParams {
  params: Promise<{ slug: string[] }>;
}

const components = {
  ZoomableImage,
  Image,
  pre: (props: any) => {
    const child = props.children;
    
    const extractTextContent = (node: any): string => {
      if (typeof node === 'string') return node;
      if (typeof node === 'number') return String(node);
      if (Array.isArray(node)) {
        return node.map(extractTextContent).join('');
      }
      if (node && typeof node === 'object') {
        if (node.props?.children) {
          return extractTextContent(node.props.children);
        }
        if (node.children) {
          return extractTextContent(node.children);
        }
      }
      return '';
    };
    
    const codeContent = extractTextContent(
      child?.props?.children || child || props.children
    );
    const language = 
      child?.props?.className?.replace(/^language-/, '') || 'text';

    return <CodeBlock code={codeContent} language={language} />;
  },
};

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PageParams) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(post.body);

  return (
    <div className="relative min-h-screen flex bg-background">
      <article className="flex-1 mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 max-w-4xl min-w-0 w-full overflow-hidden">
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{readingTime} min read</span>
          </div>

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
          <MDXRemote source={post.body} components={components} />
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link
            href="/blog"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}