"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ThemeContext } from "./context/themeContext";

export default function Home() {
  const router = useRouter();

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <main
        className={`w-screen h-screen ${
          theme === "light" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <h1>Welcome to my page</h1>
        <button
          onClick={() => router.push("/notes")}
          className="bg-amber-500 mr-2 rounded-md"
        >
          Go to notes
        </button>
        <button
          className="bg-amber-500 mr-2 rounded-md"
          onClick={() => router.push("/form")}
        >
          Go to form
        </button>
        <button className="bg-blue-300 mr-2 rounded-md" onClick={changeTheme}>
          Change theme
        </button>
      </main>
    </ThemeContext.Provider>
  );
}
