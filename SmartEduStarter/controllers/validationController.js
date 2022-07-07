import { validate, ValidationError, Joi } from 'express-validation'
export default function(err, req, res, next) {

    if(err && err.details && err.details.body){
        
        err.details.body.forEach(element => {
            req.flash('error', element.message)
        });
    }

    console.log(req.method)

    if(req.originalUrl === '/user/register')
        return res.status(err.statusCode).redirect('/register')
    else if(req.originalUrl === '/user/login')
        return res.status(err.statusCode).redirect('/login')
    else if(req.originalUrl === '/courses')
        return res.status(err.statusCode).redirect('/update_course')

    
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
  
    return next()
}