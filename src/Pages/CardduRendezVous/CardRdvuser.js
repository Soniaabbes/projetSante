import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getOneRdv, getRDVDoc, updateAppoinment} from '../../Redux/RdvSlice';
import {sendConfirmationEmail} from '../../Redux/EmailSlice';
import Card from 'react-bootstrap/Card';

function CardRdvuser() {

    const user = useSelector((state) => state.auth.user)
  const [show, setShow]= useState(false)
    const userMed = useSelector((state) => state.profile.userMed);
    console.log(userMed)
    const oneUser = useSelector((state) => state.profile.userMedOne)
    const dispatch = useDispatch()
    const rdvs = useSelector((state) => state.rdv.userRDV.rdv);
    useEffect(() => {
      console.log(rdvs)
        dispatch(getRDVDoc(oneUser._id));
    }, [dispatch])
    const selectedRdv = useSelector((state) => state.rdv.rdvOne);
   
    // const [data, setData] = useState({
    //     docteurName: rdvs ?. docteurName,
    //     emailDoc: rdvs ?. emailDoc,
    //     emailPa: rdvs ?. emailPa,
    //     jour: rdvs ?. jour,
    //     heureStart: rdvs ?. heureStart,
    //     heureEnd: rdvs ?. heureEnd,
    //     valide: rdvs ?. valide,
    //     appoinmentId: rdvs ?. appoinmentId,
    //     _id: rdvs ?. _id
    // })


    const handEdit = async () => {
 console.log( user ?.email)
 const data={...selectedRdv,  emailPa: user ?.email,
    valide: false}

;
        const payload = {
            id: selectedRdv ?._id, data
            
        }
        dispatch(updateAppoinment(payload));
    

         if (data ?.emailPa === user ?.email && data ?.valide === false) {
          console.log(selectedRdv,"body")
            const data = {
                email: user ?.email,
                docteurname: selectedRdv ?.docteurname,
                jour: selectedRdv ?.jour,
                heureStart: selectedRdv ?.heureStart,
                heureEnd: selectedRdv ?.heureEnd
            }
            dispatch(sendConfirmationEmail(data));
         }
    }


    return (
        <div style={{"display":'flex', "justifyContent":"space-between","flexWrap":'wrap', "marginTop":"25px","padding":"25px"}}>


           
            
       
         
                {
                rdvs?. map(rdv => 
                    <Card style={{ width: '25rem', "margin":"10px" }}>

                    <img src="https://cdn-icons-png.flaticon.com/256/5351/5351099.png" alt="Person" className="card__image"/>

                  
                    <Card.Text>
                            <p>
                                <span className='coordonnesRDM'>nom du médecin:</span>
                                <span className='coordonnesRM'>
                                    {
                                    rdv ?. docteurname
                                }</span>
                            </p>
                            <p>
                                <span className='coordonnesRDM'>email du médecin:</span>
                                <span className='coordonnesRM'>
                                    {
                                    rdv ?. emailDoc
                                }</span>
                            </p>
                            <p>
                                <span className='coordonnesRDM'>email du patient:en attente</span>
                            </p>
                            <p>
                                <span className='coordonnesRDM'>jour:</span>
                                <span className='coordonnesRM'>
                                    {
                                    rdv ?. jour
                                }</span>
                            </p>
                            <p>
                                <span className='coordonnesRDM'>de</span>
                                <span className='coordonnesRM'>
                                    {
                                    rdv ?. heureStart
                                } </span>
                                <span className='coordonnesRDM'>à</span>
                                <span className='coordonnesRM'>
                                    {
                                    rdv ?. heureEnd
                                }</span>
                            </p>

                    
                           

                    


                    <button className="btn draw-border"
                        onClick={
                            () => dispatch(getOneRdv(rdv._id), setShow(prevState => ({
                                ...prevState,
                                [rdv._id]: true
                              })))
                    }>reserver le RDV</button>

                    { show[rdv._id] && ( <button className="btn draw-border"
                        onClick={handEdit}>confirmer le RDV</button>)}
                         </Card.Text>
    </Card>
                )
            } 
        

        </div>
    )
}

export default CardRdvuser
