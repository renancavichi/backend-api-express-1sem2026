import express from 'express'
import { getPostsController } from '../controllers/post/getPostsController.js'
import { createPostsController } from '../controllers/post/createPostController.js'
import { updatePostsController } from '../controllers/post/updatePostController.js'
import { patchPostsController } from '../controllers/post/patchPostController.js'
import { deletePostsController } from '../controllers/post/deletePostController.js'

const router = express.Router()

router.get('/', getPostsController)
router.post('/', createPostsController)
router.put('/', updatePostsController)
router.patch('/', patchPostsController)
router.delete('/', deletePostsController)

export default router