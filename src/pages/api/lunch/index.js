import { prisma } from '../../../server/db/client';

const handler = async (req, res) => {
    const lunchRecipes = await prisma.recipe.findMany({
        where: {
            type: "lunch"
        }
    })
    res.status(200).json(lunchRecipes)
}

export default handler 