import User from "../models/User.js"
import Category from '../models/Category.js'
import bcrypt from 'bcrypt'
import session from "express-session"
import {rolesEnumReversed} from "../enums/rolesEnum.js"
import Course from "../models/Course.js"

export const createUser = async (req, res) => {
    try {
        // console.log(req.body)
        let user = new User({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role,
            enrolled_courses : []
        })
        await user.save()
        res.status(200).redirect('/login')
    } catch (error) {
        console.log(error)
    }
    
}

export const logInUser = async (req,res) => {

    let user = await User.findOne({email : req.body.email})
    if(!user){
        req.flash('error', "Bu email'e sahip bir kullanıcı bulunamadı")
        return res.status(400).redirect("/login")
    }
        
    bcrypt.compare(req.body.password, user.password, (err,same)=>{
        if(same == true){
            req.session.userId = user._id
            return res.status(200).redirect("/")
            
        }  
        req.flash('error', "Girdiğiniz bilgiler uyuşmuyor !")
        return res.status(400).redirect("/login")
    })
    return res.status(400)
      
}

export const logOutUser = async (req,res) => {
    req.session.userId = null
    res.status(200).redirect('/')
}

export const getDashboardPage = async (req,res) => {
    if(!userId)
        res.status(400).redirect('/login')
    const user = await User.findOne({_id : userId}).populate('enrolled_courses')
    console.log(user)
    const categories = await Category.find({})
    const teacher_courses = await Course.find({teacher : userId})
    let role = rolesEnumReversed[user.role]
    let userList = null
    console.log("iiii")

    if(role === 'admin'){
        userList = await User.find({})
    }
    return res.status(200).render('dashboard', {
        pageName : "dashboard",
        user : user,
        role : role,
        categories : categories,
        teacher_courses : teacher_courses,
        userList : userList,
        rolesEnumReversed : rolesEnumReversed
    })
}

export const deleteUser = async (req, res) => {
    let user = await User.findByIdAndDelete({_id : req.params.id})
    await Course.deleteMany({teacher : req.params.id})
    req.flash('success',  user.name  +' başarıyla silindi')
    res.status(200).redirect('/user/dashboard')
}