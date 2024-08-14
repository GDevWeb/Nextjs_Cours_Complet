export default function Button({
  onClick,
  children,
  bgColor = "bg-green-300",
  bgColorHover = "bg-green-600",
}) {
  return (
    <button
      onClick={onClick}
      className={`min-w-[125px] p-2 font-semibold text-white rounded-md transition-all ${bgColor} hover:${bgColorHover}`}
    >
      {children}
    </button>
  );
}
