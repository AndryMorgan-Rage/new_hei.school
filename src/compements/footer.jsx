import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer>
      <div className='bg-001948'>
        <img src="https://hei.school/wp-content/uploads/2022/09/cropped-Logo-e1662790239183.png" alt="" className='w-25 h-20 ml-15' />

        <div className='flex justify-around text-2xl'>
          <div className='text-start text-white p-5'>
            <p className='py-5'>Formation habilitée par <br /> l’Etat suivant le système <br /> LMD</p>
            <p>Habilitation MESupRes n°31309/2023</p>
          </div>

          <div className='text-start text-white p-5'>
            <h1 className='py-5'>Adresse</h1>
            <p>II J 161 R Ambodivoanjo</p>
            <p>Ivandry Antananarivo</p>
            <p>101, Madagascar</p>
          </div>

          <div className='text-start text-white p-5'>
            <h1 className='py-5'>Navigation</h1>
            <a href="" className='text-amber-400'>Acceuil</a> <br />
            <a href="" className='text-white'>Actualite</a> <br />
            <a href="" className='text-white'>Bourse d'etude</a> <br />
            <a href="" className='text-white'>Inscription</a>
          </div>

          <div className='text-start text-white p-5'>
            <h1 className='py-5'>Medias sociaux</h1>
            <FontAwesomeIcon icon={faGlobe} />
          </div>
        </div>
      </div>
      <p className='text-center p-2 font-bold'>© HEI Madagascar</p>
    </footer>
  );
}

export default Footer;
