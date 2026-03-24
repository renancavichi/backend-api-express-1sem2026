import { updateUser } from "../../models/userModel.js";

export async function updateUsersController(req, res){
    const {id} = req.params
    const user = req.body

    const result = await updateUser(user, +id)

    return res.json({
        message: "Usuário atualizado com sucesso!",
        user: result
    })
}