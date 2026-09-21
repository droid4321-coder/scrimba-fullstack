import { React } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints"
import Link from "next/link"

//this is next.js React Component that makes the root page for our project
// it needs to have the chidren prop to return the pages included
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header>
        <nav>
          <h1>Simple Next.js App</h1>
          <ul>
            <li>
              <Link href="/">Main Page</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about/mission">Mission</Link>
              </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
        {children}
      </body>
    </html>
  )
}