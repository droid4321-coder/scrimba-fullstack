import { getDisplayNameFromSlug } from "@/app/lib/categories"
import type { Category } from "@/app/types"
import { getModels } from "@/app/lib/models"
import ModelsGrid from "@/app/components/ModelsGrid"
// import { getCategoryBySlug } from "@/app/lib/categories"
// import { getAllCategories } from "@/app/lib/categories"


//we get the category slug from the params and associate it with the category name to display it
export default async function ThreeDeeModelCategoriesPage({ params } : {params : Promise<Category>}) {
    const { slug } = await params
    
    const models = await getModels({category : slug})

    return (
        <>
            <ModelsGrid title={getDisplayNameFromSlug(slug)} models={models}/>
        </>
    )
}