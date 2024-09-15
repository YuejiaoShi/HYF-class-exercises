"use client";

import { usePathname } from "next/navigation";

function Note({ params }) {
  const path = usePathname();

  return (
    <main>
      {path}
      {JSON.stringify(params)}
    </main>
  );
}

export default Note;
