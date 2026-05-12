import { updateUser, validateUser } from "../../models/userModel.js";

export async function updateAvatarUsersController(req, res, next){
    try{
        const {id} = req.params
        const user = req.body
    
        const {success, error, data} = validateUser({id: +id, avatar: user.avatar}, {name: true, pass: true, email: true})

        if(!success){
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: error
            })
        }

        const result = await updateUser(data, data.id)
    
        return res.json({
            message: "Avatar atualizado com sucesso!",
            user: result
        })
    }catch(error) {
        if(error.code === 'P2025'){
            console.log(error.message)
            return res.status(404).json({
                message: `Usuário não encontrado para ser atualizado.`
            })
        }
        next(error)
    }
}