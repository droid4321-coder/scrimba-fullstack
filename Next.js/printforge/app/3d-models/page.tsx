import ModelsGrid from "@/app/components/ModelsGrid"
import { getAllModels } from "@/app/lib/models"
import type { ModelsPageProps } from "../types"
import Form from "next/form"


export default async function Page({searchParams} : ModelsPageProps) {

    const models = await getAllModels()

    const resolvedParams = await searchParams

    const rawSearch = resolvedParams?.search

    const query = typeof rawSearch === "string" ? rawSearch.toLowerCase() : ""

    const filteredModels = query ? models.filter((item) => {
        const nameMatch = item.name.toLowerCase() || "";
        const descriptionMatch = item.description.toLowerCase() || "";

        return nameMatch.includes(query) || descriptionMatch.includes(query)
    }) : models

    console.log(filteredModels.length);

    return (
        // 1. Added a max-width container with vertical spacing
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
            
            {/* 2. Structured form using semantic layout blocks */}
            <Form action="/3d-models" className="w-full max-w-xl mx-auto">
                <div className="flex flex-col gap-2">
                    {/* Accessible, clean label styling */}
                    <label 
                        htmlFor="search" 
                        className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 tracking-wide"
                    >
                        Search 3D Models
                    </label>
                    
                    {/* Input Container Wrapper with an absolute magnifying glass icon */}
                    <div className="relative rounded-xl shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            {/* SVG Search Icon */}
                            <svg 
                                className="h-5 w-5 text-neutral-400" 
                                xmlns="http://w3.org" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        
                        {/* Beautifully styled input with focus states, ring behaviors, and smooth transitions */}
                        <input 
                            type="text" 
                            name="search" 
                            id="search" 
                            placeholder="e.g. Kit, Sci-Fi, Character..." 
                            autoComplete="off" 
                            defaultValue={query}
                            className="block w-full pl-11 pr-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-base"
                        />
                    </div>
                    
                    {/* Tiny helper context text beneath the bar */}
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 pl-1">
                        Press <kbd className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 font-sans shadow-sm text-[10px]">Enter</kbd> to execute your query.
                    </p>
                </div>
            </Form>
            
            {/* The model rendering layout grid */}
            <ModelsGrid title="3D Models" models={filteredModels} />
        </div>
    )
}
