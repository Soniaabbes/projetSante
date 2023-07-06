import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { registreProduct } from '../../Redux/ProductSlice';
import { useDispatch } from 'react-redux';

function AddProduct() {
   


    const [data,setData]= useState({name:"", price:"", description:"", photo:""})
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
    
    console.log(data,"produit")
    
    const [show, setShow] = useState(false);
const dispatch= useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        dispatch(registreProduct(data));
       
      handleClose()
       
    }
    
     
  return (
    <div>

<>
      <Button variant="outline-primary" onClick={handleShow}>
        créer un nouveau produit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>créer un nouveau produit</Modal.Title>
        </Modal.Header>
        <Modal.Body    onSubmit={handleSubmit}> <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>nom</Form.Label>
      <Form.Control type="text" placeholder="nom du produit" name='name'  onChange={handleChange}
            />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>prix</Form.Label>
      <Form.Control type="text"  name="price"  placeholder="prix du produit"  onChange={handleChange} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail"    >
      <Form.Label>description</Form.Label>
      <Form.Control type="text"  name="description" placeholder='description du produit' onChange={handleChange} />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail"    >
      <Form.Label>URL Photo</Form.Label>
      <Form.Control type="text"  name="photo" placeholder='URL du photo' onChange={handleChange} />
   </Form.Group>
   
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} type='submit'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>



    </div>
  )
}

export default AddProduct