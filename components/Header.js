"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#f2f3f7] shadow-[1em_1em_1em_#d8dae0b1,-0.75em_-0.75em_1em_#ffffff] border-[1.5px] border-[#f2f3f7] mb-8">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-bold text-[black] transition-colors duration-200 hover:text-[#4096ff]"
          >
            EcoShape
          </Link>
          <nav className="flex gap-4"></nav>
        </div>
      </div>
    </header>
  );
}
