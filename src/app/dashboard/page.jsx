"use client";
import { useRouter } from "next/navigation";
import Button from "../components/button/Button";
export default function DashboardPage() {
  const router = useRouter();
  return (
    <>
      <section className="w-full mb-2 p-2">
        <Button onClick={router.back}>Back</Button>
      </section>

      <h1 className="text-3-xl font-bold text-center">Dashboard</h1>
    </>
  );
}
