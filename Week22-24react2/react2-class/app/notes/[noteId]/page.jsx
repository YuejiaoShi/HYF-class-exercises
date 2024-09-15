"use client";

import { usePathname, useSearchParams } from "next/navigation";

function Note({ params }) {
  const path = usePathname();
  const query = useSearchParams();


  return (
    <main>
      <p>{path}</p>
      <p>{JSON.stringify(params)}</p>
      <p>{query.get("notemaker")}</p>
    </main>
  );
}

export default Note;
