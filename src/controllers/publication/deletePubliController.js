import { deletePublication, validatePublication } from "../../models/publicationModel.js";

export async function deletePubliController(req, res){
    const id = req.params.id

    const {success, error, data} = validatePublication({id: +id}, {title: true, description: true, author: true})

    if(!success){
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        })
    }

    const result = await deletePublication(data.id) 

    return res.json({
        message: "Publicação deletada com sucesso!",
        publication: result
    })
}