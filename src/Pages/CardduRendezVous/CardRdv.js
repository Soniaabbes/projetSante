import React, { useEffect } from 'react'
import './CardRdv.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteRdv, getRDVDoc } from '../../Redux/RdvSlice';
import Card from 'react-bootstrap/Card';

function CardRdv() {
  const user= useSelector((state) => state.auth.user);
  const dispatch= useDispatch()
  const rdvs= useSelector((state) => state.rdv.userRDV.rdv); 
  
      const handdelete = async (id) => {
        if (window.confirm(" Êtes vous sûres?")) {
          dispatch(deleteRdv(id)
        ) 
          dispatch(getRDVDoc(user?._id));
          window.location.reload();
          
        }
        };
    
      useEffect(() => {
        dispatch(getRDVDoc(user?._id));
     } ,[dispatch,user?._id])
console.log(user?._id)
  return (
    <div style={{"display":'flex', "justifyContent":"space-between","flexWrap":'wrap', "marginTop":"25px","padding":"25px","marginBottom":"25px"}}>
       {rdvs?.map(rdv=> 
 <Card style={{ width: '25rem' }}>
    <img src="https://cdn-icons-png.flaticon.com/256/5351/5351099.png" alt="Person" className="card__image"/>
  
   
    <Card.Text>
     
        <p> <span className='coordonnesRDM'>nom du médecin:</span> <span  className='coordonnesRM'>{rdv?.docteurname}</span> </p>
        <p> <span  className='coordonnesRDM'>email du médecin:</span> <span  className='coordonnesRM'>{rdv?.emailDoc}</span></p>
        <p>  <span className='coordonnesRDM'>email du patient:en attente</span></p>
        <p><span className='coordonnesRDM'>jour:</span> <span className='coordonnesRM'>{rdv?.jour}</span></p>
        <p> <span  className='coordonnesRDM'>de</span><span className='coordonnesRM'>{rdv?.heureStart} </span><span className='coordonnesRDM'>à</span><span   className='coordonnesRM'>{rdv?.heureEnd}</span></p>
       
        </Card.Text>

     

   
  
  
    <button className="btn draw-border" onClick={()=>{handdelete(rdv._id)}}>annuler le RDV</button>


    </Card>
       )}
    </div>
  )
}

export default CardRdv