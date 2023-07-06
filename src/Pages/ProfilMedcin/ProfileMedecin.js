import React from 'react'
import './ProfileMedecin.css'
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { deleteUser} from '../../Redux/ProfileSlice';
import { logout } from '../../Redux/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
import EditUser from '../Edituser/EditMedecin';
import EditRdv from '../EditerRDv/EditRdv';



function ProfileMedecin() {
  const dispatch=useDispatch()
  const navigate= useNavigate()
  
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
      
      <div className='les boutons' style={{"display":"flex", "flexWrap":"nowrap"  }}>
      <Button className='submit1'variant="outline-primary" onClick={()=>{handledelete(user._id)}}>
       supprimer mon compte
    </Button>
    
    <EditUser user={user}/>
   
    <EditRdv/>
    <Link to='/CardRDV'>
    <Button className='submit1' variant="outline-primary">
       ma liste des RDV
      
    </Button>
    </Link>
    {/* <Link to='/listeRDVdoc'> */}
     
        <Link to='/CardRDVResevé'>
    <Button className='submit1' variant="outline-primary">
       voir ma liste des RDV reservé
    </Button>
    
    {/* </Link> */}
    </Link>
      
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
 <h1 className='name '>{user?.username}</h1>
<>

</>
 
 </>
 <div className='information'>
    <div className='lieu'>
    <img alt='adresse' className='adresse' src='https://cdn-icons-png.flaticon.com/512/6806/6806913.png'/>
   <h1 className='addressCabinet'> Addresse</h1>
   <form>
    <input placeholder='Write your address' className='addressedescrip' value={user?.adress} />
   </form>
    </div>
    < div className='lieu'>
    <img alt='phone' className='adresse' src='https://static.vecteezy.com/system/resources/previews/005/043/114/original/blue-circle-phone-icon-free-vector.jpg'/>
   <h1 className='addressCabinet'> Telephone</h1>
   <form>
    <input placeholder='Write your phone number' className='addressedescrip' value={user?.phone}/>
   </form>
    </div>
    < div className='lieu'>
    <img alt='phone' className='adresse' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy499GQxqxds_kvO_fd1OC6hvDrM29E0QwLg&usqp=CAU'/>
   <h1 className='addressCabinet'> email</h1>
   <form>
    <input placeholder='Write your email' className='addressedescrip' value={user?.email}/>
   </form>

    </div>
   
 </div>

   
   
    
   
    </div>
  )
}

export default ProfileMedecin