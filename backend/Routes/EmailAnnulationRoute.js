const express= require("express")
const mailroute= express.Router()
const nodemaile= require("../Controllers/emailAnnulation")

mailroute.post("/emailAnnulation",nodemaile.nodemaile)


module.exports=mailroute