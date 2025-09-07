
import Link from "next/link";

import styles from "./BlogCard.module.css";

interface BlogCardProps {
  blogEntry: string|any;
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
        <h2>{blogEntry}</h2>
        </div>
        <div className="text-center">{formattedDate}</div>
        <div>{blogEntry}</div>
      </Link>
    </article>
  );
}
