import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";
import type { Post } from "@/lib/posts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date | null | undefined): string {
  if (!date) {
    return "No date";
  }

  try {
    if (date instanceof Date) {
      return format(date, "MMMM d, yyyy");
    }

    if (typeof date === "string") {
      const parsedDate = parseISO(date);
      return format(parsedDate, "MMMM d, yyyy");
    }

    if (typeof date === "number") {
      return format(new Date(date), "MMMM d, yyyy");
    }

    return "Invalid date";
  } catch (error) {
    console.error("Error formatting date:", date, error);
    return "Invalid date";
  }
}

export function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return -1;
    }
    return 1;
  });
}

export function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

export function getTableOfContents(markdown: string) {
  // Remove YAML front matter if it exists
  if (markdown.startsWith('---')) {
    const frontMatterEnd = markdown.indexOf('---', 3);
    if (frontMatterEnd !== -1) {
      markdown = markdown.slice(frontMatterEnd + 3);
    }
  }

  // Match headings at any level (from # to ######)
  const headingRegex = /^(#{1,6})\s+(.*)$/gm;
  const headings = markdown.match(headingRegex);
  if (!headings) return [];

  return headings
    .map((heading) => {
      const match = heading.match(/^(#{1,6})\s+(.*)$/);
      if (!match) return null;
      let title = match[2].trim();

      // Remove markdown emphasis markers (e.g., **)
      title = title.replace(/\*\*/g, '');

      // Create a slug from the title
      const slug = title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');

      return { title, slug };
    })
    .filter(Boolean);
}


export function countWords(content: string): number {
  return content.trim().split(/\s+/).length;
}
