import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../../Redux/ProfileSlice';
import Card from 'react-bootstrap/Card';
import '../CardAllUsers/CardUser.css'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function CardCommercialUser() {
  const oneProduct= useSelector((state)=>state.product.productOne)
  const user = useSelector((state)=>state.profile.userMedOne)
  const dispatch= useDispatch()
  useEffect(() => {
    dispatch(getOneUser(oneProduct?.productId));
 } ,[dispatch])
  return (
    <div className='liste'>

<Card style={{ width: '25rem' , "color": "#4e5052" }} className="our-team">
    






<div className="picture">
     <img className="img-fluid" src="https://img.freepik.com/vecteurs-libre/croix-medicale-vecteur-conception-logo-hopital_53876-136743.jpg" alt='commercial' />
  

     </div>
     <Card.Body>
     
     <p className="title" > {user?.name}</p>
     <p className="title"> email: {user?.email}</p>
     <p className="title"> Telephone: {user?.phone}</p>
     <Link to='/paiementEnLigne'>
<Button>acheter un produit</Button>
</Link>
     </Card.Body>
  

 

     </Card>



    </div>
  )
}

export default CardCommercialUser