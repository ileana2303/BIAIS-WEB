import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-6 z-50 flex justify-between items-center px-6 py-4 max-w-7xl mx-auto mt-6 bg-white/70 backdrop-blur-md border border-gray-200 rounded-full shadow-sm">

      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="BIAIS Logo"
          width={45}
          height={45}
          priority
        />
        <span className="font-bold text-xl tracking-tight">BIAIS</span>
      </Link>

      <div className="flex gap-8 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-black transition">Services</a>
        <a href="#" className="hover:text-black transition">Work</a>
        <a href="#" className="hover:text-black transition">Contact</a>
      </div>

      <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
        Start Project
      </button>

    </nav>
  )
}