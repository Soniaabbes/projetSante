import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getOneProduct, getallProduct } from '../../Redux/ProductSlice';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import './CardUser.css'

function CardProductAdmin() {

    const [showEditProduct, setShowEditProduct] = useState({});
    const dispatch= useDispatch()
    const products= useSelector((state)=>state.product.userProduct)
    const oneProduct= useSelector((state)=>state.product.productOne)
    const searchname= useSelector((state)=>state.profile.searchname)

    useEffect(() => {
        dispatch(getallProduct());
      
     } ,[dispatch])
     const handledelete = async (id) => {
        if (window.confirm(" Êtes vous sûres?")) {

            dispatch(deleteProduct(oneProduct?._id));
            dispatch(getallProduct());
        }
    };
     
  return (
    <div className='liste'>
    {products.filter((product) =>
    product.name.toLowerCase().includes(searchname.toLowerCase().trim())
  )
    
    
    ?.map(product=> 
      <Card style={{ width: '18rem' , "color": "#4e5052" }} className="our-team">





<div className="picture">
     <img className="img-fluid" src={product?.photo} alt='product'/>
  

     </div>
     <Card.Body>
     
     <p className="title">{product?.name}</p>
     <p className="title">{product?.price}</p>
     <p className="title">{product?.description}</p>


   <Button variant='outline-primary' onClick= {()=>{
  dispatch(getOneProduct(product._id));
  setShowEditProduct(prevState => ({
    ...prevState,
    [product._id]: true
  }));
}} >supprimer le produit</Button> <br/> <br/>
   { showEditProduct[product._id] && (<Button variant='outline-primary' onClick={handledelete} > Confirmer la suppression</Button>
    )}
</Card.Body>
</Card>





)}
</div>
  )
}

export default CardProductAdmin