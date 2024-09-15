"use client";

import { usePathname, useSearchParams } from "next/navigation";

function Note({ params }) {
  const path = usePathname();
  const query = useSearchParams();
  const allQuery = Object.fromEntries(query.entries());

  return (
    <main>
      <p>{path}</p>
      <p>{JSON.stringify(params)}</p>
      <p>{query.get("notemaker")}</p>
      <div>
        {query.getAll("notemaker").map((notemaker) => (
          <p>{notemaker}</p>
        ))}
      </div>
      <p>{JSON.stringify(allQuery)}</p>
    </main>
  );
}

export default Note;
