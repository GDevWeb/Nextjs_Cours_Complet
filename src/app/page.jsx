// Page Home (utilisation côté client)
"use client"; //CSR
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch("/data/tabs/articlesTab.json", {
          cache: "no-store", // ou "force-cache" avec un paramètre next si tu veux un revalidate
        });

        if (!response.ok) {
          throw new Error("Failed to fetch articles !");
        }

        const data = await response.json();
        // Trier les articles par date et prendre les 5 derniers
        const latestArticles = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);

        setArticles(latestArticles);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    }
    fetchArticles();
  }, []);

  return (
    <>
      <h1 className="w-full mb-4 text-3xl  text-white font-semibold text-center">
        Latest articles
      </h1>
      <section
        id="latestArticles"
        className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 "
      >
        {articles.map((article) => (
          <Link href={`/blog/${article.id}`} key={article.id}>
            <div
              id="card"
              className="w-full min-h-[300px] flex-col mb-4 p-4 flex items-center justify-between rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <section
                id="cardTitle"
                className="flex items-center justify-between"
              >
                <h1 className="w-full text-2xl font-semibold text-center">
                  {article.title}
                </h1>
              </section>
              <section id="cardContent" className="w-full mt-2">
                <p className="text-lg font-semibold text-center">
                  {article.description.slice(0, 50) + "..."}
                </p>
              </section>
              <section
                id="cardInfo"
                className="w-full flex flex-wrap items-center justify-center mt-2"
              >
                <p className="text-sm font-semibold text-center text-gray-600 dark:text-gray-400">
                  Published:{" "}
                  <span className="font-medium">{article.createdAt}</span>
                </p>
                <p className="text-sm font-semibold text-center text-gray-600 dark:text-gray-400">
                  Author: <span className="font-medium">{article.author}</span>
                </p>
              </section>
            </div>
          </Link>
        ))}
      </section>
      <section className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <h1 className="w-full mb-4 text-3xl  text-white font-semibold text-center">
          New section
        </h1>
      </section>
      <section className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <h1 className="w-full mb-4 text-3xl  text-white font-semibold text-center">
          New section
        </h1>
      </section>
    </>
  );
}
