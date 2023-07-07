import React from 'react'
import { BsFillPersonCheckFill,BsCalendarHeart}from "react-icons/bs";
import './Apropos.css'

function Apropos() {
  return (<>
    <div className='div1'>
      <p className='Apropos'>
      <img alt='cancer ' className='familleM' src="  https://togyoryu.com/sites/default/files/styles/large/public/photo_1_1.jpg?itok=tDxSWz5n " />
      <p> <span className='Together'>Tant que les maladies resteront à vaincre,</span> <br/> <span className='can'> nous continuerons à nous battre avec vous, </span>   <br/> <span className='Together'> grâce à vous. </span>
</p>
</p>
    </div>
    <div className='div2'>
     
      <p className='patient'> <BsFillPersonCheckFill className='icon'/> <br/> <span className='cible'>Pour les patients</span><br/>
      Trouvez un médecin, réservez une visite et résolvez tout doute lié à la santé</p>
<p className='doctor'> <BsCalendarHeart className='icon'/> <br/> Pour les médecins, <br/> 
Gagnez du temps dans la gestion des visites </p>

<p className='representative'><BsFillPersonCheckFill className='icon'/> <br/> <span className='cible'> Pour les commerciaux pharmaceutiques</span> <br/> Nous proposons un espace de vente de matériel médical pour les professionnels de santé et les patients<br/> 
<br/> </p>

    </div>
    </>
  )
}

export default Apropos