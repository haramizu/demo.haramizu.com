import Link from "next/link";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const navigation = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/sitecore",
    icon: BsFacebook,
  },
  {
    name: "X",
    href: "https://twitter.com/sitecore",
    icon: FaXTwitter,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sitecore/",
    icon: BsInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/haramizu/demo.haramizu.com",
    icon: BsGithub,
  },
];

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Sitecore, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
