import { useEffect, useState } from "react"

const BreakfastList = () => {

    [Breakfast, setBreakfast] = useState();

    useEffect(async () => {
        const breakfastRecipes = await fetch('http://localhost:3000/api/breakfast');

        setBreakfast(breakfastRecipes);
    }, []);

    return (
        <>
            <h1> Breakfast Options </h1>
            <h2>something not too heavy...</h2>
            <div>
                {breakfast}
            </div>

        </>
    )
}

export default BreakfastList

