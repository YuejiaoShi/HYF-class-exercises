"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <h1>Welcome to my page</h1>

      <button onClick={() => router.push("/notes")}>Go to notes</button>
      <button onClick={() => router.push("/form")}>Go to form</button>
    </div>
  );
}
