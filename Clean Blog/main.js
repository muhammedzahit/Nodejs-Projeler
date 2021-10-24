const express = require('express')
const app = express()
const fileUpload = require("express-fileupload")
const methodOverride = require('method-override')
const fs = require("fs")
const actionController = require("./controllers/actionController")

// ejs settings
const ejs = require("ejs")
app.set("view engine", "ejs")

// database connection
let MongoClient = require('mongodb').MongoClient;
const { restart } = require('nodemon');
const ObjectIdd =  require("mongodb").ObjectId
let url = "mongodb+srv://admin:uzunburunmurat@cluster0.suejd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let db;
// Initialize connection once

app.use(express.static("public"))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(fileUpload())
app.use(methodOverride('_method', {
  methods: ["POST", "GET"]
}))

app.get('/', function (req, res) {
    let texts
    const promise = new Promise(function (resolve, reject) {
        if (typeof db === "undefined") {
            MongoClient.connect(url, function (err, database) {
                if (err) throw err;
                db = database;
                console.log("database connected")
                resolve("cozuldu1")
            });
        } else {
            resolve("cozuldu2")
        }
    }).then(message => {
        return new Promise((resolve, reject) => {
            let dbo = db.db("test-blog");

            dbo.collection("texts").find({}).toArray(function (err, result) {
                if (err) throw err;
                texts = result
                resolve("a")
            });
        })
    }).then(message => {



        res.render("index", {
            texts: texts,
        })
    })

})

app.get('/index.html', function (req, res) {
    res.redirect("/")
})

app.get('/about.html', function (req, res) {
    res.render("about")
})

app.get('/contact.html', function (req, res) {
    res.render("contact")
})

app.get("/blog_post/:id", function (req, res) {  
    console.log(req.params.id)
    let result_
    const promise = new Promise(function (resolve, reject) {
        let dbo = db.db("test-blog");
        console.log("i", req.originalUrl)
        dbo.collection("texts").find({"_id" : ObjectIdd(req.params.id)}).toArray(function (err, result) {
            if (err){

            }
            result_ = result[0]
            resolve("cozuldu")
        });
    })
    promise.then(message => {
        console.log("text"  ,result_)
        res.render("blog_post", {
            text: result_
        })
    })
})

app.get('/portfolio.html', function (req, res) {
    res.render("portfolio")
})

app.post("/new_story", function (req, res) {
    let upload_path = "uploads/" + req.files.image.name
    const promise = new Promise((resolve, reject) => {
        let dbo = db.db("test-blog");
        dbo.collection("texts").insertOne({
            "title" : req.body.title,
            "text" : req.body.text,
            "image" : upload_path
        }, function (err, res) {
            if (err) throw err;
            console.log("1 text inserted");
            resolve("OK")
        });
    })
    promise.then(async message => {
        await req.files.image.mv(__dirname + "/public/" + upload_path)
        res.redirect("/")
    })

})

app.get("/edit/:id", actionController.getEdit)
app.put("/edit/:id", actionController.putEdit)
app.delete("/delete/:id", actionController.deleteImage)

app.listen(3000)