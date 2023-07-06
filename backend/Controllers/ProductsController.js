const Products= require ("../Models/Product")


// get all Products
exports.getAllProducts = async (req, res) => {
    try {
        const Product = await Products.find()
        res.status(201).send({msg: "all product", Product})

    } catch (error) {
        res.status(500).send({msg: 'there is an error'})
    }
}
// get one Product
exports.getOneProduct= async(req,res)=>{
    const {id}= req.params
    try {
        const product= await  Products.findById(id)
        res.status(201).send({msg:'the  product is ', product})
    } catch (error) {
        res.status(500).send({msg:'there is an error'})
        
    }
}

// create new product
exports.createProduct= async (req, res) => {

 
    try {
      
        const product = {
            name: req.body.name,
            price: req.body. price,
            description: req.body.description,
            photo : req.body. photo,
            productId: req.user.id
        };
        await Products.create(product)
        res.status(201).send({msg: ' product is created', product})
    } catch (error) {
       
        res.status(500).send({msg: "their is an error"})


    }
}
// update product
exports.updateProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const productUpdate = await Products.findByIdAndUpdate(id, {
            $set: {
                ...req.body
            }
        }, {new: true})
        res.status(201).send({msg: 'product is updated', productUpdate})
    } catch (error) {
        res.status(500).send({msg: "there is an error"})

    }
}
// delete product
exports.deleteProduct = async (req, res) => {
    const {id} = req.params
    try {
        const deleteProduct = await Products.findByIdAndDelete(id);
        res.status(201).send({msg: 'product is deleted'})
    } catch (error) {
        res.status(500).send({msg: 'there is an error'})

    }
}
// get user product 
exports.getuserProduct = async (req, res) => {
    const {id}= req.params
    try {
        const product = await Products.find({ productId:id})
        res.status(200).send({msg: "All products", product});
    } catch (error) {
        res.status(500).send("server error");
    }
};
// add photo du produit
exports.updateProductImg = async (req, res) => {
    try {
      await Livre.findByIdAndUpdate(req.params.id, {
        $set: { photo: req.file.filename },
      });
  
      res.status(200).send("Image uploaded");
    } catch (error) {
      res.status(500).send("server error");
    }
  };