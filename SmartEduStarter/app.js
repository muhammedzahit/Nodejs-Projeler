import express from 'express'
import mongoose from 'mongoose'
import SwaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import pageRouter from './routes/pageRoutes.js'
import courseRouter from './routes/courseRoutes.js'
import categoryRouter from './routes/categoryRoutes.js'
import userRouter from './routes/userRoutes.js'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import flash from 'connect-flash'
import validation from './controllers/validationController.js'
import methodOverride from 'method-override'

let app = express()
app.port = process.env.PORT || 5000
const MONGO_DB_URL = "ENTER_YOUR_CLUSTER_URL"


//swagger
const options = {
    definition: {
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./routes/*.js'], // files containing annotations as above
};
const swaggerSpec = SwaggerJsDoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// json-type response
app.use(express.json())
app.use(express.urlencoded())

// database

mongoose.connect(MONGO_DB_URL, {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));

// session manager
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl:MONGO_DB_URL, ttl: 10 * 60 })
}))

// ejs
app.set('view engine', 'ejs')

// middlewares
app.use(express.static('public'))

// flash messages
app.use(flash());
// hook flash messages
app.use((req,res,next) => {
  res.locals.flashMessage = req.flash()
  next()
})

// method override
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

global.userId = null

app.use('*', (req,res,next) => {
  userId = req.session.userId
  next()
})
app.use(pageRouter)
app.use(courseRouter)
app.use(categoryRouter)
app.use(userRouter)
app.use(validation)


app.listen(app.port,() => {
    console.log(`Port : ${app.port}`)
})
