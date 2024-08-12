const jwt = require("jsonwebtoken")
const maxAge = 3 * 24 * 60 * 60

const createToken = (userId)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRETE_KEY,{
        expiresIn:maxAge
    })

    return token
}

module.exports = {
    createToken
}