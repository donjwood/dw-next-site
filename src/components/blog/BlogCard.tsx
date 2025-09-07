import { BlogPost } from "@/lib/blog";
import Link from "next/link";

import styles from "./BlogCard.module.css";

interface BlogCardProps {
  blogEntry: BlogPost;
}

export default function BlogCard({ blogEntry }: BlogCardProps) {

  const formattedDate = blogEntry.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className={styles["blogentry-card"]}>
      <Link href={`/blog/${blogEntry.slug}`} className="block">
        <div className="text-center">
        <h2>{blogEntry.title}</h2>
        </div>
        <div className="text-center">{formattedDate}</div>
        <div>{blogEntry.description}</div>
      </Link>
    </article>
  );
}
