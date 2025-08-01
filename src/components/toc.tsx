import { cn } from "@/lib/utils";

interface ToCItem {
  title: string;
  slug: string;
}

interface TableOfContentsProps {
  items: ToCItem[];
  activeItem?: string;
  className?: string;
}

export function TableOfContents({
  items,
  activeItem,
  className,
}: TableOfContentsProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className={cn("space-y-2", className)}>
      <p className="font-medium text-sm">On this page</p>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.slug}>
            <a
              href={`#${item.slug}`}
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                {
                  "text-foreground font-medium": activeItem === item.slug,
                }
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
