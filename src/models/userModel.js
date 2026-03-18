import {prisma} from '../helpers/dbConnection.js';

// const user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     pass: 'securepassword',
//     avatar: 'https://example.com/avatar.jpg',
// }

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

export const getUsers = async () => {
    return await prisma.user.findMany()
}
  
