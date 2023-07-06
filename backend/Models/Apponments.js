const mongoose = require("mongoose")
const appoinmentSchema = new mongoose.Schema({
    docteurname: {

        type: String

    },

    emailDoc: {
        type: String,
        required: true
    },
    emailPa: {
        type: String,
        default: "no one",
        
    },

    jour: {
        required: true,
        type: String,
        enum: [
            "jour",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
            "Dimanche"
        ]

    },
    heureStart: {
        required: true,
        type: String,
        enum: [
            
            "8:00h",
            "9:00h",
            "10:00h",
            "11:00h",
            "12:00h",
            "13:00h",
            "14:00h",
            "15:00h",
            "16:00h",
            "17:00h",
            "18:00h"
        ]

    },
    heureEnd: {
        required: true,
        type: String,
        enum: [
            
            "8:00h",
            "9:00h",
            "10:00h",
            "11:00h",
            "12:00h",
            "13:00h",
            "14:00h",
            "15:00h",
            "16:00h",
            "17:00h",
            "18:00h"
        ]

    },

    valide: {
        type: Boolean,
        default: true
    },


 appoinmentId:{type: mongoose.Schema.Types.ObjectId,
     ref: "User" }
})
module.exports = mongoose.model("Appoinments", appoinmentSchema);
