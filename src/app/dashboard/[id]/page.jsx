"use client";
import usersTab from "@/app/users/usersTab";
import { useRouter } from "next/navigation";
export default function UserDashboard({ params }) {
  const router = useRouter();
  const user = usersTab.find((user) => user.id === params.id);
  return (
    <>
      <section className="w-full mb-2 p-2">
        <button
          type="button"
          onClick={router.back}
          className="min-w-[125px] m-2 px-2 py-4 text-lg font-semibold bg-slate-200 rounded hover:bg-slate-400 hover:text-white transition-all"
        >
          Back
        </button>
      </section>
      <section className="w-full mb-2 p-2">
        <h1 className="text-3xl p-2 font-semibold text-center">
          Profil of {user.name}
        </h1>
      </section>
      <section className="w-full mb-2 p-2">
        <p className="mb-2">
          This is the page of <span className="font-semibold">{user.name}</span>{" "}
          with ID : {user.id}
        </p>
        <p className="text-lg font-semibold">His/her hobbies are:</p>
        <p>{user.hobbies.join(", ")}</p>
        <p>
          {user.name} is {user.age} old {user.age > 1 ? "years" : "year"}
        </p>
      </section>
    </>
  );
}
