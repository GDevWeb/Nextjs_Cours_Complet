import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";
import Button from "../button/Button";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="w-full max-w-4xl mx-auto flex items-center justify-between mt-6 p-6 text-white bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center">NextJs - Learning</h1>
      <div className="flex items-center">
        <Button onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </Button>
      </div>
    </header>
  );
}
