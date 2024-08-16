"use client";
import { AuthenticatedContext } from "@/app/context/AuthenticatedContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import errorImage from "../../public/image/errorImage.webp";
import Button from "./components/button/Button";

export default function notFound() {
  // ***1.State***
  const { isAuthenticated } = useContext(AuthenticatedContext);
  const [delay, setDelay] = useState(10);

  // ***2.Functions***
  const router = useRouter();

  // Redirection :
  useEffect(() => {
    const countDownInterval = setInterval(() => {
      setDelay((prevDelay) => {
        if (prevDelay > 0) {
          return prevDelay - 1;
        } else {
          clearInterval(countDownInterval);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(countDownInterval);
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      const redirectToHome = setTimeout(() => {
        router.push("/");
      }, delay * 1000);

      return () => redirectToHome;
    }
  }, [isAuthenticated, delay]);

  return (
    <div className="w-full h-full m-auto p-4">
      <Image src={errorImage} alt="error 404 picture" className="rounded" />
      <div className="w-full p-2 flex items-center gap-2 justify-center">
        {!isAuthenticated ? (
          <p className="w-full text-2xl text-center text-orange-500">
            You'll be redirected in {delay} seconds...
          </p>
        ) : (
          ""
        )}
      </div>
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
