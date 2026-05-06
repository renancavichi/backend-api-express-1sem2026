import { getPublications } from "../../models/publicationModel.js"

export async function getPubliController(req, res){

    const result = await getPublications()

    res.json({
        message: "Publicações listadas com sucesso", 
        publications: result
    })
}

