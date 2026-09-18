import { React } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints"

//this is next.js React Component that makes the root page for our project
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