import { React } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints"

//this is next.js React Component that makes the root page for our project
// it needs to have the chidren prop to return the pages included
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}