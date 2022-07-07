import express from 'express'
import {postCategory} from '../controllers/categoryController.js'

let router = express.Router()

/**
 * @swagger
 * /category:
 *  post:
 *      description: Add New Category
 *      parameters:
 *      - name : params
 *        in : body
 *        schema:
 *          type : object
 *          properties : 
 *            name : 
 *              type : string
 *      responses:
 *            200:
 *              description: Returns a mysterious string.
 */
router.post('/category', postCategory)

export default router