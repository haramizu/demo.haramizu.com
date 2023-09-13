// app/header.tsx

import Image from "next/image";
import { ThemeSwitcher } from "./_components/button/ThemeSwitcher";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link href="/">
            <Image
              src="/content-hub-one-horizontal-color-black-txt.png"
              width="200"
              height="150"
              alt="Content Hub ONE"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
