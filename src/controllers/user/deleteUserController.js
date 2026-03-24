import { deleteUser } from "../../models/userModel.js";

export async function deleteUsersController(req, res){
    const id = req.params.id

    const result = await deleteUser(+id) // operador "+" para converter string para number

    return res.json({
        message: "Usuário deletado com sucesso!",
        user: result
    })
}