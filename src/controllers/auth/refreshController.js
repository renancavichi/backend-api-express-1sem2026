import { getSessionByToken } from "../../models/sessionModel.js";
import jwt from "jsonwebtoken"

export async function refreshController(req, res, next){
    try{
        const token = req.cookies.refreshToken || req.body.refreshToken
        if(!token){
            return res.status(400).json({
                message: "RefreshToken não fornecido."
            })
        }
        const userId = req.body.userId
        if(!userId){
            return res.status(400).json({
                message: "userId não fornecido."
            })
        }

        const session = await getSessionByToken(token, userId)

        if(!session){
            return res.status(401).json({
                message: "Sessão inválida. Faça login novamente."
            })
        }

        const accessToken = jwt.sign({id: session.userId}, process.env.JWT_SECRET, {expiresIn: "15m"})
        const refreshToken = token
        res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 6 * 30 * 24 * 60 * 60 * 1000 })
        return res.json({
            message: "Resfresh realizado com sucesso!",
            user: {
                id: session.userId,
                name: session.user.name,
                avatar: session.user.avatar,
                email: session.user.email
            },
            accessToken
        })


    }catch(error) {

        next(error)
    }
}