"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black bg-opacity-60 backdrop-blur-md">
      <div ref={logoRef} className="text-cyan-400 text-2xl font-bold tracking-wide">
        KyōkenFlow
      </div>
      <nav ref={navRef} className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-white font-medium ${
              pathname === link.href ? "text-cyan-400" : ""
            }`}
          >
            <span className="hover-underline">{link.label}</span>
          </Link>
        ))}
      </nav>

      <style jsx>{`
        .hover-underline {
          position: relative;
          display: inline-block;
        }

        .hover-underline::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #00ffe0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .hover-underline:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
}
