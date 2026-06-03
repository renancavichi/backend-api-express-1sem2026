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
        },
        select: {
            id: true,
            userId: true,
            token: true,
            createdAt: true,
            user: {
                select: {
                    name: true,
                    avatar: true,
                    email: true
                }
            }
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

export const deleteAllSessionsByUserId = async (userId) => {
    return await prisma.session.deleteMany({
        where: {
            userId
        }
    })
}