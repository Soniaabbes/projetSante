import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useSelector } from 'react-redux'
import './AdminPage.css'
import { Link } from 'react-router-dom'





function AdminPage() {

 
   

   const user= useSelector((state)=>state.auth.user)
  
   
  
   
 
  
   
   
 
  return (
   
<div className='subEdit'>
  
   <Link to='/cardMed'>
 <Button className='submit' variant="outline-primary" >
    liste des médecins
 </Button>
 </Link>
 <Link to='/cardPatient'>
 <Button className='submit'  variant="outline-primary">
   liste des patients
 </Button>
 </Link>
 <Link to='/cardCommercial'>
 <Button className='submit' variant="outline-primary" >
 liste des délégués commerciales
 </Button>   
 </Link>
 <Link to="/ProductAdmin">
 <Button className='submit' variant="outline-primary" >
 liste des produits
 </Button>   
 </Link>


 <>
 <h1 className='name'>{user?.username}</h1>
 <form >
    <input placeholder='describe your profile' className='description'/>
 </form>
 </>
 <div className='information'>
    <div className='lieu'>
    <img alt='adresse' className='adresse' src='https://cdn-icons-png.flaticon.com/512/6806/6806913.png'/>
   <h1 className='addressCabinet'> Address</h1>
   <form>
    <input placeholder='Write your address'  className='addressedescrip'  value= {user?.adress}  type='text' />
   </form>
    </div>

    < div className='lieu'>
    <img alt='phone' className='adresse' src='https://static.vecteezy.com/system/resources/previews/005/043/114/original/blue-circle-phone-icon-free-vector.jpg'/>
   <h1 className='addressCabinet'> phone</h1>
   <form>
    <input placeholder='Write your phone number' className='addressedescrip'  type='text' value= {user?.phone}/>
   </form>
    </div>


    < div className='lieu'>
    <img alt='phone' className='adresse' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy499GQxqxds_kvO_fd1OC6hvDrM29E0QwLg&usqp=CAU'/>
   <h1 className='addressCabinet'> email </h1>
   <form>
    <input placeholder='Write your email' className='addressedescrip' type='text' value={user?.email}/>
   </form>

    </div>

</div>

   
    </div>
   
  
   
)}

export default AdminPage