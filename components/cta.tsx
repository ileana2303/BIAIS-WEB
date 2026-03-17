"use client";

import Link from "next/link";
import Container from "./layout/container";

export default function CTA() {
  return (
    <section id="cta" className="py-24">

      <Container>

        <div className="text-center mb-16 text-sm tracking-wide text-black flex items-center justify-center gap-3">
          <span className="w-2 h-2 bg-black rounded-full" />
          LET'S CREATE SOMETHING AWESOME
          <span className="w-2 h-2 bg-black rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-black rounded-3xl p-16 flex flex-col items-center justify-between min-h-[400px]">

            <h3 className="text-4xl md:text-5xl text-[#FFFAF0] text-center">
              join our team
            </h3>

            <Link
              href="/contact-us/careers"
              className="group mt-16 w-40 h-40 flex items-center justify-center rounded-full bg-[#FFFAF0] text-black text-sm transition-all duration-500 ease-out hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <span className="transition-all duration-300 group-hover:tracking-wider">
                CHECK CAREERS
              </span>
            </Link>

          </div>

          <div className="bg-black rounded-3xl p-16 flex flex-col items-center justify-between min-h-[400px]">

            <h3 className="text-4xl md:text-5xl text-[#FFFAF0] text-center">
              start <br /> a project
            </h3>

            <Link
              href="/contact-us"
              className="mt-16 w-40 h-40 flex items-center justify-center rounded-full bg-[#FFFAF0] text-black text-sm hover:scale-105 transition"
            >
              CONTACT US
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}
