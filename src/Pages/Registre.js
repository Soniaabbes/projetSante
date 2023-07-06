import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {registreUser} from "../Redux/AuthSlice"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';



function Registre() {
  const [data, setData]=useState({ username: "", email: "", password: "" , metier:"patient"})
  const dispatch= useDispatch()
  // const navigate= useNavigate()
  const handleChange=(e)=>{
    setData({...data,[e.target.name]: e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(registreUser(data));
    // navigate (<profile/>)

  }
  return (
    <div className="SignIn">
      <div className="Carousel">
       <Carousel className="Acceuil">
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/%C3%A9quipe-m%C3%A9dicale-heureuse-des-m%C3%A9decins-17285750.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="Carousel">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img 
        //  className="d-block w-100"
          src="https://media.istockphoto.com/id/1319031310/fr/photo/docteur-%C3%A9crivant-une-prescription-m%C3%A9dicale.jpg?s=612x612&w=0&k=20&c=qzYeQrF2Ns1lmmFMojXp9Simusu9O2G-HoTCZMw1smw="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR42CaOTHmowUmsfmwp4DrYd0pchhJSVzlyBMp1X3FrbRH4cRm8I3RpwpqK4tBQzXJzwo&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    <div >
    <Container className="mt-5">
      
      <img className="createAnAccount" alt=' create an account' src='https://www.kindpng.com/picc/m/207-2078637_single-icons-for-web-hd-png-download.png'/>
      <h2 className="shadow-sm p-3 m-5 text-center">CREATE NEW ACCOUNT</h2>
      <div className="Acceuil">
     
      <Form  onSubmit={handleSubmit}  className='Formas'>
      <Row className="Row" >
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg Row">
    
       
            
          <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Control className="formControl"
                type="text"
                placeholder="Enter your name"
                name="username"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
              className="formControl"
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
              className="formControl"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" >
            <select  id="utilise"   name="profession" className="formControl"
                onChange={handleChange}>
   <option value="Patient"    name="Profession"
                
                > Patient</option>
   <option value="Médecin"   name="Profession"
                
            > Médecin</option>
   <option value="délégué Médical"   
            > délégué Médical</option>
  
                
              
   </select>
  
   <Button variant="primary w-100 mb-3" type="submit">
              Login
            </Button>
            <p className="Haveaccount">
            Don't have an account ? Sign up
          </p>
              
            </Form.Group>
           
            
          
           
            

        </Col>
      </Row>
      </Form>
      </div>
    </Container>
  
    </div>
    
    </div>

  );
}

export default Registre;
