import { configureStore } from '@reduxjs/toolkit'


import authReducer from "./AuthSlice"
import profileReducer from "./ProfileSlice"
import rdvReducer from "./RdvSlice"
import emailReducer from './EmailSlice'
import ProductSlice from './ProductSlice'

const store = configureStore({
    reducer:{
  auth: authReducer,
  profile:profileReducer,
  rdv:rdvReducer,
email:emailReducer,
product:ProductSlice
}
})

export default store