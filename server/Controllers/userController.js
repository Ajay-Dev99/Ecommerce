const userDb = require("../Model/userModel")
const { createToken } = require("../utilities/generateToken")
const { hashPassword, comparePassword } = require("../utilities/passwordutilities")

const register = async(req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body

        if(!name || !email || !password || !confirmpassword){
            return res.status(400).json({error:"All fields are required!"})
        }

        if(password !== confirmpassword){
            return res.status(400).json({error:"Password not match"})
        }

        const userExist = await userDb.findOne({email})

        if(userExist){
            return res.status(400).json({error:"Email Already Exist"})
        }

        const hashedPassword = await hashPassword(password)

        const newUser = new userDb({
            name,
            email,
            password:hashedPassword
        })

        newUser.save()

        res.status(200).json("User Added successfully")
        

    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" })
    }
}

const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"All fields are required"})
        }
        const userExist = await userDb.findOne({email})
        if(userExist){
            const passwordMatch = await comparePassword(password,userExist.password)
            if(passwordMatch){
                const token = createToken(userExist._id)
                return res.status(200).json({message:"Login Succesfull",user:userExist,token})
            }else{
                return res.status(400).json({error:"Password Not match"})
            }
        }else{
            return res.status(400).json({error:"No user found"})
        }
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error:error.message || "Internal Server Error"})
    }
}


module.exports = {
    register,
    login
}