"use client";

import { usePathname } from "next/navigation";

function Note() {
  const path = usePathname();

  return <main>{path}</main>;
}

export default Note;
