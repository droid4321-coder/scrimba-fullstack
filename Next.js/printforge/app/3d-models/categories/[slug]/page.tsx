import { getDisplayNameFromSlug } from "@/app/lib/categories"
import type { Category } from "@/app/types"
// import { getCategoryBySlug } from "@/app/lib/categories"
// import { getAllCategories } from "@/app/lib/categories"


//we get the category slug from the params and associate it with the category name to display it
export default async function ThreeDeeModelCategoriesPage({ params } : {params : Promise<Category>}) {
    const { slug } =  await params
    return <h1>You are seeing the category {getDisplayNameFromSlug(slug)}</h1>
}