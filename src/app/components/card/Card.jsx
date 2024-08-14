import Link from "next/link";

export default function Card({ link, title, textContent }) {
  return (
    <Link href={link}>
      <div
        id="card"
        className="w-full min-h-[300px] flex-col mb-4 p-4 flex items-center justify-between rounded bg-[#F3F3F3] transition-all hover:shadow-lg"
      >
        <div id="cardHeader" className="w-full mb-2 p-2">
          <h1 className="text-3xl p-2 font-semibold text-center">{title}</h1>
        </div>
        <div id="cardContent" className="w-full mb-2 p-2">
          {textContent}
        </div>
      </div>
    </Link>
  );
}
