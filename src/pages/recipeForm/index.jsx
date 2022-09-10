import { useState } from "react"


const RecipeForm = () => {

    const [title, setTitle] = useState("")
    const [mealType, setMealType] = useState("")
    const [ingredients,setIngredients] = useState([])
    const [instructions,setInstructions] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title:title,
            type:mealType,
            ingredients:ingredients,
            instructions:instructions
        }
        fetch("/api/recipes",{
            method: "POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))

    }


    const handleChangeMealType = (e) => {
        setMealType(e.target.value)
    }
    
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeInstructions = (e) => {
        setInstructions(e.target.value) 
    }


    const handleChangeIngredients = (e) => { 
        setIngredients(e.target.value.split(",").map((ingredient) => {
            return ingredient.trim()
        }))
    }

    return (
        <>
        <form className="text-center" action="" method="" onSubmit={handleSubmit}>
            <label htmlFor="title">
                Recipe Name:
            </label> 
            <br />
            <input type="text" id="title" name="title"value={title} onChange={handleChangeTitle} />
            <br />
            <label htmlFor="Breakfast">
                Breakfast
                </label>
            <input type="radio" id="Breakfast" value="breakfast" name="type" onChange={handleChangeMealType} /> 
            <br />
            <label htmlFor="Lunch">
                Lunch
             </label>
            <input type="radio" id="Lunch" value="lunch" name="type" onChange={handleChangeMealType} />
            <br />
            <label htmlFor="Dinner">
                Dinner
            </label>
            <input type="radio" id="Dinner" value="dinner" name="type" onChange={handleChangeMealType} />
            <br />
            <label htmlFor="ingredients">
                List Ingredients(seperate by commas)
            </label> 
            <br />
            <textarea type="text" name="ingredients" id="ingredients" onChange={handleChangeIngredients} />
             <br />
            <label htmlFor="instructions">
                Add Cooking Instructions
            </label> 
            <br />
            <textarea type="text" name="instructions" id="instructions" value={instructions} onChange={handleChangeInstructions} />
            <br />
            <button className="rounded bg-fuchsia-500" type="submit">
                Submit Recipe!
            </button>
        </form>
        </>

    )

}

export default RecipeForm