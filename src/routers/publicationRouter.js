import express from 'express'
import { getPubliController } from '../controllers/publication/getPubliController.js'
import { createPubliController } from '../controllers/publication/createPubliController.js'
import { updatePubliController } from '../controllers/publication/updatePubliController.js'
import { patchPubliTitleController } from '../controllers/publication/patchPubliTitleController.js'
import { deletePubliController } from '../controllers/publication/deletePubliController.js'

const router = express.Router()

router.get('/', getPubliController)
router.post('/', createPubliController)
router.put('/:id', updatePubliController)
router.patch('/title/:id', patchPubliTitleController)
router.delete('/:id', deletePubliController)

export default router