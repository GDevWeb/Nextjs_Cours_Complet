import { Link } from "next/navigation";
export default function Button({ link, bgColor, label }) {
  return (
    <Link href={link}>
      <button className="min-w-[125px] m-2 px-2 py-4 text-lg font-semibold bg-{bgColor}-200 rounded hover:bg-{bgColor}-400 hover:text-white transition-all">
        {label}
      </button>
    </Link>
  );
}
