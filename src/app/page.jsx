export const metadata = {
  title: "Home",
  description: "HomePage",
};

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await response.json();
  return data;
}
export default async function Home() {
  const posts = await fetchPosts();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <h1 className="text-3xl">Home</h1>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <h3>{post.body}</h3>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

/* SSR */
