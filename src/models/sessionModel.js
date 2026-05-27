import { prisma } from '../helpers/dbConnection.js'

export const createSession = async (userId, token) => {
    return await prisma.session.create({
        data: {
            userId,
            token
        }
    })   
}