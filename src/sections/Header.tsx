"use client";
import Link from "next/link";

interface HeaderProps {
  logoSrc?: string;
  logoHref?: string;
  logoAlt?: string;
}

export function Header({
  logoSrc = "/microsoft.png",
  logoHref = "/",
  logoAlt = "Microsoft Logo",
}: HeaderProps) {
  const isExternal = logoHref?.startsWith("http");

  const logoElement = (
    <img src={logoSrc} alt={logoAlt} className="h-9 object-contain" />
  );

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="px-5 py-3">
        {isExternal ? (
          <a
            href={logoHref}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#012169] rounded"
          >
            {logoElement}
          </a>
        ) : (
          <Link
            href={logoHref}
            className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#012169] rounded"
          >
            {logoElement}
          </Link>
        )}
      </div>
    </header>
  );
}
