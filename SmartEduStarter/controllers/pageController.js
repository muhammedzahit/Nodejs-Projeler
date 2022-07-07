import Category from '../models/Category.js'
import Course from '../models/Course.js'
import roles from '../enums/rolesEnum.js'

export const getIndexPage = (req,res) => {
    res.status(200).render('index', {
        pageName : 'index'
    })
}

export const getAboutPage = (req,res) => {
    res.status(200).render('index', {
        pageName : 'about'
    })
}

export const getRegisterPage = (req,res) => {
    res.status(200).render('register', {
        pageName : 'register',
        roles : roles
    })
}

export const getLogInPage = (req,res) => {
    res.status(200).render('login', {
        pageName : "login"
    })
}

export const getContanctPage = (req,res) => {
    res.status(200).render('contact', {
        pageName : "contact"
    })
}

export const postContanctPage = (req,res) => {
    req.flash('success', "mailiniz başarıyla gönderildi.")
    res.redirect('contact')
}

export const getCoursesPageByCategory = async(req,res) => {
    var categories = await Category.find({})
    var category = null
    if(req.query.categoryName)
        category = await Category.findOne({name : req.query.categoryName})
    if(req.query.categoryName && !category)
        return res.status(400).send("Bu kategori veritabanında bulunmuyor")


    let renderOptions = {
        pageName : 'courses',   
        courses : req.courses,
        categories : categories
    }

    renderOptions["currentCategory"] = category ? category.name : ""
    
    return res.status(200).render('courses',renderOptions)
} 

export const getNewCoursePage = (req, res) => {
    res.status(200).render('create_new_course',
    {pageName : "createNewCourse"})
}

export const getUpdateCoursePage = async (req,res) => {
    let course = await Course.findOne({_id : req.params.id}).populate('category')
    let categories = await Category.find({})
    if(!course)
        return res.status(400).send("Kurs ID Bulunamadı")
    return res.status(200).render('../views/update.ejs', {
        pageName : "updateCourse",
        course : course,
        categories : categories
    })
}