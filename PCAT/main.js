const express = require('express')
const app = express()

app.use(express.static("public"))


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



app.listen(3000)