import { JSX } from "react/jsx-runtime";
import data from "./../page"
import type { Post } from "./../page";

export default async function PostDetailsPage({ params }) : Promise<JSX.Element>{
    const { id } = await params
    console.log(id);

    const res : Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post: Promise<Post> = await res.json()
    console.log(post)
    return (
        <>
            <h1>Post details for Post # {(await post).id} by User {(await post).userId}</h1>
            <h2>Title: {(await post).title}</h2>
            <p>Content: {(await post).body}</p>
        </>
    )
}