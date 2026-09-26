//returns the root page, it should be a default export
export default function Page() {
    console.log("Page", `${typeof window === "undefined" ? "Server" : "Client"} component`);
  return <h1>Hello, Next.js!</h1>
}