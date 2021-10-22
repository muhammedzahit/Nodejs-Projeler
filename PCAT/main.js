const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// connect to database
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://admin:uzunburunmurat@cluster0.suejd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let db;

// Initialize connection once
MongoClient.connect(url, function (err, database) {
  if (err) throw err;

  db = database;
  console.log("database connected")
});

function addImage(data){
    let dbo = db.db("test-pca");
    dbo.collection("photos").insertOne(data, function(err, res) {
      if (err) throw err;
      console.log("1 image inserted");
    });
}

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/view/index.html")
})

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/view/index.html")
})

app.get("/about.html", function (req, res) {
  res.sendFile(__dirname + "/view/about.html")
})

app.get("/contact.html", function (req, res) {
  res.sendFile(__dirname + "/view/contact.html")
})

app.get("/video-page.html", function (req, res) {
  res.sendFile(__dirname + "/view/video-page.html")
})

app.post("/photos", async function (req, res) {
  console.log(req.body)
  await addImage(req.body)
  res.redirect("/")
})



app.listen(3000)