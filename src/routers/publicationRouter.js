import express from 'express'
import { getPubliController } from '../controllers/publication/getPubliController.js'
import { createPubliController } from '../controllers/publication/createPubliController.js'
import { updatePubliController } from '../controllers/publication/updatePubliController.js'
import { patchPubliController } from '../controllers/publication/patchPubliController.js'
import { deletePubliController } from '../controllers/publication/deletePubliController.js'

const router = express.Router()

router.get('/', getPubliController)
router.post('/', createPubliController)
router.put('/', updatePubliController)
router.patch('/', patchPubliController)
router.delete('/', deletePubliController)

export default router