const adminDb = require("../Model/adminModel")
const { createToken } = require("../utilities/generateToken")
const { comparePassword } = require("../utilities/passwordutilities")

const AdminLogin = async(req,res)=>{
    try {
        const {email,password} = req.body

        if(!email || !password){
            return res.status(400).json({error:"All fields are required"})
        }

        const admin = await adminDb.findOne({email})

        if(!admin){
          return  res.status(400).json({error:"Admin not found"})
        }

        const passwordMatch = await comparePassword(password,admin.password)

        if(!passwordMatch){
            return res.status(400).json({error:"Password Not match"})
        }

        const token = createToken(admin._id)
        return res.status(200).json({message:"Login successfull",token})
        
    } catch (error) {
       res.status(error.status || 500).json({error:error.message || "Internal Server Error"}) 
    }
}


module.exports = {
    AdminLogin
}