import Link from "next/link";
import servicesLinkTab from "./servicesLinkTab";

export default function PageServices() {
  return (
    <>
      <section className="w-full">
        <h1 className="w-full p-4 text-2xl font-semibold text-center">
          Nos services
        </h1>

        <ul className="w-full  p-2 flex flex-col">
          {servicesLinkTab.map((service, index) => {
            return (
              <Link href={service.href} key={index}>
                {service.linkName}
              </Link>
            );
          })}
        </ul>
      </section>
    </>
  );
}
