//types will be put here and exported to different components

import React from "react"

export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}