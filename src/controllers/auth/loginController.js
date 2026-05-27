import { validateUser, getUserByEmail  } from "../../models/userModel.js"
import { createSession } from "../../models/sessionModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { v4 as uuidv4 } from 'uuid'

export async function loginController(req, res, next){
    try{
        const { email, pass } = req.body

        const {success, error, data} = validateUser({email, pass}, {id: true, name: true, avatar: true})

        if(!success){
            return res.status(401).json({
                message: "Email ou senha inválidos",
            })
        }

        console.log(data)

        const user = await getUserByEmail(data.email)
        if(!user){
            return res.status(401).json({
                message: "Email ou senha inválidos",
            })
        }
        const isValidPass = await bcrypt.compare(data.pass, user.pass)

        if(!isValidPass){
            return res.status(401).json({
                message: "Email ou senha inválidos",
            })
        }

        const accessToken = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: "15m"})
        const refreshToken = uuidv4()

        const session = await createSession(user.id, refreshToken)
        if(!session){
            return res.status(500).json({
                message: "Erro ao criar sessão. Por favor tente novamente mais tarde."
            })
        }
       
        res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 6 * 30 * 24 * 60 * 60 * 1000 })
        return res.json({
            message: "Login realizado com sucesso!",
            user: {
                id: user.id,
                name: user.name,
                avatar: user.avatar,
                email: user.email
            },
            accessToken,
            refreshToken
        })
    } catch(error) {

        next(error)
    }
}