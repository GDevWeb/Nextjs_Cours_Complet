import Link from "next/link";
import servicesLinkTab from "./servicesLinkTab";

export default function PageServices() {
  return (
    <section className="w-full m-auto p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded">
      <h1 className="text-2xl font-semibold text-center mb-4">Nos services</h1>

      <ul className="w-full p-2 flex flex-col gap-2">
        {servicesLinkTab.map((service, index) => (
          <li key={index}>
            <Link
              href={service.href}
              className="text-blue-600 dark:text-blue-400 hover:underline dark:hover:text-blue-300"
            >
              {service.linkName}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
