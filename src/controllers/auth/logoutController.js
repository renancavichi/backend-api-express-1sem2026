import { deleteSession } from "../../models/sessionModel.js"

export async function logoutController(req, res, next){
    try{
        const token = req.cookies.refreshToken || req.body.refreshToken
        const userId = req.body.userId

        if(!token){
            return res.status(400).json({
                message: "RefreshToken não fornecido."
            })
        }
        
        await deleteSession(token, userId)

        res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'None', secure: true })

        return res.status(200).json({
            message: "Sessão encerrada com sucesso."
        })

    }catch(error) {
        next(error)
    }
}