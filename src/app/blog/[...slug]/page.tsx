import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";

import "@/styles/mdx.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  
  return (
    <div className="relative min-h-screen">
      <article className="container relative py-20 dark:prose-invert max-w-3xl mx-auto h-full max-w-5xl max-h-full px-10">
      <h1 className="mb-2 text-4xl font-bold">{post!.title}</h1>
      <div className="flex gap-2 mb-2">
        {post!.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post!.description ? (
        <p className="text-xl mt-0 text-orange-400">{post!.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post!.body} />
    </article>
    </div>
  );
}