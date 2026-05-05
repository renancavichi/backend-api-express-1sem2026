import { createUser, validateUser  } from "../../models/userModel.js"

export async function createUsersController(req, res){
    const user = req.body

    const {success, error, data} = validateUser(user, {id: true})

    if(!success){
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error
        })
    }

    const result = await createUser(data)

    res.json({
        message: "Usuário criado com sucesso!",
        user: result
    })
}