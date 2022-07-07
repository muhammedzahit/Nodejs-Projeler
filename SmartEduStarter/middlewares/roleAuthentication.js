import { rolesEnumReversed } from "../enums/rolesEnum.js"
import User from "../models/User.js"

const roleAuthentication = (roles) => {
    return async (req,res,next) => {
        console.log("USER ID : " , userId)
        var user = await User.findOne({_id : userId})
        if(!user)
            return res.status(400).send("Kullanıcı bulunamadı")
        if(!roles.includes(rolesEnumReversed[user.role])){
            return res.status(400).send("Kullanıcı yetkili değil")
        }
        return next()
    }
} 

export default roleAuthentication