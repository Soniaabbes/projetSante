const express= require('express');
const { createAppoinment, updateAppoinment, updateValide, deleteAppoinment, getValideTrue, getValideFalse, getAllAppoinment, getParEmail, updateemailPa, getPaRDV, updateValidetr, getuserapoinment, getdocarespoinment, getOneRdv } = require('../Controllers/AppoinmentControllers');
const isAuth = require('../Middelwares/isAuth');
const { appointmentRules } = require('../Middelwares/Validator');
const routere= express.Router();
//get all appoinment
routere.get("/getAllAppoinment", getAllAppoinment)
//create new appoiment
routere.post('/createAppoinment', isAuth,appointmentRules, createAppoinment)
// update appoinment
routere.put('/updateAppoinment/:id',isAuth, updateAppoinment)
//update la valeur de valideen en false 

routere.put('/updateValide/:id',updateValide)
routere.put('/updateValidetr/:id',updateValidetr)

// delete appoinment
routere.delete('/deleteApponment/:id',deleteAppoinment )
// get appoinment when valide is true
routere.get("/getValideTrue", getValideTrue)
//get appoiment where valide is false
routere.get("/getValideFalse/:emailPa", getValideFalse)
//find appoinment par email
routere.get('/getAppoinmentParEmail/:email',getParEmail)
// update l'email de patient  updateemailPa
routere.put('/updateemailPa/:id',updateemailPa)
// get les rdv pour chaque patient selon email  getPaRDV
routere.get('/deleteApponment/:email',getPaRDV)
// get tt les rdv pour chaque docteur
routere.get('/getDocApponment/:id',getuserapoinment)

//get les rdv deja reservé
routere.get('/getdocarespoinment/:id',getdocarespoinment)
//get one rdv
routere.get ('/RdvOne/:id',getOneRdv)





module.exports= routere
