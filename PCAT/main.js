const express = require('express')
const app = express()
const fileUpload = require("express-fileupload")
const methodOverride = require('method-override')
const fs = require("fs")

// ejs settings
const ejs = require("ejs")
app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(fileUpload())
app.use(methodOverride('_method', {
  methods: ["POST", "GET"]
}))

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
    dbo.collection("photos").find({
      "_id": new ObjectId(req.params.id)
    }).toArray(function (err, result) {
      if (err) throw err;
      photo = result[0]
      resolve("cozuldu")
    });
  })

  promise.then(message => {
    console.log(photo)
    res.render("video-page", {
      photo: photo
    })
  })
})

app.post("/photos", async function (req, res) {
  console.log(req.files.image)

  let uploadPath = "uploads/" + req.files.image.name

  body_ = JSON.parse(JSON.stringify(req.body))
  body_.image = uploadPath

  // add image
  const promise = new Promise(function (resolve, reject) {
    let dbo = db.db("test-pca");
    dbo.collection("photos").insertOne(body_, function (err, res) {
      if (err) throw err;
      console.log("1 image inserted");
      resolve("OK")
    });
  })

  promise.then(message => {
    req.files.image.mv(__dirname + "/public/" + uploadPath)
    setTimeout(() => {
      res.redirect("/")
    }, 50);
    
  })

})

app.put("/photos/:id", (req, res) => {
  let photo
  const promise = new Promise(function (resolve, reject) {
    let dbo = db.db("test-pca");
    let query = {
      "_id": new ObjectId(req.params.id)
    }
    let newvalues = {
      $set: {
        title: req.body.title,
        description: req.body.description
      }
    };
    dbo.collection("photos").updateOne(query, newvalues, function (err, res) {
      if (err) throw err;
      resolve("cozuldu")
    });
  })

  promise.then(message => {
    console.log("edited")
    res.redirect(`/video-page.html/${req.params.id}`)
  })

})

app.get("/edit/:id", (req, res) => {
  let photo
  const promise = new Promise(function (resolve, reject) {
    let dbo = db.db("test-pca");
    dbo.collection("photos").find({
      "_id": new ObjectId(req.params.id)
    }).toArray(function (err, result) {
      if (err) throw err;
      photo = result[0]
      resolve("cozuldu")
    });
  })

  promise.then(message => {
    console.log(photo)
    res.render("edit", {
      photo: photo
    })
  })
})

app.delete("/delete/:id", (req, res) => {
  let photo_path
  const promise = new Promise(function (resolve, reject) {
    let dbo = db.db("test-pca");
    dbo.collection("photos").find({
      "_id": new ObjectId(req.params.id)
    }).toArray(function (err, result) {
      if (err) throw err;
      photo_path = result[0].image
      resolve("cozuldu")
    });
  })
  promise.then((m) => {
    return new Promise(function (resolve, reject) {
        let dbo = db.db("test-pca");
        dbo.collection("photos").deleteOne({
          _id: new ObjectId(req.params.id)
        }, function (err, obj) {
          if (err) throw err;
          resolve("silindi")
        });
      })
      .then((m) => {
        fs.unlinkSync(__dirname + "/public/" +photo_path)
        res.redirect("/")
      })

  })
})

app.listen(3000)