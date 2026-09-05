import React from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import { aiResponse } from "../ai.js";

//its best to put onSubmit on the form so it registers the form gracefully, and it handles both the button press and button submit

//preventDefault() prevents the page from refreshing after submitting a form, which is default HTML behavior

/*Explaining the addIngredient function
FormData is a built-in browser tool (a JavaScript object) that automatically gathers all the inputs from a HTML form so you can easily use or send the data.Instead of manually creating separate state variables for every single input field in your form, FormData grabs everything at once using the input fields' name attributes.

Then, the new ingredient is obtained via the Formdata.get() function method, getting the name requested, in this case the input field. We then push this into the ingredient array, buuuuuut, it wont update the apge even though the array is updated*/

export default function Main() {

    //const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const [ingredients, setIngredients] = React.useState([])

    const [recipeContent, setRecipeContent] = React.useState("")

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
        //console.log(ingredients);
        //before it was updating the local state on every change in every input field! now its waaaaay easier, before it was controlled components.
    }

    async function showRecipe() {

        try {
            //setting it to false just in case an ingredient is added
            setRecipeShown(recipeShown)

            //this waits for tha AI response and puts it in the variable
            const recipeContent = await aiResponse(ingredients)
            console.log(`recipeContent Component response: ${recipeContent}`);

            //sets it with the setter
            setRecipeContent(recipeContent)

            //show the recipe as true
            setRecipeShown(true)
        } catch (error) {
            console.error(`An error has ocurred. ${error}`)
            throw error
        }


    }

    const showingredientList = ingredients.length > 0 ? "visible" : "hidden"
    const showRecipeCTA = ingredients.length > 3 ? "get-recipe-container visible" : "hidden"
    const recipeShownCheck = recipeShown ? "visible" : " hidden"

    return (
        <main className="main">
            <IngredientsList
                actionFunction={addIngredient}
                IngredientsListCheck={showingredientList}
                ingredientsListItemsEnable={ingredientsListItems}
                recipeCTACheck={showRecipeCTA}
                recipeFunction={showRecipe}
            />
            <ClaudeRecipe
                recipeShownEnable={recipeShownCheck}
                recipeText={recipeContent}
            />
        </main>
    )
}

/* Lets see..... To get the recipe from the AI, I need to save it to a variable that will put it in the ClaudeRecipe component on the suggested-recipe-container, passing it as a prop. But, that will be done when the button is pressed, so I need to wire a function to that button that gets the recipe and puts it in the variable.... */

/* we will tackle 3 things:
    1. Cluttered Main component, needs cleanup
    2. Learning state to components, and props.
    3. There is no visual indication that the recipe is ready, that can be improved via autoscroll, or loading state
    4. Get the recipe from real API
*/