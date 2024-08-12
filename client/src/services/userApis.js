import { userInstance } from "../axios/axiosInstance";


export const register = (data)=>{
    return userInstance.post("/register",data)
}

export const login = (data)=>{
    return userInstance.post("/login",data)
}