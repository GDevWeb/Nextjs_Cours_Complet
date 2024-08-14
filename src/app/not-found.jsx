"use client";
import Link from "next/link";
import Button from "./components/button/Button";
export default function notFound() {
  return (
    <div className="w-full h-full m-auto p-4">
      <h1 className="text-3xl font-semibold text-center text-red-600">404</h1>
      <h2 className="text-3xl font-semibold text-center text-black-600">
        Page not found !
      </h2>
      <p className="text-3xl font-semibold text-center text-black-600">
        Sorry, the query page doesn't exist !
      </p>
      <div className="w-full p-2 flex items-center gap-2 justify-center">
        <Button
          href={"/contact"}
          bgColor="bg-orange-300"
          bgColorHover="bg-orange-600"
        >
          <Link href={"/contact"}>Contact us</Link>
        </Button>
      </div>
    </div>
  );
}
