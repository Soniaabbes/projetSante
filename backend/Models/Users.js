const mongoose= require("mongoose")
const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
    
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    
      metier: {
        type: String,
        enum: ["patient", "médecin", "commercial pharmaceutique"],
        
      },
      role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
      },
      phone:{
        type:String,
        default:'pas de numéro disponible pour le moment'
        
      },
      description:{type:String},
      adress:{
        type:String,
        default:"pas d'adresse  disponible pour le moment"
  
      },
  
      imageURL:{type:String, },
     
      specialite:{ 
        type:String,
        enum:["Addictologie","Médecine générale",
            "Allergologie",       
            "Anatomie et cytopathologie",
            "Anesthésie-réanimation",
             "Biologie médicale",
            "Dermatologie et vénérologie",
             "Endocrinologie-diabétologie-nutrition ",
             "Génétique médicale ",
             "Gériatrie",
            "Gynécologie médicale",
            "Hématologie", 
            "Hépato-gastro-entérologie",
            "Médecine cardiovasculaire",
            "Médecine d’urgence",
            "Médecine du sport", 
             "Médecine du travail",
            "Médecine générale",
            "Maladies infectieuses et tropicales", 
            "Médecine intensive-réanimation", 
            "Médecine interne",
            "Médecine légale et expertises médicales", 
            "Médecine nucléaire", 
            "Médecine physique et de réadaptation", 
            "Médecine vasculaire", 
            "Néphrologie",
            "Neurologie", 
            "Oncologie", 
            "Pédiatrie", 
            "Pneumologie", 
            "Psychiatrie", 
            "Radiologie et imagerie médicale",
            "Rhumatologie", 
            "Santé publique"],
           
           
      }
})
module.exports = mongoose.model("User", userSchema);