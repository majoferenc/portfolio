import { Calendar } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Tag } from "./tag";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (

<article
  className="flex flex-col gap-3 border-b border-border py-6 
             max-w-full overflow-hidden transition-all duration-300 
             hover:bg-muted/30 hover:shadow-sm rounded-lg px-4 -mx-4 sm:mx-0"
>
    
      <h2
        className="text-2xl sm:text-3xl font-serif font-bold leading-snug 
                   hover:text-primary transition-colors duration-300 
                   break-words"
      >
        <Link href={`/${slug}`} className="block">
          {title}
        </Link>
      </h2>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      )}

      {description && (
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed break-words">
          {description}
        </p>
      )}

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <time dateTime={date}>{formatDate(date)}</time>
      </div>
    </article>
  );
}