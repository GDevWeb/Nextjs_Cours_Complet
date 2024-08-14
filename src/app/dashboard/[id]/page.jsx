"use client";
import Button from "@/app/components/button/Button";
import usersTab from "@/app/users/usersTab";
import { useRouter } from "next/navigation";

export default function UserDashboard({ params }) {
  const router = useRouter();
  const user = usersTab.find((user) => user.id === params.id);
  return (
    <>
      <section className="w-full mb-2 p-2">
        <Button onClick={router.back}>Back</Button>
      </section>
      <div
        id="dashboardMainContainer"
        className="w-[50%] min-h-[50vh] m-auto p-4 flex flex-col items-center justify-be bg-slate-200  rounded "
      >
        <section className="w-full mb-2 p-2 border-b border-slate-300">
          <h1 className="text-3xl p-2 font-semibold text-center">
            Profil of {user.name}
          </h1>
        </section>
        <div id="dashboardContent" className="w-[50%] m-auto flex flex-col">
          <section className=" mb-2 p-2 m-auto flex flex-col">
            <p className="mb-2">
              This is the page of{" "}
              <span className="font-semibold">{user.name}</span> with ID :{" "}
              {user.id}
            </p>
            <p className="text-lg font-semibold">His/her hobbies are:</p>
            <p>{user.hobbies.join(", ")}</p>
            <p>
              {user.name} is {user.age} old {user.age > 1 ? "years" : "year"}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
