const express = require('express')
const app = express()

// ejs settings
const ejs = require("ejs")
app.set("view engine", "ejs")

// database connection
let MongoClient = require('mongodb').MongoClient;
const { restart } = require('nodemon');
let url = "mongodb+srv://admin:uzunburunmurat@cluster0.suejd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let db;
// Initialize connection once

app.use(express.static("public"))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

let TEXT

app.get('/', function (req, res) {
    let texts
    let link
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
                link = []
                for (let i = 0; i < result.length; i++) {
                    link.push("blog_post_" + String(i))
                }
                resolve("a")
            });
        })
    }).then(message => {



        res.render("index", {
            texts: texts,
            link: link
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

app.get("/blog_post_*", function (req, res) {  
    
    let index = req.originalUrl.charAt(req.originalUrl.length - 1)
    console.log(isNaN(index), index)
    const promise = new Promise(function (resolve, reject) {
        if(isNaN(index)){
            reject("database baglanma")
        }
        let dbo = db.db("test-blog");
        console.log("i", req.originalUrl)
        dbo.collection("texts").find({}).toArray(function (err, result) {
            if (err) throw err;
            TEXT = result
            console.log(TEXT)
            resolve("cozuldu")
        });
    })
    promise.then(message => {
        index = Number(index)
        console.log("text"  ,TEXT[Number(index)])
        res.render("blog_post", {
            text: TEXT[index]
        })
    })
})

app.get('/portfolio.html', function (req, res) {
    res.render("portfolio")
})

app.post("/new_story", function (req, res) {
    const promise = new Promise((resolve, reject) => {
        let dbo = db.db("test-blog");
        dbo.collection("texts").insertOne(req.body, function (err, res) {
            if (err) throw err;
            console.log("1 text inserted");
            resolve("OK")
        });
    })
    promise.then(message => {
        res.redirect("/")
    })

})

app.listen(3000)