import { adminInstance } from "../axios/axiosInstance";


export const adminLogin = (data)=>{
    return adminInstance.post("/login",data)
}