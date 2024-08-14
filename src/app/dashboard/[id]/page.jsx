"use client";
import Card from "@/app/components/card/Card";
import usersTab from "@/app/users/usersTab";
import { useRouter } from "next/navigation";

export default function UserDashboard({ params }) {
  const router = useRouter();
  const user = usersTab.find((user) => user.id === params.id);
  return (
    <>
      <Card
        link="/"
        title={`Profile of ${user.name}`}
        textContent={
          <>
            <p className="mb-2">
              This is the page of{" "}
              <span className="font-semibold">{user.name}</span> with ID:{" "}
              {user.id}
            </p>
            <p className="text-lg font-semibold">His/her hobbies are:</p>
            <p>{user.hobbies.join(", ")}</p>
            <p>
              {user.name} is {user.age} old {user.age > 1 ? "years" : "year"}{" "}
              old
            </p>
          </>
        }
      />{" "}
    </>
  );
}
