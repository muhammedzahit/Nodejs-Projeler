import express from 'express'
import { getCourses } from '../controllers/courseController.js'

import { getAboutPage, getContanctPage, getCoursesPageByCategory, getIndexPage, getLogInPage, getNewCoursePage, getRegisterPage, getUpdateCoursePage, postContanctPage } from '../controllers/pageController.js'
import {blockLogOperations} from '../middlewares/authMiddlewares.js'

let router = express.Router()



router.route('/').get(getIndexPage)
router.route('/index').get(getIndexPage)
router.route('/about').get(getAboutPage)
router.route('/register').get(blockLogOperations,getRegisterPage)
router.route('/login').get(blockLogOperations,getLogInPage)
router.route('/courses').get(getCourses , getCoursesPageByCategory)
router.route('/create_new_course').get(getNewCoursePage)
router.route('/contact').get(getContanctPage)
router.route('/contact').post(postContanctPage)
router.route('/update/:id').get(getUpdateCoursePage)

export default router