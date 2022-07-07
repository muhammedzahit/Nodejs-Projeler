import Category from "../models/Category.js"

export const postCategory = async (req, res) => {
    var isFound = await Category.findOne({name : req.body.name})
    if(isFound)
        return res.status(400).send("Bu isimde bir kategori zaten var.")
    var category = new Category({
        name : req.body.name
    })
    await category.save()
    return res.status(200).send(req.body.name + "isimli kategori kaydedildi")
}

export const getAllCategories = async (req,res) => {
    return Category.find({})
}