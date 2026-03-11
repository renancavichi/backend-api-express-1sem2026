import {prisma} from '../helpers/dbConnection.js';

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}
  
