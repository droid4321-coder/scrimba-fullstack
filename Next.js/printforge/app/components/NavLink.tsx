import Link from "next/link"
import type { NavLinkProps } from "./../types"

export default function NavLink({ href, children, isActive }: NavLinkProps) {

  return (
    // <li className="text-sm uppercase list-none">
      <Link
        href={href}
        className={`px-4 py-2 ${isActive ? "text-orange-500" : "text-gray-700"} transition-colors rounded-md cursor-pointer hover:text-orange-500`}
      >{children}</Link>
    // </li>
  )
}