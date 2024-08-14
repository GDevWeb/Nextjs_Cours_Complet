import articlesTab from "../articlesTab";

export default function Articles({ params }) {
  const article = articlesTab.find((article) => article.id === params.id);

  if (!article)
    return (
      <div className="w-full">
        <h1 className="text-3xl text-center text-red-500">
          No article matches with your query!
        </h1>
      </div>
    );

  return (
    <div
      id="card"
      className="w-full h-[50vh] my-4 mx-auto p-6 flex flex-col items-center justify-between rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <section id="cardTitle" className="flex items-center justify-between">
        <h1 className="w-full text-3xl font-semibold text-center">
          {article.title}
        </h1>
      </section>
      <section id="cardContent" className="w-full mt-4">
        <p className="text-lg font-semibold text-center">
          {article.description}
        </p>
      </section>
      <section
        id="cardInfo"
        className="w-full flex items-center justify-between mt-4"
      >
        <p className="w-full text-center text-gray-600 dark:text-gray-400">
          Published: <span>{article.createdAt}</span>
        </p>
        <p className="w-full text-center text-gray-600 dark:text-gray-400">
          Author: <span>{article.author}</span>
        </p>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return articlesTab.map((article) => ({
    id: article.id,
  }));
}
