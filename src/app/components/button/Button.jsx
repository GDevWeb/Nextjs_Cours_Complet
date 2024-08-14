export default function Button({
  onClick,
  children,
  bgColor = "bg-slate-200",
  bgColorHover = "bg-slate-600",
}) {
  return (
    <button
      onClick={onClick}
      className={`min-w-[125px] m-2 px-2 py-4 text-lg font-semibold ${bgColor} rounded hover:${bgColorHover} hover:text-white transition-all`}
    >
      {children}
    </button>
  );
}
