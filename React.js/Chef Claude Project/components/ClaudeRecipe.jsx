import Markdown from "react-markdown";

//aria live will announce and tell assistive users that the section is rendered

export default function ClaudeRecipe(props) {
    return (
        <section className={props.recipeShownEnable}>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <Markdown>{props.recipeText || "Check React Markdown Plugin!"}</Markdown>
    </article>
        </section>
    )
}