import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { registreRDV } from '../../Redux/RdvSlice';
 


function EditRdv() {
  const user= useSelector((state) => state.auth.user);

  const dispatch=useDispatch()
    const [show, setShow] = useState(false);

 
    const [data,setData]= useState({docteurname:user?.username,emailDoc:user?.email,emailPa:"",jour:"", heureStart:"",heureEnd:""})
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  console.log(data)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(registreRDV(data));
  handleClose()
   
}
 

  return (
    <div>
<>
      <Button variant="outline-primary"  className='submit1'  onClick={handleShow}>
        faire les RDV
      </Button>

      <Modal show={show} onHid>
        <Modal.Header closeButton>
          <Modal.Title>Les rendez-vous qui auront lieu cette semaine:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form.Group className="mb-3" controlId="formBasicPassword" onSubmit={handleSubmit}>
        <p>choisir le jour </p>
     
        <select name="jour" id="jour"  onChange={handleChange} > 
    <option   value="Lundi">Lundi</option>
    <option  value="Mardi">Mardi</option>
    <option   value="Mercredi">Mercredi</option>
    <option  value="Jeudi">Jeudi</option>
    <option   value="Vendredi">Vendredi</option>
    <option   value="Samedi">Samedi</option>
    <option    value="Dimanche">Dimanche</option>
  </select>

        
      
        <p>choisir l'heure du début du RDV </p>
  
        <select name="heureStart" id="heureStart"  onChange={handleChange}> 
    <option value="8:00h">"8:00h"</option>
    <option value="9:00h">"9:00h"</option>
    <option value="10:00h">"10:00h"</option>
    <option value="11:00h">"11:00h"</option>
    <option value="12:00h">"12:00 h"</option>
    <option value="13:00h">"13:00h"</option>
    <option value="14:00h">"14:00h"</option>
    <option value="15:00h">"15:00h"</option>
    <option value="16:00h">"16:00h"</option>
    <option value="17:00h">"17:00h"</option>
    <option value="18:00h">"18:00h"</option>
  </select>
  

     
     
        <p>choisir l'heure du fin du RDV </p>
  <select name="heureEnd" id="heureEnd"  onChange={handleChange}> 
    <option value="8:00h">"8:00h"</option>
    <option value="9:00h">"9:00h"</option>
    <option value="10:00h">"10:00h"</option>
    <option value="11:00h">"11:00h"</option>
    <option value="12:00h">"12:00h"</option>
    <option value="13:00h">"13:00h"</option>
    <option value="14:00h">"14:00h"</option>
    <option value="15:00h">"15:00h"</option>
    <option value="16:00h">"16:00h"</option>
    <option value="17:00h">"17:00h"</option>
    <option value="18:00h">"18:00h"</option>
  </select>
  </Form.Group>
     
  </Modal.Body>
     
        <Modal.Footer>
          <Button  className='ssss'variant="secondary" onClick={handleClose}>
            fermer
          </Button>
          <Button variant="primary" className='ssss' onClick={handleSubmit} type='submit' >
            Confirmer le RDV
          </Button>
        </Modal.Footer>
      </Modal>
    </>


    </div>
  )
}

export default EditRdv