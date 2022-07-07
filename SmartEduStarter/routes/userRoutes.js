import express from 'express'
let router = express.Router()
import { createUser, deleteUser, getDashboardPage, logInUser, logOutUser } from '../controllers/userController.js'
import {blockLogOperations} from '../middlewares/authMiddlewares.js'
import { validate, ValidationError, Joi } from 'express-validation'
import roleAuthentication from '../middlewares/roleAuthentication.js'


/**
 * @swagger
 * /user/register:
 *  post:
 *      description : create new user
 *      parameters : 
 *          - name : params
 *            in : body
 *            schema :
 *              type : object
 *              properties : 
 *                  name : 
 *                      type : string
 *                  email:
 *                      type : string
 *                  password :
 *                      type : string
 *      responses:
 *          200:
 *              description : success
 *          400:  
 *              description : error
 *              
 */
router.post("/user/register", [blockLogOperations, validate({
    body: Joi.object({
        name : Joi.string().required(),
        email : Joi.string().email().required(),
        password : Joi.string().required(),
        role : Joi.number().greater(0).required()
    })
}, {}, {})],createUser)

router.post("/user/login", [blockLogOperations, validate({
    body: Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().required()
    })
}, {}, {})],logInUser)

router.get("/user/logout", logOutUser)

router.get("/user/dashboard", getDashboardPage)

router.delete('/user/:id', roleAuthentication(["admin"]), deleteUser)

export default router