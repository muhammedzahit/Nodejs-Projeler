import express from 'express'
import {postNewCourse, getCourses, getCourseById, viewCourse, getAllCourses, enrollToCourse, leaveCourse, deleteCourse, updateCourse} from '../controllers/courseController.js'
import roleAuthentication from '../middlewares/roleAuthentication.js'
import { validate, ValidationError, Joi } from 'express-validation'

let router = express.Router()

/**
 * @swagger
 * /course:
 *   post:
 *     description: Get All Course Info
 *     parameters:
 *      - name : params
 *        in : body
 *        schema : 
 *          type : object
 *          properties : 
 *              title : 
 *                  type : string
 *              description:
 *                  type : string
 *              date : 
 *                  type : string
 *              category:
 *                  type : string
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post('/course', roleAuthentication(["teacher", "admin"]),postNewCourse)


/**
 * @swagger
 * /course/all:
 *   get:
 *     description: Get All Course Info
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */ 
router.get('/course/all', getAllCourses)

/**
 * @swagger
 * /course?categoryName:
 *   get:
 *     description: Get Course Info By CategoryName and SearchQuery
 *     parameters : 
 *       - name : categoryName
 *         in : query
 *       - name : search
 *         in : query
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */ 
 router.get('/course', getCourses)


/**
 * @swagger
 * /course/{id}:
 *   get:
 *     description: Get Course By ID
 *     parameters:
 *     - in: path
 *       name: id   # Note the name is the same as in the path
 *       required: true
 *       type: integer
 *       minimum: 1
 *       description: The user ID.
 *       
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */ 
router.get('/courses/:id', getCourseById, viewCourse)

router.post('/courses/enroll', roleAuthentication(["student"]), enrollToCourse)
router.post('/courses/leave', roleAuthentication(["student"]), leaveCourse)
router.delete('/courses/delete', roleAuthentication(["teacher"]), deleteCourse)
router.put('/courses/:id', [roleAuthentication(["teacher", "admin"]), validate({
    body: Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        category : Joi.string().required(),
        date : Joi.string().required()
    })
}, {}, {})], updateCourse)

export default router
