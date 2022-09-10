import { PrismaClient } from "@prisma/client"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

const handler = async (req, res) => {
    if (req.method === "POST") {
        const session = await unstable_getServerSession(req, res, authOptions)
        if (session === null) {
            res.status(401).close()
        }
        const prisma = new PrismaClient()
        const recipeData = await prisma.recipe.create({
            data: {
                ...req.body,
                chefId: session.user.id
            }
        })
        await prisma.$disconnect()
        res.status(201).json(recipeData)
    }
}

export default handler
export const config = {
    api: {
        bodyParser: true
    }
}