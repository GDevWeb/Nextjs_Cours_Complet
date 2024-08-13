import Link from "next/link";
import LoginLogout from "../login_Logout/loginLogout";
import navLinks from "./navLinksTab";

export default function Nav() {
  return (
    <nav className="w-full min-h-[5vh] flex items-center justify-between p-2 bg-slate-50 rounded">
      <ul className="flex items-center justify-between gap-1">
        {navLinks.map((link, index) => {
          return (
            <Link
              href={link.href}
              className="text-lg font-semibold"
              key={index}
            >
              {link.linkName}
            </Link>
          );
        })}
      </ul>
      <LoginLogout />
    </nav>
  );
}
