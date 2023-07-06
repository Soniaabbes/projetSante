import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../../Redux/AuthSlice';


function EditUser() {
    const [show, setShow] = useState(false);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user= useSelector((state) => state.auth.user);

  
    
    const [data, setData]= useState ({username:user?.username , adress: user?.adress , phone: user?.phone, specialite:user?.specialite, description:user?.description})
    const dispatch= useDispatch()
    
    // useEffect(() => {
    //     dispatch(getOneUser(user?._id));
    //  } ,[dispatch])

    
     const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
    
    const handleEdit= ()=>{
     
      const payload = {
        id : user?._id,
        data

      }  
        dispatch( updateUser(payload))
       setData({username:"", adress:"", phone:"", description:""})
        console.log(data)
      
      handleClose();
    }
    
  return (
    <div>
         <>
      <Button  onClick={handleShow} className='submit1' variant="outline-primary">
        modifier mes coordonnés
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title ></Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>nom</Form.Label>
      <Form.Control type="text" placeholder="Enter title"   value ={data.username} name='username'  onChange={handleChange}
            />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>adresse</Form.Label>
      <Form.Control type="text"  name="adress" value ={data.adress} onChange={handleChange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>description</Form.Label>
      <Form.Control type="text"  name="description" value ={data.description} onChange={handleChange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail"    >
      <Form.Label>téléphone</Form.Label>
      <Form.Control type="text"  name="phone"   value ={data.phone}  onChange={handleChange}/>
      </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicEmail"    >
    
    <Form.Label>spécialité</Form.Label>
    <br/>
    
    <select name='specialite'  onChange={handleChange}   > 
    <option value="Addictologie">Addictologie</option>
    <option value="Allergologie">Allergologie </option>
    <option value="Anatomie et cytopathologie">Anatomie et cytopathologie</option>
    <option value="Anatomie et cytopathologie">Anatomie et cytopathologie</option>
           
    
    <option value=" Anesthésie-réanimation">  Anesthésie-réanimation </option>
    <option value="Anatomie et cytopathologie">Anatomie et cytopathologie</option>
    <option value="Anesthésie-réanimation">Anesthésie-réanimation</option>
    <option value="Biologie médicale">Biologie médicale</option>
    <option value="Dermatologie et vénérologie">Dermatologie et vénérologie</option>
    <option value="Endocrinologie-diabétologie-nutrition">Endocrinologie-diabétologie-nutrition</option>
    <option value="Génétique médicale">Génétique médicale</option>
    <option value="Gériatrie">Gériatrie</option>
    <option value="Gynécologie médicale">Gynécologie médicale</option>
    <option value="Hématologie">Hématologie</option>
    <option value="Hépato-gastro-entérologie">Hépato-gastro-entérologie</option>
    <option value="Médecine cardiovasculaire">Médecine cardiovasculaire</option>
    <option value="Médecine d’urgence">Médecine d’urgence</option>
    <option value="Médecine du travail">Médecine du travail</option>
    <option value="Médecine du sport">Médecine du sport</option>
    <option value="Médecine générale">Médecine générale</option>
    <option value="Maladies infectieuses et tropicales">Maladies infectieuses et tropicales</option>
    <option value="Médecine intensive-réanimation">Médecine intensive-réanimation</option>
    <option value="Médecine interne">Médecine interne</option>
    <option value="Médecine légale et expertises médicales">Médecine légale et expertises médicales</option>
    <option value="Médecine nucléaire">Médecine nucléaire</option>
    <option value="Médecine physique et de réadaptation">Médecine physique et de réadaptation</option>
    <option value="Médecine vasculaire">Médecine vasculaire</option>
    <option value="Néphrologie ">Néphrologie </option>
    <option value="Neurologie">Neurologie</option>
    <option value="Oncologie">Oncologie</option>
    <option value="Pédiatrie">Pédiatrie</option>
    <option value="Pneumologie">Pneumologie</option>
    <option value="Psychiatrie">Psychiatrie</option>
    
    <option value="Radiologie et imagerie médicale">Radiologie et imagerie médicale</option>
    <option value="Rhumatologie">Rhumatologie</option>
    <option value="Santé publique">Santé publique</option>
   
  </select> 
 
  </Form.Group>

    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'  onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default EditUser