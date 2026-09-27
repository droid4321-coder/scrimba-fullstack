//returns the root page, it should be a default export

/* 
  if we write export const revalidate = 60, the page will regereate every 60 seconds. It will keep a cache in the time alloted. In a static page, this wont make sense. Likewise fetch(url, {next : (revalidate: 60)}) -> the fetch will run every 60 secs.

  
*/
export default function Page() {
    console.log("Page", `${typeof window === "undefined" ? "Server" : "Client"} component`);
  return <h1>Hello, Next.js!</h1>
}