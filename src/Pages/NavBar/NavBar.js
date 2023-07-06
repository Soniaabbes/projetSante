import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsJustify}from "react-icons/bs";
import './NavBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/AuthSlice';
import { searchName } from '../../Redux/ProfileSlice';



function NavBar() {
  const location = useLocation();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const  auth= useSelector((state)=>state.auth.auth)
  const isSearchVisible = !['/','/chercheMed', '/listeRDVdoc','/RDVPatient','/profilCommercialPharm','/planningMed','/CardRDVResevé','/CardRDV','/profilPatient','/profileMedecin','/profilAdmin','/RDV','/signIn','/cardCommercialeUser'].includes(location.pathname);
  const handlelogout=()=>{
    dispatch(logout());
    navigate('/')
  }

  return (
    <div className='Navbar'>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
           <img alt="logo" className='logo' src='data:image/jpeg;base64,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' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
              {isSearchVisible && (
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => dispatch(searchName(e.target.value))}
          
            /> 
            <Button variant="outline-primary" id="button">Search</Button>
          </Form>)}
         <NavDropdown title= {<BsJustify className='navIcon'/>} id="navbarScrollingDropdown">
         { !auth?<>
              <NavDropdown.Item as={Link} to='/signIn' exact='true' >Connecter à votre compte</NavDropdown.Item>
             
              <NavDropdown.Item  as ={Link} to='/signIn'>
                créer un compte
              </NavDropdown.Item>
              </>:
              <>
              <NavDropdown.Item href="#action4" onClick={handlelogout}>
                déconnecter 
              </NavDropdown.Item>
              </>}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to ='/'>
                a propos
              </NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to ='/chercheMed'>
              voir la liste des docteurs
              </NavDropdown.Item>   
              <NavDropdown.Item as={Link} to ='/AllProduct'>
                voir la liste des produits
              </NavDropdown.Item> 
              
                     
            </NavDropdown>
            </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </div>
    
  )
}

export default NavBar