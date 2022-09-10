

const recipeForm = () => {

    return (
        <>
        <form className="text-center" action="" method="">
            <label htmlFor="title">Recipe Name:</label> <br />
            <input type="text" id="title" name="title" /><br />
            <label htmlFor="Breakfast">Breakfast</label>
            <input type="radio" id="Breakfast" value="breakfast" name="type" /> <br />
            <label htmlFor="Lunch">Lunch</label>
            <input type="radio" id="Lunch" value="lunch" name="type" /> <br />
            <label htmlFor="Dinner">Dinner</label>
            <input type="radio" id="Dinner" value="dinner" name="type" /> <br />
            <label htmlFor="ingredients">List Ingredients</label> <br />
            <textarea type="text" name="ingredients" id="ingredients" /> <br />
            <label htmlFor="instructions">Add Cooking Instructions</label> <br />
            <textarea type="text" name="instructions" id="instructions" /> <br />
            <button className="rounded bg-fuchsia-500">Submit Recipe!</button>
        </form>
        </>

    )

}

export default recipeForm