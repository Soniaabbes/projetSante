import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRDVDocreseve } from '../../Redux/RdvSlice';
import './CardRdv.css'

import Card from 'react-bootstrap/Card';

function CardRDVReserve() {
 
    const user= useSelector((state) => state.auth.user);
  const dispatch= useDispatch()
  const rdvs= useSelector((state) => state.rdv.userRDV.rdv); 
  console.log(rdvs,'sony')
    useEffect(() => {
        dispatch(getRDVDocreseve(user?._id));
     } ,[dispatch])
console.log(user?._id)
  return (
    <div  style={{"display":'flex', "justifyContent":"space-between","flexWrap":'wrap', "marginTop":"25px","padding":"25px"}}>

       {rdvs?.map(rdv=> 
       <Card style={{ width: '25rem' }}>

    <img src="https://cdn-icons-png.flaticon.com/256/5351/5351099.png" alt="Person" className="card__image"/>
  
    
    <Card.Text>
     
        <p > <span className='coordonnesRDC'>nom du médecin:</span> <span  className='coordonnesRC'>{rdv?.docteurname}</span> </p>
        <p> <span  className='coordonnesRDC'>email du médecin:</span> <span  className='coordonnesRC'>{rdv?.emailDoc}</span></p>
        <p>  <span className='coordonnesRDC'>email du patient:</span>{rdv?.emailPa}</p>
        <p><span className='coordonnesRDC'>jour:</span> <span className='coordonnesRC'>{rdv?.jour}</span></p>
        <p> <span  className='coordonnesRDC'>de</span><span className='coordonnesRC'>{rdv?.heureStart} </span><span className='coordonnesRDC'>à</span><span   className='coordonnesRC'>{rdv?.heureEnd}</span></p>
       
        </Card.Text>

     


  
  
        </Card>

  

       )}
       

    </div>
  )
}

export default CardRDVReserve