const express= require("express")
const mailroute= express.Router()
const nodemaile= require("../Controllers/emailControllers")

mailroute.post("/emailUser",nodemaile.nodemaile)


module.exports=mailroute