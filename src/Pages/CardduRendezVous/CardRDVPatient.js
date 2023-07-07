import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEmailRDV, getOneRdv, updateAppoinment } from '../../Redux/RdvSlice';
import { sendAnnulationRdv } from '../../Redux/EmailSlice';

import Card from 'react-bootstrap/Card';

function CardRDVPatient() {

    const user= useSelector((state) => state.auth.user);
    const [show, setShow]= useState(false)
  const dispatch= useDispatch()
  const rdvs= useSelector((state) => state.rdv.userRDV.appoinment); 
  const selectedRdv = useSelector((state) => state.rdv.rdvOne);

  useEffect(() => {
    dispatch(getEmailRDV(user?.email));
  
 } ,[dispatch,user?.email])
const handEdit=()=>{
  const data={...selectedRdv, emailPa:"", valide: true}
 const payload = {
  id : selectedRdv?._id,
  data
 
} ;  
console.log(data,"eeee")
 dispatch( updateAppoinment(payload),
 window.location.reload())
 if (data?.emailPa === "" && data?.valide === true) {
  const email = {
    email:user?.email,
  }
    dispatch(sendAnnulationRdv(email));
 }

};

  return (
    <div style={{"display":'flex', "justifyContent":"space-between","flexWrap":'wrap', "marginTop":"25px","padding":"25px"}} >
    {rdvs?.map(rdv=> 
 <Card style={{ width: '25rem' }}>
 <img src="https://cdn-icons-png.flaticon.com/256/5351/5351099.png" alt="Person" className="card__image"/>


 <Card.Text>

     <p> <span className='coordonnesRDP'>nom du médecin:</span> <span  className='coordonnesRP'>{rdv?.docteurname}</span> </p>
     <p> <span  className='coordonnesRDP'>email du médecin:</span> <span  className='coordonnesRP'>{rdv?.emailDoc}</span></p>
     <p>  <span className='coordonnesRDP'>email du patient:</span> <span className='coordonnesRP'>{rdv?.emailPa}</span></p>
     <p><span className='coordonnesRDP'>jour:</span> <span className='coordonnesRP'>{rdv?.jour}</span></p>
     <p> <span  className='coordonnesRDP'>de</span><span className='coordonnesRP'>{rdv?.heureStart} </span><span className='coordonnesRDP'>à</span><span   className='coordonnesRP'>{rdv?.heureEnd}</span></p>
     <button className="btn draw-border"    onClick={() => dispatch(getOneRdv(rdv._id),setShow(prevState => ({
                                ...prevState,
                                [rdv._id]: true
                              })))}>annuler le RDV</button>
{show[rdv._id] &&(
<button className="btn draw-border"   onClick={handEdit}>confirmer l'annulation du RDV</button>)}
</Card.Text>
</Card>
   










    )}
 </div>


  )
}

export default CardRDVPatient