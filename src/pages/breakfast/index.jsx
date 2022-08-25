import { useQuery } from "@tanstack/react-query"
import { Recipe } from "../recipes/[id]";

const BreakfastList = () => {
    const { isLoading, error, data } = useQuery(['allBreakfast'], () =>
        fetch('/api/breakfast').then(res =>
            res.json()
        )
    );

    if (isLoading) {
        return (
            <h1>Loading....</h1>
        )
    }

    if (error) {
        return (
            <h1>{JSON.stringify(error, undefined, 2)}</h1>
        )
    }


    return (
        <>
            <h1> Breakfast Recipe List </h1>
            {
                data.map((recipe) => {
                    return (
                        <Recipe
                            key={recipe.id}
                            title={recipe.title}
                            type={recipe.type}
                            ingredients={recipe.ingredients}
                            instructions={recipe.instructions}
                        />
                    )
                }
                )
            }
        </>
    )
}

export default BreakfastList

