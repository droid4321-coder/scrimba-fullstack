import React from "react";

//its best to put onSubmit on the form so it registers the form gracefully, and it handles both the button press and button submit

//preventDefault() prevents the page from refreshing after submitting a form, which is default HTML behavior

/*Explaining the handleSubmit function
FormData is a built-in browser tool (a JavaScript object) that automatically gathers all the inputs from a HTML form so you can easily use or send the data.Instead of manually creating separate state variables for every single input field in your form, FormData grabs everything at once using the input fields' name attributes.

Then, the new ingredient is obtained via the Formdata.get() function method, getting the name requested, in this case the input field. We then push this into the ingredient array, buuuuuut, it wont update the apge even though the array is updated*/

export default function Main() {

    //const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted!");
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        //console.log(newIngredient);
        //ingredients.push(newIngredient)
        //console.log(ingredients);

        setIngredients((prevIngredient) => {
            return [...prevIngredient, newIngredient];
        })
    }

    return (
        <main className="main">
            <form action="" className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button className="form-button" type="submit"> + Add ingredient</button>
            </form>
            <ul className="ingredients-list">
                {ingredientsListItems}
            </ul>
        </main>
    )
}