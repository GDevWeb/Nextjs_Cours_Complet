"use client";
import { useRouter } from "next/navigation";
export default function PageArticles() {
  const router = useRouter();

  console.log(router);
  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);

  return <div>PageArticles</div>;
}
