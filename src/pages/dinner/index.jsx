import { useQuery } from "@tanstack/react-query"
import Recipe from "../../components/recipe";
import RecipeWithLink from "../../components/recipe-with-link"


const DinnerList = () => {
    const { isLoading, error, data } = useQuery(['allDinner'], () =>
        fetch('/api/dinner').then(res =>
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

console.log(data)
    return (
        <>
            <h1> Dinner Recipe List </h1>
            { 
                data.map((recipe) => {
                    return (
                        <RecipeWithLink id={recipe.id} key={recipe.id}>
                            <Recipe
                                key={recipe.id}
                                title={recipe.title}
                                type={recipe.type}
                                ingredients={recipe.ingredients}
                                instructions={recipe.instructions}
                            />
                        </RecipeWithLink>
                    )
                }
                )
            }
        </>
    )
}

export default DinnerList
