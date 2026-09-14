import { RecontextImageResponse } from "@google/genai";
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";

//its best to put onSubmit on the form so it registers the form gracefully, and it handles both the button press and button submit

//preventDefault() prevents the page from refreshing after submitting a form, which is default HTML behavior

/*Explaining the addIngredient function
FormData is a built-in browser tool (a JavaScript object) that automatically gathers all the inputs from a HTML form so you can easily use or send the data.Instead of manually creating separate state variables for every single input field in your form, FormData grabs everything at once using the input fields' name attributes.

Then, the new ingredient is obtained via the Formdata.get() function method, getting the name requested, in this case the input field. We then push this into the ingredient array, buuuuuut, it wont update the apge even though the array is updated*/

export default function Main() {

    //const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const [ingredients, setIngredients] = React.useState([])

    const [recipeShown, setRecipeShown] = React.useState(false)

    const ingredientsListItems = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })

    //we refactor now to do the React 19 imporvements for getting data and handling it
    function addIngredient(formData) {
        //event.preventDefault();
        const newIngredient = formData.get("ingredient")
        //console.log("Form submitted!");
        //const formData = new FormData(event.currentTarget)

        //console.log(newIngredient);
        //ingredients.push(newIngredient)

        setIngredients((prevIngredient) => {
            return [...prevIngredient, newIngredient];
        })
        console.log(ingredients);
        //before it was updating the local state on every change in every input field! now its waaaaay easier, before it was controlled components.
    }

    function showRecipe() {
        setRecipeShown((prevState) => {
            return !prevState
        })
    }

    return (
        <main className="main">
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <section className={ingredients.length > 0 ? "visible" : "hidden"}>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
                </ul>
                <div className= {ingredients.length > 3 ? "get-recipe-container visible" : "hidden"}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                    <button onClick={showRecipe}>Get a recipe</button>
                </div>
            </section>
    <section className={recipeShown ? "visible" : "hidden"}>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>
        </main>
    )
}

/* we will tackle 3 things:
    1. Cluttered Main component, needs cleanup
    2. Learning state to components, and props.
    3. There is no visual indication that the recipe is ready, that can be improved via autoscroll, or loading state
    4. Get the recipe from real API
*/