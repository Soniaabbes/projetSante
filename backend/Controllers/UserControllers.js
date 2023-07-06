const User = require("../Models/Users")
//get all users
exports.getAllUsers=async(req,res)=>{
    try {
        const Users= await User.find()
        res.status(201).send({msg:"all users", Users})
        
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
    }
}//

// update One user 
exports.updateUser= async(req,res)=>{
    try {
        const {id}=req.params;
       
        const userUpdate=await User.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
        res.status(201).send({msg:'User is updated', userUpdate})
    } catch (error) {
        res.status(500).send({msg:"there is an error"})
        
    }
}
// delete User
exports.deleteUser=async(req,res)=>{
    const {id}= req.params
    try {
        const deleteUser= await User.findByIdAndDelete(id);
        res.status(201).send({msg:'user is deleted'})
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
        
    }
}
// get one user 
exports.getOneUser= async(req,res)=>{
    const {id}= req.params
    try {
        const oneUser= await User.findById(id)
        res.status(201).send({msg:'the user is ', oneUser})
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
        
    }
}
//get profile medecin:
 exports.getUserMed= async(req,res)=>{

     try {
      
        const user= await User.find({"metier": "médecin"})
        res.status(201).send({msg:'the users are ', user})
        
   } catch (error) {
    res.status(500).send({msg:'there is an error'})
        
    }
}
// get profile patient:
exports.getUserPatient= async(req,res)=>{

    try {
     
       const user= await User.find({"metier": "patient"})
       res.status(201).send({msg:'the users are ', user})
       
  } catch (error) {
   res.status(500).send({msg:'there is an error'})
       
   }
}
// get profile commercial pharmaceutique
exports.getUserCommercial= async(req,res)=>{

    try {
     
       const user= await User.find({"metier": "commercial pharmaceutique"})
       res.status(201).send({msg:'the users are ', user})
       
  } catch (error) {
   res.status(500).send({msg:'there is an error'})
       
   }
}

// get medecin selon specialité :Addictologie

exports.getAddictologist= async(req,res)=>{

    try {
     
       const user= await User.find({"specialite": "Médecine du sport"})
       res.status(201).send({msg:'the users are ', user})
       
  } catch (error) {
   res.status(500).send({msg:'there is an error'})
       
   }
}
// get by speciality!
exports.getUsersBySpeciality = async (req, res) => {
    const {speciality} = req.params
    try {
    
  
      
      const users = await User.find({ specialite: speciality });
  
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ error: 'there is an error' });
    }
  };
  // get by email 

exports.getParEmail = async (req, res) => {
    const {email} = req.params
    try {

        const user = await User.find({"email": email})
        res.status(201).send({msg: 'the user is ', user})

    } catch (error) {
        res.status(500).send({msg: 'there is an error'})

    }
}