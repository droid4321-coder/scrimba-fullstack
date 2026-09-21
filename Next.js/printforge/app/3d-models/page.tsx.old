import { JSX } from "react/jsx-runtime";
import { getAllModels } from "../lib/models";
import type { Model } from "../types";
import Image from "next/image";
import placeholderimg from "@/public/placeholder.png"
import Link from "next/link";

//fetching
const res: Model[] = await getAllModels()

const modelElements = res.map((item) => {
  return (
    // Replaced mx-auto with a fixed/responsive width so they can sit side-by-side
    <Link key={item.id} href={`/3d-models/${item.id}`}> 
    <div key={item.id} className="w-full sm:w-80 p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex flex-row justify-between items-center w-full mb-2">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="text-sm">❤️ {item.likes}</p>
      </div>

      <div className="overflow-hidden rounded-md mb-3">
        <Image 
          src={placeholderimg.src} 
          alt={item.description} 
          height={400} 
          width={600} 
          unoptimized={true} 
          className="w-full h-auto object-cover"
        />
      </div>

      <p className="text-gray-600 mb-4">{item.description}</p>

      {/* <div className="flex flex-row justify-between items-center w-full text-sm text-gray-500">
        <p>Category: <span className="font-medium text-gray-700">{item.category}</span></p>
        <p>Added: {item.dateAdded}</p>
      </div> */}
      </div>
      </Link>
  )
})

export default function ThreeDeeModelsPage() : JSX.Element  {
    return (
        <>
        <h1 className="text-4xl text-gray-900 text-center font-bold p-10">3D Models</h1>
        <div className="flex flex-wrap gap-6 justify-center p-6">
        {modelElements}
        </div>
        </>
    )
}