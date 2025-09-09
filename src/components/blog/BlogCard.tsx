import clsx from "clsx";
import { BlogPost } from "@/lib/blog";
import Link from "next/link";

import styles from "./BlogCard.module.css";

interface BlogCardProps {
  blogEntry: BlogPost;
}

export default function BlogCard({ blogEntry }: BlogCardProps) {
  const formattedDate = blogEntry.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={clsx("card", styles["blogentry-card"])}>
      <Link href={`/blog/${blogEntry.slug}`}>
        <div className="card-body">
          <h2 className="card-title">{blogEntry.title}</h2>
          <div>{formattedDate}</div>
          <div>{blogEntry.description}</div>
        </div>
      </Link>
    </div>
  );
}
