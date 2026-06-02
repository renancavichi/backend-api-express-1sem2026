import { updateUser, validateUser } from "../../models/userModel.js";
import bcrypt from "bcrypt";

export async function updateUsersController(req, res, next){
    try{
        const {id} = req.params
        const user = req.body
        user.id = +id
        
        if(req.userId !== user.id){
            return res.status(403).json({
                message: "Acesso negado. Você só pode atualizar seu próprio perfil."
            })
        }

        const {success, error, data: userValidated} = validateUser(user)
        if(!success){
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: error
            })
        }
        if(user.pass){
            userValidated.pass = await bcrypt.hash(user.pass, 10)
        }
        const result = await updateUser(userValidated, userValidated.id)
        return res.json({
            message: "Usuário atualizado com sucesso!",
            user: result
        })
    }catch(error) {
        if(error.code === 'P2025'){
            console.log(error.message)
            return res.status(404).json({
                message: `Usuário não encontrado para ser atualizado.`
            })
        }
        if(error.code === 'P2002' && error.message.includes("email")){
            console.log(error.message)
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: {
                    email: ["O email já está em uso por outro usuário."]
                }
            })
        }
        next(error)
    }
}