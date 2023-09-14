// app/header.tsx

import Image from "next/image";
import { ThemeSwitcher } from "../components/Button/ThemeSwitcher";
import Link from "next/link";

export default function Header() {
  return (
    <header className="dark:bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image
              src="/content-hub-one-logo-color.svg"
              width="44"
              height="55"
              alt="Content Hub ONE"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-m font-semibold leading-6">
            Features
          </a>
          <a href="#" className="text-m font-semibold leading-6">
            Marketplace
          </a>
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
