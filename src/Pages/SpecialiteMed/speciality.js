"use client"

import React from 'react'
import '../CardAllUsers/CardUser.css'
import { getOneUser  } from "../../Redux/ProfileSlice"
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function Specialist() {
 
 const dispatch= useDispatch()

  const user= useSelector((state) => state.profile.userMed);
  const searchname= useSelector((state)=>state.profile.searchname)
  console.log(user)

      console.log(user)
  return (
    <div className='liste' style={{"marginTop":"25px","padding":"25px"}}>
         {user
         .filter((use) =>
         use.username.toLowerCase().includes(searchname.toLowerCase().trim())
       )
         
         
         
         ?.map(use=> 
          <Card style={{ width: '18rem' , "color": "#4e5052" }} className="our-team">





<div className="picture">
          <img className="img-fluid" src="https://img.freepik.com/vecteurs-premium/photo-profil-avatar-homme-illustration-vectorielle_268834-538.jpg" alt='speciality'/>
       

          </div>
          
          <Card.Body>
          <p className="title">{use.username}</p>
          <p className="title">{use.description}</p>
          
          <p className="title"> addresse: {use.adress}</p>
          <p className="title"> Telephone: {use.phone}</p>
  
  
        <Link to="/planningMed">  <Button variant='outline-primary' onClick={() => 
          
          
          
            
            dispatch(getOneUser(use._id))}
        

          
         > voir la liste des RDV</Button></Link>

  
</Card.Body>

</Card>

)}
    </div>
    
    
   
    

  )
}
export default Specialist
