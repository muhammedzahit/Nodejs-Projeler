const express = require('express')
const app = express()

// ejs settings
const ejs = require("ejs")
app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// connect to database
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://admin:uzunburunmurat@cluster0.suejd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let db;
let ObjectId = require('mongodb').ObjectId; 
// Initialize connection once
MongoClient.connect(url, function (err, database) {
  if (err) throw err;

  db = database;
  console.log("database connected")
});

function addImage(data) {

}

app.get("/", function (req, res) {
  let photos

  // find all images
  const promise = new Promise(function (resolve, reject) {
    let dbo = db.db("test-pca");
    dbo.collection("photos").find({}).toArray(function (err, result) {
      if (err) throw err;
      photos = result
      resolve("cozuldu")
    });
  })

  promise.then(message => {
    res.render("index", {
      photos: photos
    })
  })
})

app.get("/index.html", function (req, res) {
  res.redirect("/")
})

app.get("/about.html", function (req, res) {
  res.render("about")
})

app.get("/contact.html", function (req, res) {
  res.render("contact")
})

app.get("/video-page.html/:id", function (req, res) {
  let photo
  const promise = new Promise(function (resolve, reject) {
    let dbo = db.db("test-pca");
    dbo.collection("photos").find({"_id" : new ObjectId(req.params.id)}).toArray(function (err, result) {
      if (err) throw err;
      photo = result[0]
      resolve("cozuldu")
    });
  })

  promise.then(message => {
    res.render("video-page", {
      photo: photo
    })
  })
})

app.post("/photos", async function (req, res) {

  // add image
  const promise = new Promise(function (resolve, reject) {
    let dbo = db.db("test-pca");
    dbo.collection("photos").insertOne(req.body, function (err, res) {
      if (err) throw err;
      console.log("1 image inserted");
      resolve("OK")
    });
  })

  promise.then(message => {
    res.redirect("/")
  })
  
})



app.listen(3000)