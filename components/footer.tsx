import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">

        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="BIAIS Logo"
            width={45}
            height={45}
            priority
          />
          <span className="font-bold text-lg">BIAIS</span>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-black transition">AI Systems</li>
            <li className="hover:text-black transition">Backend Platforms</li>
            <li className="hover:text-black transition">Web Applications</li>
            <li className="hover:text-black transition">Mobile Apps</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-black transition">About</li>
            <li className="hover:text-black transition">Work</li>
            <li className="hover:text-black transition">Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-black transition">LinkedIn</li>
            <li className="hover:text-black transition">GitHub</li>
            <li className="hover:text-black transition">info@nostosenteprises.com</li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t text-sm text-gray-400 flex justify-between">
        <span>© {new Date().getFullYear()} BIAIS</span>
        <span>Building intelligent digital products</span>
      </div>

    </footer>
  )
}