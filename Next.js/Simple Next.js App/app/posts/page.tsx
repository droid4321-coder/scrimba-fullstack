import Link from "next/link";
import type { JSX } from "react/jsx-runtime";

//in react we would need to create a new state and useEffect to fetch the info without infinite looping

//item has a userId, id, title, and body!

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export default async function PostsPage(): Promise<JSX.Element> {
    const res : Response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data : Post[] = await res.json()
    const dataElements = data.map((item) => {
        return (
            <div key={item.id}>
                <Link href={`/posts/${item.id}`}>
                    <h2>{item.title}</h2>
                    {/* <p>Post # {item.id} by User {item.userId}</p> */}
                </Link>
                {/* <h2>{item.title}</h2>
                <p>{item.body}</p> */}
            </div>
        )
    })
    return (
        // <pre>
        //     {JSON.stringify(data, null, 2)}
        // </pre>
        <>
            {dataElements}
        </>
    )
}