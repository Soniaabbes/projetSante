import React from 'react'
import Button from 'react-bootstrap/Button';
import './trouvezmed.css'





import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsersBySpeciality } from '../../Redux/ProfileSlice';

function TrouvezMed() {

const dispatch= useDispatch()


const handleSpecialityClick = (speciality) => {
  dispatch(getUsersBySpeciality(speciality));
};

  
  
  return (
    <div className='allspeciality'>
    
<h2>Veuillez choisir la spécialité du médecin que vous souhaitez consulter</h2>

<div classname='speciality'>


 <Link to='/speciality'>  <Button variant="link" className='onespeciality' value='addictology'  onClick={() => handleSpecialityClick('Addictologie')} >Addictologie</Button> </Link>
 <Link  to='/speciality'><Button variant="link" className='onespeciality' onClick={() => handleSpecialityClick('Allergologie')}>Allergologie</Button> </Link>
  <Link  to='/speciality'><Button variant="link" className='onespeciality'    onClick={() => handleSpecialityClick('Anatomie et cytopathologie')}>Anatomie et cytopathologie</Button> </Link>
  <Link  to='/speciality'><Button variant="link" className='onespeciality'  onClick={() => handleSpecialityClick('Anesthésie-réanimation')} >Anesthésie-réanimation</Button> </Link>
  <Link  to='/speciality'><Button variant="link" className='onespeciality' onClick={() => handleSpecialityClick('Biologie médicale')}>Biologie médicale</Button> </Link>
  <Link  to='/speciality'><Button variant="link" className='onespeciality' onClick={() => handleSpecialityClick('Dermatologie et vénérologie')}>Dermatologie et vénérologie</Button> </Link>
  <Link  to='/speciality'><Button variant="link" className='onespeciality' onClick={() => handleSpecialityClick('Endocrinologie-diabétologie-nutrition')}>Endocrinologie-diabétologie-nutrition</Button> </Link>
  <Link  to='/speciality'><Button variant="link" className='onespeciality'  onClick={() => handleSpecialityClick('Génétique médicale')}>Génétique médicale</Button> </Link>
  <Link  to='/speciality'><Button variant="link" className='onespeciality'  onClick={() => handleSpecialityClick('Gériatrie')}  >Gériatrie</Button> </Link>
  <Link  to='/speciality'   ><Button variant="link" className='onespeciality'  onClick={() => handleSpecialityClick('Gynécologie médicale')}>Gynécologie médicale</Button> </Link>
  <Link  to='/speciality'   ><Button variant="link" className='onespeciality'   onClick={() => handleSpecialityClick('Hématologie')} >Hématologie</Button> </Link>
  <Link  to='/speciality'   ><Button variant="link"className='onespeciality'   onClick={() => handleSpecialityClick('Hépato-gastro-entérologie')}>Hépato-gastro-entérologie</Button> </Link>
  <Link to='/speciality'   ><Button variant="link" className='onespeciality' onClick={() => handleSpecialityClick('Médecine cardiovasculaire')}  >Médecine cardiovasculaire</Button> </Link>
  <Link  to='/speciality'   ><Button variant="link" className='onespeciality' onClick={() => handleSpecialityClick("Médecine d’urgence")}>Médecine d’urgence</Button> </Link>
  <Link to='/speciality'   ><Button    variant="link" className='onespeciality'  onClick={() => handleSpecialityClick('Médecine du sport')}>Médecine du sport</Button> </Link>
  <Link   to='/speciality'  ><Button variant="link" className='onespeciality'  onClick={() => handleSpecialityClick('Médecine du travail')}>Médecine du travail</Button> </Link>
  <Link  to='/speciality'   ><Button variant="link" className='onespeciality'   onClick={() => handleSpecialityClick('Médecine générale')}>Médecine générale</Button> </Link>
  <Link  to='/speciality'   ><Button variant="link" className='onespeciality' onClick={() => handleSpecialityClick('Maladies infectieuses et tropicales')} >Maladies infectieuses et tropicales </Button> </Link>
  <Link  to='/speciality'   ><Button variant="link" className='onespeciality'  onClick={() => handleSpecialityClick('Médecine intensive-réanimation')} >Médecine intensive-réanimation</Button> </Link>
  <Link to='/speciality'   ><Button variant="link" className='onespeciality' onClick={() => handleSpecialityClick('Médecine interne')}>Médecine interne</Button> </Link>
  <Link to='/speciality'   ><Button variant="link" className='onespeciality'  onClick={() => handleSpecialityClick('Médecine légale et expertises médicales')}>Médecine légale et expertises médicales</Button> </Link>
  <Link  to='/speciality'   ><Button variant="link" className='onespeciality'  onClick={() => handleSpecialityClick('Médecine nucléaire')} >Médecine nucléaire</Button> </Link>
  <Link  to='/speciality'   ><Button variant="link" className='onespeciality' onClick={() => handleSpecialityClick('Médecine physique et de réadaptation')} >Médecine physique et de réadaptation</Button> </Link>
  <Link to='/speciality'    ><Button variant="link" className='onespeciality'   onClick={() => handleSpecialityClick('Médecine vasculaire')}>Médecine vasculaire</Button>  </Link>
  <Link   to='/speciality'  ><Button variant="link"className='onespeciality'  onClick={() => handleSpecialityClick('Néphrologie')}>Néphrologie</Button> </Link>
  <Link   to='/speciality'   ><Button variant="link"className='onespeciality'   onClick={() => handleSpecialityClick('Neurologie')}>Neurologie</Button> </Link>
  <Link to='/speciality'    ><Button variant="link"className='onespeciality'  onClick={() => handleSpecialityClick('Oncologie')}>Oncologie</Button> </Link>
  <Link  to='/speciality'   ><Button variant="link"className='onespeciality' onClick={() => handleSpecialityClick('Pédiatrie')}  >Pédiatrie</Button> </Link>
  <Link to='/speciality'    ><Button variant="link"className='onespeciality'  onClick={() => handleSpecialityClick('Pneumologie')}>Pneumologie</Button>  </Link>
  <Link to='/speciality'    ><Button variant="link"className='onespeciality'  onClick={() => handleSpecialityClick('Psychiatrie')}>Psychiatrie</Button>  </Link>
  <Link  to='/speciality'   ><Button variant="link"className='onespeciality'    onClick={() => handleSpecialityClick('Radiologie et imagerie médicale')}>Radiologie et imagerie médicale</Button>   </Link>
  <Link   to='/speciality'  ><Button variant="link"className='onespeciality'  onClick={() => handleSpecialityClick('Rhumatologie')}>Rhumatologie</Button> </Link>
  <Link to='/speciality'    ><Button variant="link"className='onespeciality'     onClick={() => handleSpecialityClick('Santé publique')}>Santé publique</Button> </Link>

</div>

















    </div>
  )
}

export default TrouvezMed