import Link from "next/link"

const RecipeWithLink = ({ children, id }) => {
    return (
        <Link 
            href={`/recipes/${id}`}
            key={id}
            passHref
        >
           <a>
            { children }
            </a>
        </Link>
    )
}

export default RecipeWithLink