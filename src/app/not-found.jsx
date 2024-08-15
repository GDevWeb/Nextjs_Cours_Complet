"use client";
import Image from "next/image";
import Link from "next/link";
import errorImage from "../../public/image/errorImage.webp";
import Button from "./components/button/Button";
export default function notFound() {
  return (
    <div className="w-full h-full m-auto p-4">
      <Image src={errorImage} alt="error 404 picture" className="rounded" />
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
