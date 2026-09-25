// import Link from "next/link"
import { getAllCategories } from "../lib/categories"
import { JSX } from "react/jsx-runtime"
import type { Category } from "../types"
import NavLink from "../components/NavLink"

export default function ThreeDeeModelLayout({children} : Readonly<{children: React.ReactNode}>) : JSX.Element {

    const categories : Category[] = getAllCategories()

    const categoryElements : JSX.Element[] = categories.map((item) => {
        return (
            <NavLink
                key={item.slug}
                href={`/3d-models/categories/${item.slug}`}
            >{item.displayName}</NavLink>
        )
    })

return (
    <>
        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-8 w-full px-4">
            <NavLink href="/3d-models">All</NavLink>
            {categoryElements}
        </nav>
        {children}
    </>
)

}