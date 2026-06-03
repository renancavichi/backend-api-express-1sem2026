import { deleteAllSessionsByUserId } from "../../models/sessionModel.js"

export const closeSessionsController = async (req, res, next) => {
    const userId = req.userId

    try {
        await deleteAllSessionsByUserId(userId)
        res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'None', secure: true })
        return res.status(200).json({
            message: "Todas as sessões foram encerradas com sucesso. Faça o login novamente!"
        })
    }catch(error) {
        next(error)
    }
}