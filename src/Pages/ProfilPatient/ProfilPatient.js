import React from 'react'
import './ProfilPatient.css'

import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../Redux/ProfileSlice';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/AuthSlice';
import EditOtherUse from '../Edituser/EditOtherUse';


function ProfilPatient() {


   
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const user= useSelector((state)=>state.auth.user)
  
  const handledelete = async (id) => {
    if (window.confirm(" Êtes vous sûres?")) {
      dispatch(deleteUser(id));
      dispatch(logout());
      navigate('/');
    }
  };

  return (
    <div>
      <div className='subEditP'>
 
  
    <EditOtherUse/> 
    <Link to='/RDVPatient'>
    <Button   variant="outline-primary">
      voir mes RDV
    </Button>
    </Link>
    <Button  variant="outline-primary" onClick={()=>{handledelete(user._id)}} >
    supprimer mon compte
    </Button>
   

    </div>
        <>
<img  alt="medecin" className='profileM' src='https://www.freeiconspng.com/uploads/doctors-logo-icon-29.png' />
<form action="/action_page.php" className='photoPr'>
  <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile"/>
  <input type="submit" value="Submit"/>
</form>
</>
<>
 <h1 className='name'>{user?.username}</h1>

 </>
 <div className='information'>
    <div className='lieu'>
    <img alt='adresse' className='adresse1' src='https://cdn-icons-png.flaticon.com/512/6806/6806913.png'/>
   <h3 className='addressCabinet'> Addresse</h3>
   <form>
    <input placeholder='Write your address' className='addressedescrip'  value={user?.adress}/>
   </form>
    </div>
    < div className='lieu1'>
    <img alt='phone' className='adresse1' src='https://static.vecteezy.com/system/resources/previews/005/043/114/original/blue-circle-phone-icon-free-vector.jpg'/>
   <h3 className='addressCabinet'> Telephone</h3>
   <form>
    <input placeholder='Write your phone number' className='addressedescrip' value={user?.phone}/>
   </form>
    </div>
    < div className='lieu'>
    <img alt='phone' className='adresse1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy499GQxqxds_kvO_fd1OC6hvDrM29E0QwLg&usqp=CAU'/>
   <h3 className='addressCabinet'> email </h3>
   <form>
    <input placeholder='Write your email' className='addressedescrip' value={user?.email}/>
   </form>

    </div>
   
 </div>
 <br/>
 
    </div>
  )
}

export default ProfilPatient