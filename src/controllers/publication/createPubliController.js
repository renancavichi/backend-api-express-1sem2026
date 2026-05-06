import { createPublication, validatePublication  } from "../../models/publicationModel.js"

export async function createPubliController(req, res){
    const publication = req.body

    const {success, error, data} = validatePublication(publication, {id: true})

    if(!success){
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        })
    }

    const result = await createPublication(data)

    res.json({
        message: "Publicação criada com sucesso!",
        publication: result
    })
}