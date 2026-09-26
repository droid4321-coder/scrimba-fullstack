"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {

    console.log("Navbar", `${typeof window === "undefined" ? "Server" : "Client"} component`);

    const pathname = usePathname()
    console.log(pathname);

    return (
        <nav>
          <h1>Simple Next.js App</h1>
          <ul>
            <li>
              <Link className={pathname === "/" ? "active" : null} href="/">Main Page</Link>
            </li>
            <li>
              <Link className={pathname === "/about" ? "active" : null} href="/about">About</Link>
            </li>
            <li>
              <Link className={pathname === "/about/mission" ? "active" : null} href="/about/mission">Mission</Link>
              </li>
            <li>
              <Link className={pathname === "/posts" ? "active" : null} href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
    )
}