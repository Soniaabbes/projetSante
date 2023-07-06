import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './CardUser.css'
import {useDispatch, useSelector} from 'react-redux'
import { getCommercial, deleteUser, getOneUser} from '../../Redux/ProfileSlice';
import Card from 'react-bootstrap/Card';

function CardCommercial() {
    const userMed= useSelector((state) => state.profile.userMed);
    const userOne= useSelector((state) => state.profile.userMedOne);
    const searchname= useSelector((state)=>state.profile.searchname)
  const dispatch= useDispatch()
 
const [show, setShow]= useState({})
  useEffect(() => {
    dispatch(getCommercial());
  }, [dispatch]);
  const handledelete = async (id) => {
    
      dispatch(deleteUser(id));
      dispatch(getCommercial());
    
  };
  return (
    <div className='liste' >
    {userMed
    .filter((user) =>
    user.username.toLowerCase().includes(searchname.toLowerCase().trim())
  )
    
    
    
    ?.map( user=> 


<Card style={{ width: '18rem' , "color": "#4e5052" }} className="our-team">

 
 
 
 
 <div className="picture">
           <img className="img-fluid" src="https://img.freepik.com/vecteurs-premium/photo-profil-avatar-homme-illustration-vectorielle_268834-538.jpg" alt='img'/>
        
 
           </div>
          
           <Card.Body>
           <p className="title">{user.username}</p>
           <p className="title">{user.adress}</p>
           <p className="title">{user.phone}</p>
           <Button variant='outline-primary' onClick={()=>{dispatch(getOneUser(user._id),setShow(prevState => ({
                                ...prevState,
                                [user._id]: true
                              })))}}> supprimer le profile</Button> <br/> <br/>
          {show[user._id]&&(<Button variant='outline-primary' onClick={()=>{handledelete(userOne._id)}}> confirmer la suppression du profile</Button>
          )}
           </Card.Body>
         </Card>


 


    )}
    </div>
  )
}

export default CardCommercial