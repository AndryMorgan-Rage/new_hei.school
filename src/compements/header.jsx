import React from 'react';
import '../index.css'

function Header() {
  return (
    <header>
      <nav className='bg-001948 p-3'>
        <ul>
          <div className='flex justify-around gap-8'>
            <img src="https://hei.school/wp-content/uploads/2022/09/cropped-Logo-e1662790239183.png" alt="" className='w-25 h-20' />
            <div className='flex items-center gap-8'>
              <a href="" className='text-amber-400 text-2xl'>Acceuil</a>
              <a href="" className='text-white text-2xl'>Actualite</a>
              <a href="" className='text-white text-2xl'>Bourse d'etude</a>
              <a href="" className='text-white text-2xl'>Inscription</a>
              <button className='bg-orange-300 p-3 rounded-sm'>INTRANET</button>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
