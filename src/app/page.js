"use client";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function Home() {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <h1 className="text-3xl">Home</h1>
      </main>
    </>
  );
}
