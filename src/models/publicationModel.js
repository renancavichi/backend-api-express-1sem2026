import * as z from 'zod'
import {prisma} from '../helpers/dbConnection.js'
import { createValidator } from '../helpers/createValidator.js'

const publicationSchema = z.object({
    id: z.int("Id é obrigatório e deve ser um valor numérico")
      .positive("Id deve ser um valor numérico positivo"),
    title: z.string("Título deve ser uma string")
      .min(3, "Título deve ter no mínimo 3 caracteres")
      .max(200, "Título deve ter no máximo 200 caracteres"),
    description: z.string("Descrição deve ser uma string")
      .min(3, "Descrição deve ter no mínimo 3 caracteres")
      .max(10000, "Descrição deve ter no máximo 10000 caracteres"),
    author: z.string("Autor deve ser uma string")
      .min(3, "Autor deve ter no mínimo 3 caracteres")
      .max(255, "Autor deve ter no máximo 255 caracteres")
})

export const validatePublication = createValidator(publicationSchema)

export const createPublication = async (publication) => {
    return await prisma.publication.create({
        data: publication
    })
}

export const getPublications = async () => {
    return await prisma.publication.findMany()
}
  
export const deletePublication = async (id) => {
    return await prisma.publication.delete({
        where: {
            id
        }
    })
}

export const updatePublication = async (publication, id) => {
    return await prisma.publication.update({
        data: publication,
        where: {
            id
        }
    })
}
