import { React } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints"
import Link from "next/link"
import Navbar from "../components/Navbar"
import "./globals.css"

//this is next.js React Component that makes the root page for our project
// it needs to have the chidren prop to return the pages included
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  console.log("RootLayout", `${typeof window === "undefined" ? "Server" : "Client"} component`);
  
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
      </header>
        {children}
        <footer>&copy; {new Date().getFullYear()} Droid Coder, LOL.</footer>
      </body>
    </html>
  )
}