const express= require("express")
const routers= express.Router()

const {getAllUsers, updateUser, deleteUser, getOneUser, getUserMed, getUserPatient, getUserCommercial, getAddictologist, getUsersBySpeciality, getParEmail} = require("../Controllers/UserControllers")
const { getuserapoinment } = require("../Controllers/AppoinmentControllers")
//get all users
routers.get("/getAllUsers", getAllUsers)
// get user par email
routers.get("/getParEmail/:email", getParEmail)
// update user 
routers.put('/updateUser/:id',updateUser)
//delete user
routers.delete('/deleteUser/:id',deleteUser )
// get one user 
routers.get ('/userOne/:id',getOneUser)
// get tout les médecins
routers.get("/getusermedcin", getUserMed)
//get tt les patients
routers.get('/getuserPatient',getUserPatient)
// get tout les commerciales
routers.get('/getuserCommerciale',getUserCommercial)
// get user oppoinment for doctor
routers.get("/getuserapoinment",getuserapoinment)
//get  addictocologist 
 routers.get("/getAddictocologist",   getAddictologist)  
 routers.get("/speciality/:speciality", getUsersBySpeciality); 

module.exports = routers;