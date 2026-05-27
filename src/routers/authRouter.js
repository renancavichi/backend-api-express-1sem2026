import express from 'express'
import { loginController } from '../controllers/auth/loginController.js'
import { logoutController } from '../controllers/auth/logoutController.js'
import { refreshController } from '../controllers/auth/refreshController.js'

const router = express.Router()

router.post('/login', loginController)
router.post('/logout', logoutController)
router.post('/refresh', refreshController)

export default router