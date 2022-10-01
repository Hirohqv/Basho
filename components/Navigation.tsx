import Link from "next/link";
import { NAVIGATION } from "../consts";

export default function Navigation() {
  return (
    <div>
      <header className="flex items-center justify-center p-10 space-x-10">
        {NAVIGATION.main.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="mb-auto text-lg font-medium sm:p-4"
          >
            {link.name}
          </Link>
        ))}
      </header>
    </div>
  );
}
