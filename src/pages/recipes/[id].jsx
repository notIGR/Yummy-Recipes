import { PrismaClient } from "@prisma/client"


export const getServerSideProps = async ({params}) => {
    const { id } = params
    const prisma = new PrismaClient() 

    console.log(id)
    const recipe = await prisma.recipe.findUnique({
        where:{
            id: id
        }
    })

    await prisma.$disconnect()
    if (recipe === null) {
        return {
            props: {
                recipe
            },
            notFound: true
        }
    }

    return {
        props: {
            recipe
        }
    }
}

const RecipeById = ({ recipe }) => {
    return (
        <main> 
            <pre>{recipe && JSON.stringify(recipe,undefined,2)}</pre>
        </main>
    )
}

export default RecipeById