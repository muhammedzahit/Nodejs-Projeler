import mongoose from "mongoose"
import { rolesEnumReversed } from "../enums/rolesEnum.js"
import Category from "../models/Category.js"
import Course from "../models/Course.js"
import User from "../models/User.js"

export const postNewCourse = async (req, res) => {
    try {
        var category = await Category.findOne({name : req.body.category})
        if(!category)
            return res.status(400).send("Girdiğiniz isimde kategori bulunamadi")
        let options = {
            title : req.body.title,
            description : req.body.description,
            category : category._id,
            teacher : userId
        }
        if(req.body.date)
            options['date'] = req.body.date
        
        // console.log(options)
        
        var course = new Course(options)
        await course.save()
    } catch (error) {
        console.log("ERROR : ",error)
        res.status(400).send(error)
    }
    res.status(200).redirect('/user/dashboard')
}

export const getAllCourses = async (req, res) => {
    try {
        var courses = await Course.find({})
        res.status(200).send(courses)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getCourses = async (req, res, next) => {
    try {
        let filter = {}
        // console.log(req.query.search)
        if(req.query.categoryName){
            var category = await Category.findOne({name : req.query.categoryName})
            if(!category)
                return res.status(400).send('Girdiğiniz kategori veritabanında bulunamadı')
            filter.category = category._id
        }
        
        if(req.query.search){
            filter.title = { $regex : ".*" + req.query.search + ".*", $options : 'i' }
        }
        
        var courses = await Course.find(filter)
        req.courses = courses
        next()
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getCourseById = async(req,res,next) => {
    try {
        var course = await Course.findById(req.params.id).populate('teacher')
        if(!course)
            return res.status(200).send("KURS BULUNAMADI")
        req.course = course
        next()
    } catch (error) {
        console.log("ERROR:", error)
        res.status(400).send(error)
    }
}

export const viewCourse = async (req,res) => {
    var course = req.course
    let user = null
    let role = null
    if(userId)
        user = await User.findOne({_id : userId})
    if(user)
        role = rolesEnumReversed[user.role]
    
    

    return res.render('course-single', {
        pageName : 'course-single',
        course : course,
        teacher : course.teacher,
        user : user,
        role : role
    })
}

export const enrollToCourse = async (req,res) => {
    let user = await User.findOne({_id : userId}).populate('enrolled_courses')
    
    user.enrolled_courses.forEach((e) => {
        if(e._id == req.body.course_id)
            return res.status(200).redirect('/user/dashboard')
    })

    user.enrolled_courses.push(req.body.course_id)
    await user.save()
    return res.status(200).redirect('/user/dashboard')

}

export const leaveCourse = async (req,res) => {
    let user = await User.findOne({_id : userId}).populate('enrolled_courses')
    
    for(let i=0; i<user.enrolled_courses.length; i++){
        if(user.enrolled_courses[i]._id == req.body.course_id){
            user.enrolled_courses.pop(i)
            break
        }
    }
    await user.save()
    return res.status(200).redirect('/user/dashboard')
}

export const deleteCourse = async (req,res) => {
    
    try {   
        let course = await Course.findOne({_id : req.query.course_id})
        if(!course){
            req.flash('error', 'Will Be Deleted ID not found')
            return res.status(400).redirect('/user/dashboard')
        }
        let successMessage = course.title + " is successfully deleted"
        await Course.findOneAndDelete({_id : req.query.course_id})
        req.flash('success', successMessage)
        return res.status(200).redirect('/user/dashboard')

    } catch (error) {
        req.flash('error', error.message)
        return res.status(400).redirect('/user/dashboard')
    }
    
}

export const updateCourse = async (req,res) => {

    try {   
        let doc = await Course.findOneAndUpdate({_id : req.params.id}, req.body)

        req.flash('error', "Course info updated")
        return res.status(200).redirect('/user/dashboard')

    } catch (error) {
        req.flash('error', error.message)
        return res.status(400).redirect('/user/dashboard')
    }
}







