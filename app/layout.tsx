import "./globals.css"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "BIAIS",
  description: "Backend, AI, and product engineering company",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFFAF0] text-black ">
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
