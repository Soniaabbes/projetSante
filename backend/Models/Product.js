const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: {

        type: String,
required:true
    },

   
    price: {
        type: String,
      
        
    },

    description: {
        
        type: String,
       
    },
    photo: {
       
        type: String,
       

    },
  


 productId:{type: mongoose.Schema.Types.ObjectId,
     ref: "User" }
})
module.exports = mongoose.model("Products",productSchema);
