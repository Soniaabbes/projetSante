import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct, getallProduct } from '../../Redux/ProductSlice'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import '../CardAllUsers/CardUser.css'
import Card from 'react-bootstrap/Card';



function CardAllProduct() {
  const [showEditProduct, setShowEditProduct] = useState({});
    const dispatch= useDispatch()
    
    const products= useSelector((state)=>state.product.userProduct)
     
    const searchname= useSelector((state)=>state.profile.searchname)
   
    useEffect(() => {
        dispatch(getallProduct());
      
     } ,[dispatch])
     
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
}} >intéréssé</Button>
   { showEditProduct[product._id] && (<Link to='/cardCommercialeUser'><Button variant='outline-primary' > voir plus de détails</Button>
   </Link> )}



   </Card.Body>
   </Card>

)}
</div>
   
  )
}

export default CardAllProduct