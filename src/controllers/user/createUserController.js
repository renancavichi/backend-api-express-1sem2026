import { createUser, validateUser  } from "../../models/userModel.js"

export async function createUsersController(req, res, next){
    try{
        const user = req.body

        const {success, error, data} = validateUser(user, {id: true})

        if(!success){
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: error
            })
        }

        const result = await createUser(data)
        
        return res.json({
            message: "Usuário criado com sucesso!",
            user: result
        })
    }catch(error) {
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