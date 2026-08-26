import { createRoot } from "react-dom/client";
//import { Fragment } from "react"; <> </> does the same trick
import { Header } from "./Header.jsx"; //from my own file ./ not a package
import { MainContent } from "./MainContent.jsx";
import { Footer } from "./Footer.jsx";
import { TemporaryName } from "./TemporaryName.jsx";

const root = createRoot(document.getElementById("root"));

//fragmented components and put them inside the Page function in order
//this Page component renders 3 child components
function Page() {
    return (
        <>
            <Header /> 
            <MainContent />
            <Footer />
        </>
        )
}
root.render(
    <>
    <Page />
    </>
)

