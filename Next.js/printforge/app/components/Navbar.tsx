"use client"

// import Link from "next/link"
import PFLogoIcon from "@/public/printforge-logo-icon.svg"
import PFLogo from "@/public/printforge-logo.svg"
import NavLink from "./NavLink"
import { usePathname } from "next/navigation"

export default function Navbar() {

  const path = usePathname()
  console.log(path);

  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <NavLink href="/" isActive={path === "/"}>
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <img
              src={PFLogo.src}
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
            />
            {/* Mobile Logo */}
            <img
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </NavLink>
        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase cursor-pointer">
            <NavLink href="/3d-models" isActive={path === "/3d-models"}>3D Models</NavLink>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <NavLink href="/about" isActive={path === "/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}