"use client"

// import Link from "next/link"
import PFLogoIcon from "@/public/printforge-logo-icon.svg"
import PFLogo from "@/public/printforge-logo.svg"
import NavLink from "./NavLink"
// import { getAllCategories } from "../lib/categories"
import type { Category } from "../types"
import { usePathname } from "next/navigation"
import { JSX } from "react/jsx-runtime"
import Image from "next/image"


export default function Navbar() {

  const path = usePathname()
  // console.log(path);

  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <NavLink href="/" isActive={path === "/"}>
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <Image
              src={PFLogo.src}
              alt="PrintForge Logo"
              className="w-50 h-auto hidden md:block"
              width={300}
              height={63}
            />
            {/* Mobile Logo */}
            <Image
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
              className="w-10 h-auto block md:hidden"
              width={174}
              height={150}
            />
          </div>
        </NavLink>
        <ul className="flex items-center gap-2.5 list-none">
          <li className="text-sm uppercase cursor-pointer list-none">
            <NavLink href="/3d-models" isActive={path.startsWith("/3d-models")}>3D Models</NavLink>
          </li>
          <li className="text-sm uppercase cursor-pointer list-none">
            <NavLink href="/about" isActive={path === "/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export function CategoriesNavbar({categories} : {categories : Category[]}) {
    const path = usePathname()

    const categoryElements : JSX.Element[] = categories.map((item) => {
        return (
            <NavLink
                key={item.slug}
                href={`/3d-models/categories/${item.slug}`}
                isActive={path === `/3d-models/categories/${item.slug}`}
            >{item.displayName}</NavLink>
        )
    })
  
  return (
    <>
      <NavLink href="/3d-models" isActive={path === "/3d-models"}>All</NavLink>
      {categoryElements}
  </>
  )
}