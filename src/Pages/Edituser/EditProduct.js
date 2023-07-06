
import React  from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

import {  updateProduct } from '../../Redux/ProductSlice';


function EditProduct() {
  
    const [show, setShow] = useState(false);
  
    const oneProduct= useSelector((state)=>state.product.productOne)
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true);
      
    }
   
   
  
    
    const [data, setData]= useState ({name:oneProduct?.name , photo: oneProduct?.photo, price: oneProduct?.price, description:oneProduct?.description})
    const dispatch= useDispatch()
     
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
      
      const handleEdit= ()=>{
       
        const payload = {
          id : oneProduct?._id,
          data
  
        }  
          dispatch(updateProduct(payload))
         setData({name:"", photo:"", description:"", price:""})
          console.log(data)
        
        handleClose();
      }
  return (
    <div>

    <>
          <Button  onClick={handleShow} variant="outline-primary" className='submit1' >
            modifier mon produit
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title ></Modal.Title>
            </Modal.Header>
            <Modal.Body> <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>nom</Form.Label>
          <Form.Control type="text" placeholder="Enter title"   value ={data.name} name='name'  onChange={handleChange}
                />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>prix</Form.Label>
          <Form.Control type="text"  name="price" value ={data.price} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail"    >
          <Form.Label>description</Form.Label>
          <Form.Control type="text"  name="description"   value ={data.description}  onChange={handleChange}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail"    >
          <Form.Label>photo</Form.Label>
          <Form.Control type="text"  name="photo"   value ={data.photo}  onChange={handleChange}/>
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

export default EditProduct