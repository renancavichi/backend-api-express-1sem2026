import { prisma } from '../helpers/dbConnection.js'

export const createSession = async (userId, token) => {
    return await prisma.session.create({
        data: {
            userId,
            token
        }
    })   
}

export const getSessionByToken = async (token, userId) => {
    return await prisma.session.findUnique({
        where: {
            token,
            userId
        }
    })
}

export const deleteSession = async (token, userId) => {
    return await prisma.session.delete({
        where: {
            token,
            userId
        }
    })
}      