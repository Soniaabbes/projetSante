import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './CardUser.css'

import {useDispatch, useSelector} from 'react-redux'
import { getMedecin,deleteUser, getOneUser } from '../../Redux/ProfileSlice';
import CardRdvuser from '../CardduRendezVous/CardRdvuser';
import Card from 'react-bootstrap/Card';



function CardMedecin() {
  const [show,setShow]=useState({})
  const userMed= useSelector((state) => state.profile.userMed);
  const userMedOne= useSelector((state) => state.profile.userMedOne);
  const dispatch= useDispatch()
  const searchname= useSelector((state)=>state.profile.searchname)

  useEffect(() => {
    dispatch(getMedecin());
  }, [dispatch]);
  const handledelete = async (id) => {
    if (window.confirm(" Êtes vous sûres?")) {
      dispatch(deleteUser(id));
        dispatch(getMedecin());
    }
  };


  return (
   
    <div className='liste'>
    {userMed.filter((user) =>
    user.username.toLowerCase().includes(searchname.toLowerCase().trim())
  )
    
    
    ?.map( user=> 
      <Card style={{ width: '18rem' , "color": "#4e5052" }} className="our-team">






<div className="picture">
          <img className="img-fluid" src="https://img.freepik.com/vecteurs-premium/photo-profil-avatar-homme-illustration-vectorielle_268834-538.jpg"/>
       

          </div>
          <Card.Body>
          
          <p className="title">{user.username}</p>
          <p className="title">{user.adress}</p>
          <p className="title">{user.phone}</p>
          <Button variant='outline-primary' onClick={()=>{dispatch(getOneUser(user._id),setShow(prevState => ({
                                ...prevState,
                                [user._id]: true
                              })))}}> supprimer le profil</Button>
                              <br/> <br/>
          {show[user._id]&&<Button variant='outline-primary' onClick={()=>{handledelete(userMedOne._id)}}>confirmer la suppression du profil</Button>}
          </Card.Body>
       
        </Card>




    )}
  
    </div>
    )
}

export default CardMedecin