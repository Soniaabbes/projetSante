const nodemailer = require('nodemailer')
require("dotenv").config()
const nodemaile = async (req, res, next) => {
  


    try {
        console.log(req.body)
        const transporter = nodemailer.createTransport({
            port: 587,
            host: "smtp.gmail.com",
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWARD
            },
            tls: {
                rejectUnauthorized: false
            }

        })
        var email=req.body.email;
        var docteurname=req.body.docteurname;
        var heureStart= req.body.heureStart;
        var heureEnd= req.body.heureEnd;
        var jour= req.body.jour
        var mail = {
            from: process.env.EMAIL,
            to: email,
            subject: 'confirmation du  RDV',
            text:`Votre rendez-vous avec le Dr. ${docteurname} est confirmé.\n\nDate: ${jour}\nHeure: de ${heureStart} à ${heureEnd}`
        }

        transporter.sendMail(mail, (err, data) => {

            console.log(data);
            if (err) {
                console.log('error', err)
            }


        })

        res.status(200).send({msg: "success"})


    } catch (error) {
        console.log(error)
        res.status(403).send({msg: "forrbiden"})

    }
}
module.exports = {
    nodemaile
}
