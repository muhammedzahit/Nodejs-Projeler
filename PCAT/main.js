const express = require('express')
const app = express()
 
app.use(express.static("public"))

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/temp/index.html")
})
 
app.listen(3000)