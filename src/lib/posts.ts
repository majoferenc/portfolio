import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface Post {
  slug: string;
  slugAsParams: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  published: boolean;
  body: string;
  tags?: string[];
}

export function getAllPosts(): Post[] | [] {
  if (!fs.existsSync(postsDirectory)) {
    console.warn('Posts directory not found:', postsDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
         slug,
        slugAsParams: slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        image: data.image || '/placeholder.jpg',
        category: data.category || 'Uncategorized',
        published: data.published ?? true,
        body: content,
        tags: data.tags || [],
      };
    });

  return posts;
}

export function getPostBySlug(slug: string[]): Post | null {
  const slugStr = slug.join("/");
  const posts = getAllPosts();
  const post = posts.find((post) => post.slugAsParams === slugStr);
  return post || null;
}

export function getPostSlugs(): string[][] {
  const posts = getAllPosts();
  return posts.map((post) => [post.slugAsParams]);
}