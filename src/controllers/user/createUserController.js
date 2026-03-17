import { createUser } from "../../models/userModel.js"

export async function createUsersController(req, res){

    const user = req.body

    const result = await createUser(user)

    res.json({
        message: "Usuário criado com sucesso!",
        user: result
    })
}