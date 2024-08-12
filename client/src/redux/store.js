import {configureStore} from'@reduxjs/toolkit'
import userReducer from './setUser'

export default configureStore({
    reducer:{
       user:userReducer
    }
})