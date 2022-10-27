import { type } from "os"
import { title } from "process"
import { Key, ReactElement, JSXElementConstructor, ReactFragment } from "react"

const Recipe = ({ title: string, type: string, ingredients: string, instructions: string }) => {
    return(
        <section className="flex flex-col bg-blue-500 my-2 text-whit p-4
        ">
            <h2> {title} </h2>
            <h2> {type} </h2>
            <ul>
            {ingredients.map((item: boolean | Key | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined) => {
                return (
                    <li key={item}>{ item }</li>
                )
            })}
            </ul>
            <h2> {instructions} </h2>
        </section>
    )
}

export default Recipe