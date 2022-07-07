export const blockLogOperations = (req,res,next) => {
    // console.log(userId)
    if(!userId)
        return next()
    return res.status(400).redirect('/user/dashboard')
}