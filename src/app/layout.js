import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Nav from "./components/navBar/Nav";
import "./globals.css";

export const metadata = {
  title: "Next.js - learning",
  description: "Learn Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-2">
        <Nav />
        <Header />
        <main className="w-full min-h-[100vh] flex flex-col items-center p-4 bg-slate-50 rounded">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
