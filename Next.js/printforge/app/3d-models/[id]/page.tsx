import type { Model } from "@/app/types";
// import { getAllModels } from "@/app/lib/models";
import Image from "next/image";
import placeholderimg from "@/public/placeholder.png";
import { notFound } from "next/navigation";
import { getModelById } from "@/app/lib/models";

export default async function ThreeDeeModelDetailPage({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    // Getting model with details and setting up params
    const { id } = await params;
    const res : Model = await getModelById(id);
    // const modelData: Model | undefined = res.find(item => Number(id) === item.id);

    if (!res) {
        notFound();
    }

    return (
        <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    {res.description}
                </h1>
                <div className="flex items-center gap-1.5 self-start md:self-center px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 font-medium text-sm border border-rose-100 dark:border-rose-900/50 shadow-sm">
                    <span>❤️</span> 
                    <span>{res.likes}</span>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Image Container */}
                <div className="md:col-span-2 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-md bg-zinc-50 dark:bg-zinc-900 aspect-3/2 flex items-center justify-center">
                    <Image
                        src={placeholderimg.src}
                        width={600}
                        height={400}
                        alt={res.description}
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300 easy-out"
                    />
                </div>

                {/* Metadata Sidebar */}
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 p-6 dark:bg-zinc-900/50 shadow-sm space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        Model Information
                    </h2>
                    
                    <div className="space-y-3 text-sm">
                        <div className="flex flex-col border-b border-zinc-100 dark:border-zinc-800/60 pb-2">
                            <span className="font-medium text-zinc-500 dark:text-zinc-400">Category</span>
                            <span className="text-zinc-900 dark:text-zinc-200 mt-0.5 font-semibold">{res.category}</span>
                        </div>
                        
                        <div className="flex flex-col border-b border-zinc-100 dark:border-zinc-800/60 pb-2">
                            <span className="font-medium text-zinc-500 dark:text-zinc-400">Date Added</span>
                            <span className="text-zinc-900 dark:text-zinc-200 mt-0.5">{res.dateAdded}</span>
                        </div>

                        <div className="flex flex-col pt-1">
                            <span className="font-medium text-zinc-500 dark:text-zinc-400">Full Description</span>
                            <p className="text-zinc-700 dark:text-zinc-300 mt-1 leading-relaxed text-xs">
                                {res.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
