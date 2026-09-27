// import Link from "next/link"
import { JSX } from "react/jsx-runtime"
import { CategoriesNavbar } from "../components/Navbar"
import { getAllCategories } from "../lib/categories"
import type { Category } from "../types"

export default function ThreeDeeModelLayout({children} : Readonly<{children: React.ReactNode}>) : JSX.Element {

  const categories: Category[] = getAllCategories()

return (
    <>
        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-8 w-full px-4">
            <CategoriesNavbar categories={categories} />
        </nav>
        {children}
    </>
)

}