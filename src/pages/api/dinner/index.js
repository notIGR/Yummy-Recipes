import { prisma } from '../../../server/db/client';

const handler = async (req, res) => {
    const dinnerRecipes = await prisma.recipe.findMany({
        where: {
            type: "dinner"
        }
    })
    res.status(200).json(dinnerRecipes)
}

export default handler 