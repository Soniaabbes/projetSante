const Appoinments = require("../Models/Apponments")
// get all appoinment
exports.getAllAppoinment = async (req, res) => {
    try {
        const appoinments = await Appoinments.find()
        res.status(201).send({msg: "all appoinments", appoinments})

    } catch (error) {
        res.status(500).send({msg: 'there is an error'})
    }
}
//get one rdv
exports.getOneRdv= async(req,res)=>{
    const {id}= req.params
    try {
        const oneAppoinment= await  Appoinments.findById(id)
        res.status(201).send({msg:'the appoinment is ', oneAppoinment})
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
        
    }
}

// creat new appoinment
exports.createAppoinment = async (req, res) => {

 
    try {
      
        const appoinment = {
            docteurname: req.body.docteurname,
            emailDoc: req.body.emailDoc,
            emailPa: req.body.emailPa,
            jour: req.body.jour,
            heureStart: req.body.heureStart,
            heureEnd: req.body.heureEnd,
            valide: req.body.valide,
             appoinmentId: req.user.id
        };
        await Appoinments.create(appoinment)
        res.status(201).send({msg: 'appoinment is create', appoinment})
    } catch (error) {
       
        res.status(500).send({msg: "their is an error"})


    }
}
// update appoinment
exports.updateAppoinment = async (req, res) => {
    const {id} = req.params;
    try {
        const appoinmentUpdate = await Appoinments.findByIdAndUpdate(id, {
            $set: {
                ...req.body
            }
        }, {new: true})
        res.status(201).send({msg: 'appoinment is updated', appoinmentUpdate})
    } catch (error) {
        res.status(500).send({msg: "there is an error"})

    }
}
// update la valeur de valide:become false
exports.updateValide = async (req, res) => {

    try {
        const appoinmentUpdate = await Appoinments.findByIdAndUpdate(req.params.id, {
            $set: {
                valide: true
            }
         } ,{new:true})
        res.status(201).send({msg: 'appoinment is updated', appoinmentUpdate})
    } catch (error) {
        res.status(500).send({msg: "there is an error"})

    }
}
// update la valeur de valide : become true
exports.updateValidetr = async (req, res) => {

    try {
        const appoinmentUpdate = await Appoinments.findByIdAndUpdate(req.params.id, {
            $set: {
                valide: false
            }
        }, {new:true})
        res.status(201).send({msg: 'appoinment is updated', appoinmentUpdate})
    } catch (error) {
        res.status(500).send({msg: "there is an error"})

    }
}

// delete oppoinment
exports.deleteAppoinment = async (req, res) => {
    const {id} = req.params
    try {
        const deleteAppoinment = await Appoinments.findByIdAndDelete(id);
        res.status(201).send({msg: 'appoinment is deleted'})
    } catch (error) {
        res.status(500).send({msg: 'there is an error'})

    }
}
// find appoinment: valide: true
exports.getValideTrue = async (req, res) => {
    try {

        const appoinment = await Appoinments.find({"valide":"true"}).populate('appoinmentId',["emailDoc"])
        res.status(201).send({msg: 'the appoinments are are ', appoinment})

    } catch (error) {
        res.status(500).send({msg: 'there is an error'})

    }
}
// find appoinment: valide: false
exports.getValideFalse = async (req, res) => {

 
    try {

        const appoinment = await Appoinments.find({"valide": "false"})
        res.status(201).send({msg: 'the appoinmnts  are ', appoinment})

    } catch (error) {
        res.status(500).send({msg: 'there is an error'})

    }
}
// find appoinment par email
exports.getParEmail = async (req, res) => {
    const {email} = req.params
    try {

        const appoinment= await Appoinments.find ({"emailPa":email})
        res.status(201).send({msg: 'the appoinmnts  are ',appoinment})

    } catch (error) {
        res.status(500).send({msg: 'there is an error'})

    }
}
// update l'email du patient
exports.updateemailPa = async (req, res) => {
    const {id} = req.params;
    const {email} = req.body
    try {
        const appoinmentUpdate = await Appoinments.findByIdAndUpdate(id, {
            $set: {
                emailPa: email
            }
        }, {new:true})
        res.status(201).send({msg: 'appoinment is updated', appoinmentUpdate})
    } catch (error) {
        res.status(500).send({msg: "there is an error"})

    }
}
// get les rdv  pour chaque patient


exports.getPaRDV = async (req, res) => {
    const {email} = req.params
    try {

        const appoinment = await Appoinments.find({"emailPa": email})
        res.status(201).send({msg: 'the RDV are ', appoinment})

    } catch (error) {
        res.status(500).send({msg: 'there is an error'})

    }
}
// get user oppoinment  for doctor
exports.getuserapoinment = async (req, res) => {
    try {
        const rdv = await Appoinments.find({appoinmentId: req.params.id, valide:true})
        res.status(200).send({msg: "All appoinments", rdv});
    } catch (error) {
        res.status(500).send("server error");
    }
};
// get les rdv deja reservé
exports.getdocarespoinment = async (req, res) => {
    try {
        const rdv = await Appoinments.find({appoinmentId: req.params.id, valide:false})
        res.status(200).send({msg: "All appoinments", rdv});
    } catch (error) {
        res.status(500).send("server error");
    }
};