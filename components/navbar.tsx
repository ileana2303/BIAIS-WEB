"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Container from "./layout/container"

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Works" },
  { href: "/#cta", label: "Contact" },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPrimaryCtaHovered, setIsPrimaryCtaHovered] = useState(false)
  const pathname = usePathname()
  const isContactPage = pathname.startsWith("/contact-us")

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <Container className="sticky top-4 z-50 mt-4 sm:mt-6">
      <nav className="relative mx-auto max-w-full rounded-[2rem] bg-[#FFFAF0] px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.png"
              alt="BIAIS Logo"
              width={45}
              height={45}
              priority
              className="h-10 w-10 sm:h-[45px] sm:w-[45px]"
            />
            <span className="text-2xl font-bold tracking-tight sm:text-3xl">
              BIAIS
            </span>
          </Link>

          {!isContactPage ? (
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium text-gray-700 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}

          <div className="ml-auto flex items-center gap-3">
            <div className={isContactPage ? "block" : "hidden md:block"}>
              <Link
                href="/contact-us"
                data-cursor-theme={isPrimaryCtaHovered ? "light" : "dark"}
                className="rounded-full border-2 border-black bg-[linear-gradient(to_top,black_50%,#FFFAF0_50%)]
	bg-[length:100%_220%] bg-[position:0_100%] px-4 py-2 text-[#FFFAF0] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

hover:bg-[position:0_0] hover:text-black"
                onMouseEnter={() => setIsPrimaryCtaHovered(true)}
                onMouseLeave={() => setIsPrimaryCtaHovered(false)}
              >

                Start Your Project
              </Link>
            </div>

            <button
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black transition hover:bg-black/5 ${isContactPage ? "" : "md:hidden"
                }`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              <span className="relative block h-4 w-4">
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-4 rounded-full bg-current transition ${isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                    }`}
                />
                <span
                  className={`absolute left-0 top-[7px] block h-0.5 w-4 rounded-full bg-current transition ${isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`absolute left-0 top-[14px] block h-0.5 w-4 rounded-full bg-current transition ${isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                />
              </span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div
            id="mobile-navigation"
            className={`absolute top-full mt-3 rounded-[1.75rem] border border-black/5 bg-[#FFFAF0] p-4 shadow-lg ${isContactPage
              ? "right-0 w-80 max-w-[calc(100vw-2rem)]"
              : "inset-x-0 md:hidden"
              }`}
          >
            <div className="flex flex-col gap-2 text-base font-medium text-gray-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 transition hover:bg-black/5 hover:text-black"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {!isContactPage ? (
              <Link
                href="/contact-us"
                data-cursor-theme="dark"
                className="mt-4 block rounded-full bg-black px-4 py-3 text-center text-[#FFFAF0] transition hover:bg-gray-800"
                onClick={closeMobileMenu}
              >
                Start Your Project
              </Link>
            ) : null}
          </div>
        ) : null}
      </nav>
    </Container>
  )
}
