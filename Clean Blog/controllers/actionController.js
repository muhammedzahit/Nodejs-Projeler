let MongoClient = require('mongodb').MongoClient;
const { restart } = require('nodemon');
const ObjectId = require("mongodb").ObjectId
let url = "mongodb+srv://admin:uzunburunmurat@cluster0.suejd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let db;

controlConnection()
let hex = /[0-9A-Fa-f]{6}/g;
function controlHex_(id){
    
    let id2 = (hex.test(id))? ObjectId(id) : id;
    return id2
}

exports.controlHex = (id) => {
    return controlHex_(id)
}

function controlConnection(){
    if (typeof db === "undefined") {
        MongoClient.connect(url, function (err, database) {
            if (err) throw err;
            db = database;
            console.log("database connected")
        });
    }
}

exports.getEdit = async (req, res) => {
    controlConnection()
    let result_
    const promise = new Promise(function (resolve, reject) {
        let dbo = db.db("test-blog");
        id = (hex.test(req.params.id))? ObjectId(req.params.id) : id;
        dbo.collection("texts").find({"_id" : ObjectId(id)}).toArray(function (err, result) {
            if (err) throw err;
            result_ = result[0]
            resolve("cozuldu")
        });
    })
    promise.then((m) => {
        
        console.log("result", result_)
        res.render("edit", {
            text : result_
        })
    })

}

exports.putEdit = async (req, res) => {
    controlConnection()
    const promise = new Promise(function (resolve, reject) {
        let dbo = db.db("test-blog");
        let id = controlHex_(req.params.id)
        console.log("id", id)
        let query = {_id : ObjectId(req.params.id)}
        let newvalues = { $set: {title: req.body.title, text: req.body.text } };
        dbo.collection("texts").updateOne(query, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          resolve("cozuldu")
        });
    })
    promise.then((m) => {
        console.log(req.params.id)
        res.redirect(`/blog_post/${req.params.id}`)
    })

}

exports.deleteImage = (req, res) => {
    controlConnection()
    const promise = new Promise(function (resolve, reject) {
        let dbo = db.db("test-blog");
        let id = controlHex_(req.params.id)
        console.log("id", id)
        let query = {_id : ObjectId(req.params.id)}
        dbo.collection("texts").deleteOne(query, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            resolve("cozuldu")
          });
    })
    promise.then((m) => {
        res.redirect(`/`)
    })
}