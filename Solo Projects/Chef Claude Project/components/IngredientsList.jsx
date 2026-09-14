export default function IngredientsList(props) {
    
    //props.actionFunction = addIngredient
    //props.ingredientListCheck = showIngredientList
    //props.ingredientsListItemsEnable = ingredientsListItems
    //props.recipeCTACheck = showRecipeCTA
    //props.recipeFunction = showRecipe
    
    return (
        <>
            <form action={props.actionFunction} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <section className={props.ingredientListCheck}>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {props.ingredientsListItemsEnable}
                </ul>
                <div className={props.recipeCTACheck} ref={props.ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                    <button onClick={props.recipeFunction}>Get a recipe</button>
                </div>
            </section>
        </>
    )
}