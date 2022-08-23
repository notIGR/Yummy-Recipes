import { prisma } from '../../../server/db/client';

const handler = async (req, res) => {
    const breakfastRecipes = await prisma.recipe.findMany({
        where: {
            type: "breakfast"
        }
    })
    res.status(200).json(breakfastRecipes)
}

export default handler 
