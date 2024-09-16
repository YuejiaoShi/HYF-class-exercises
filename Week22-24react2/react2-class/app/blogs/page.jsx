"use client";
import { usePathname } from "next/navigation";

function BlogPage() {
  const pathname = usePathname();
  return <p>Current pathname: {pathname}</p>;
}

export default BlogPage;
