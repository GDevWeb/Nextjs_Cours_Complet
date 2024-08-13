"use client";
import usersHobbiesTab from "../usersTab";

export default function UserProfile({ params }) {
  const user = usersHobbiesTab.find((user) => user.id === params.id);

  if (!user) {
    return (
      <div className="text-lg font-semibold text-center text-red-500">
        No user matching !
      </div>
    );
  }

  return (
    <>
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

export async function generateStaticParams() {
  return user.map((user) => {
    id: user.id;
  });
}
