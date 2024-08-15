"use client"; //CSR
import Button from "@/app/components/button/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageBlog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch("/data/tabs/articlesTab.json", {
          next: { validate: 10 },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch articles !");
        }

        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    }
    fetchArticles();
  }, []);

  // handle errors fetching data :
  if (articles.length === 0) {
    return <p>Loading data...</p>;
  }

  const renderArticles = articles.map((article) => (
    <Link href={`/blog/${article.id}`} key={article.id}>
      <div
        id="card"
        className="w-full min-h-[300px] flex-col mb-4 p-4 flex items-center justify-between rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <section id="cardTitle" className="flex items-center justify-between">
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
            Published: <span className="font-medium">{article.createdAt}</span>
          </p>
          <p className="text-sm font-semibold text-center text-gray-600 dark:text-gray-400">
            Author: <span className="font-medium">{article.author}</span>
          </p>
        </section>
      </div>
    </Link>
  ));
  return (
    <>
      <section className="w-full px-4">
        <div className="w-full">
          <Link href={"/"}>
            <Button>{"Back to homepage"}</Button>
          </Link>
        </div>
        <div className="w-full">
          <h1 className="w-full mb-4 text-3xl text-center text-white">
            Article List
          </h1>
        </div>
      </section>

      <section className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {renderArticles}
      </section>
    </>
  );
}
