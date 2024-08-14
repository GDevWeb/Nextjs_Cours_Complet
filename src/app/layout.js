"use client";
import Nav from "@/app/components/navBar/Nav";
import { AuthenticatedProvider } from "@/app/context/AuthenticatedContext";
import { ThemeProvider } from "@/app/context/ThemeContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./globals.css";

// export const metadata = {
//   title: "Next.js - learning",
//   description: "Learn Nextjs",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:bg-gray-900 dark:text-white">
      <body className="p-4 bg-[var(--color-bg-light)] text-[var(--color-text-light)]">
        <AuthenticatedProvider>
          <ThemeProvider>
            <Nav />
            <Header />
            <main className="w-full max-w-4xl min-h-[50vh] mx-auto flex-grow flex flex-col items-center my-[10vh] p-6  bg-gray-800  dark:bg-gray-700 rounded-lg shadow-lg">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AuthenticatedProvider>
      </body>
    </html>
  );
}
