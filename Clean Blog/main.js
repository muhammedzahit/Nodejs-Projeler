const express = require('express')
const app = express()

app.use(express.static("public"))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.get('/about.html', function (req, res) {
    res.sendFile(__dirname + "/views/about.html")
})

app.get('/blog_post.html', function (req, res) {
    res.sendFile(__dirname + "/views/blog_post.html")
})

app.get('/contact.html', function (req, res) {
    res.sendFile(__dirname + "/views/contact.html")
})

app.get('/portfolio.html', function (req, res) {
    res.sendFile(__dirname + "/views/portfolio.html")
})

app.listen(3000)