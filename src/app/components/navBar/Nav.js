import Link from "next/link";
import LoginLogout from "../login_Logout/loginLogout";
import navLinks from "./navLinksTab";

export default function Nav() {
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
      <ul className="flex items-center gap-4">
        {navLinks.map((link, index) => (
          <Link
            href={link.href}
            className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:underline"
            key={index}
          >
            {link.linkName}
          </Link>
        ))}
      </ul>
      <LoginLogout />
    </nav>
  );
}
