import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCircleUser, faUsers, faMedal } from '@fortawesome/free-solid-svg-icons';
import '../index.css'
function MainSection() {
  return (
    
      
    <section>
        <div className='py-25 bg-custom-img '>
        
           <h1 className='flex justify-center text-amber-500 title-font text-3xl'>
              HAUTE ECOLE DE L'INFORMATIQUE 
           </h1>
           <p className='flex justify-center  text-white mt-30 text-3xl'>
             " Education professionel et pedagogique pour avoir <br /> une bonne maitrise de l'informatique chez HEI "
           </p>
           <div className='flex justify-center gap-95 mt-50'>

                <button className='bg-amber-50 text-blue-700 px-8 py-5 rounded-sm'>Inscrivez-vous</button>
                <button className='bg-amber-500 text-white p-8 py-5 rounded-sm'>Emploi du temp</button>
                <button className='bg-blue-800 text-white p-8 py-5 rounded-sm'>Programme pedagogique</button>

           </div>
           <p className='flex justify-center gap-95  text-white mt-25 text-2xl'>
            Habilitation MeSupRES, suivant l'arrete numeros:31309/2023
           </p>
        </div>

        <div className='flex items-center px-10 py-10'>

            <div className='flex items-start px-10 py-5 '>
              <img src='https://www.hei.school/wp-content/uploads/2024/11/A-propos-left-1.webp' alt="" className=' '  />
             
            </div>

            <div >
                <h1 className='text-6xl py-10'>À propos de nous</h1>
                         <div className='flex text-amber-400 text-4xl'>
                          <FontAwesomeIcon icon={faGraduationCap} className='' />
                          <p>+3ans </p>
                          </div> 
                <p>
                  Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. <br /> Nous sommes un groupe d’experts, de professionnels<br /> et des passionnés de l’informatique de  Madagascar et  du monde entier.
                </p>
                <br />
                
                         <div className='flex  text-amber-400 text-4xl'>
                          <FontAwesomeIcon icon={faUsers} /> 
                          <p>+250 étudiants </p>
                          </div> 
                <p>
                  Plus de 250 étudiants et plus d’une dizaine d’entreprises ont <br /> déjà fait confiance à notre formation habilitée par l’État malgache. <br /> Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.
                </p>
                <br />
                
                         <div className='flex  text-amber-400 text-4xl'>
                          <FontAwesomeIcon icon={faMedal} />
                          <p> Notre mission </p>
                          </div> 
                <p>
                  Notre mission est d’amener des jeunes malgaches sur des domaines <br /> porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation <br /> afin de favoriser  leur employabilité et le développement de Madagascar.
                </p>
            </div>
        </div>


        <div className='bg-blue-300 p-10'>
           <div className='mb-20'>
            <h1 className='text-center title-font'>L'équipe pédagogique</h1>
            <p className='text-center text-white'>Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle,<br /> dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que <br />cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.</p>
            </div> 
                <div className='flex gap-5 justify-center'>
                       <div className='bg-white flex-column w-90 text-center h-100 p-6 rounded-lg'>
                          <FontAwesomeIcon icon={faCircleUser} className='text-9xl'/> 
                          <h1 className='text-center p-3'>Professeur </h1>
                          <p className='text-center'>Diplome | Professionalisme</p>
                       </div>

                        <div className='bg-white flex-column w-90 text-center h-100 p-6 rounded-lg'>
                          <FontAwesomeIcon icon={faCircleUser} className='text-9xl'/> 
                          <h1 className='text-center p-3'>Professeur </h1>
                          <p className='text-center'>Diplome | Professionalisme</p>
                       </div>

                        <div className='bg-white flex-column w-90 text-center h-100 p-6 rounded-lg'>
                          <FontAwesomeIcon icon={faCircleUser} className='text-9xl'/> 
                          <h1 className='text-center p-3'>Professeur </h1>
                          <p className='text-center'>Diplome | Professionalisme</p>
                       </div>
                </div>        
        </div>


        <div className='flex justify-around p-30'>
          <div>
            <h1 className='text-5xl p-5 font-bold'>Quelques débouchés</h1>
            <p className='mb-10 text-1.5xl'>Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements <br />de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, <br /> des métiers du présent, des métiers du futur…</p>
            <p className='text-1.5xl'>Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants <br />cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur <br />système et réseau, développeur de sécurité…</p>
          </div>
          <img src='https://www.hei.school/wp-content/uploads/2024/11/IMG-02-e1720543344824-987x1024-1.webp' alt='' className='w-95 h-95 rounded-sm' />
        </div>

        <div className='bg-lightgrey pt-15 pb-15'>
          <div>
            <h1 className='text-center text-5xl text-shadow-blue-950 font-bold'>Domaines</h1>
            <p className='text-center p-15 text-2xl'>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
          </div>
<div className='flex justify-around'>
          <div className='bg-white w-100 px-15 py-5 rounded-sm'>
            <img src='https://www.hei.school/wp-content/uploads/2024/05/Cloud-et-cybersecurite_Plan-de-travail-1-300x300.png' alt="" className='w-25 h-25 rounded-full m-auto' />
            <h1 className='text-center text-amber-400 text-2xl font-bold'>Cloud et cybersécurité </h1>
            <p className='text-center p-3 '>Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.</p>
          </div>

          <div className='bg-white w-100 px-15 py-5 rounded-sm'>
            <img src='https://www.hei.school/wp-content/uploads/2024/05/Intelligence-artificielle_Plan-de-travail-1-300x300.png' alt="" className='w-25 h-25 rounded-full m-auto' />
            <h1 className='text-center  text-amber-400 text-2xl font-bold'> Intelligence artificielle</h1>
            <p className='text-center p-3'>Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.</p>
          </div>

          <div className='bg-white w-100 px-15 py-5 rounded-sm'>
            <img src='https://www.hei.school/wp-content/uploads/2024/05/Ingenierie-logicielle_Plan-de-travail-1-1-300x300.png' alt="" className='w-25 h-25 rounded-full m-auto' />
            <h1 className='text-center  text-amber-400 text-2xl font-bold'> Ingénierie logicielle</h1>
            <p className='text-center p-3'>Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.</p>
          </div>

</div>

        </div>


         <div className='bg-blue-300 pt-15 pb-15'>
          <div>
            <h1 className='text-center text-5xl text-shadow-blue-950 font-bold'>Admision</h1>
            <p className='text-center p-8 text-2xl'>Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau : <br />

une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. </p>
          </div>
<div className='flex justify-center'>
          <div className='bg-amber-300 w-100 px-15 py-5 rounded-sm'>
            <h1 className='text-start font-bold  text-white text-5xl py-3'>01 </h1>
            <p className='text-start text-2xl '><span className='font-bold text-2xl'>Dépôt de dossiers</span> : pour les bacheliers de toutes séries sans limite d’âge</p>
          </div>

           <div className='bg-amber-400 w-100 px-15 py-5 rounded-sm '>
            <h1 className='text-start font-bold text-white text-5xl py-3'>02 </h1>
            <p className='text-start text-2xl'><span className='font-bold text-2xl'>Test de niveau</span> : composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D</p>
          </div>


          <div className='bg-amber-500 w-100 px-15 py-5 rounded-sm'>
            <h1 className='text-start font-bold  text-white text-5xl py-3'>03 </h1>
            <p className='text-start font-bold text-2xl'>Inscription définitive (si test réussi)</p>
          </div>

</div>
         <div className='flex gap-5 justify-center py-5'>
            <button className='border p-4 rounded-sm'>Inscrivez-vous ici</button>
            <button className='bg-blue-950 p-4 text-white rounded-sm'>Resultat concours</button>
          </div>

        </div>


        <div className='py-15'>
          <div className='flex justify-center gap-13'>
              <img src='https://www.hei.school/wp-content/uploads/2024/11/IMG-03-e1720537524581-1024x950-1.webp' alt="" className='w-75 h-70' />
             <div className='flex-column text-start my-auto '><h1 className='text-5xl font-bold'> Le programme pédagogique </h1>  
              <p className='py-15 text-2xl'>Suivant le sysyteme lMD , <br /> jusqu'a Mastrer , notre formation repose sur un  programme  pedagogique <br />concus en adequation avec  les attentes du marche, La formation est sanctionnee <br /> par un diplome de License et de master en informatique  reconnue <br /> par Mesupres de MADAGASCAR.  </p>
              <button className='border-1 px-5 py-3'>Notre Programme</button>
              </div> 
          </div>  
        </div>

        <div className='flex justify-center gap-10 py-5'>
            <div className='text-start bg-amber-100 w-70 h-70 p-5 rounded-md'>
                <h1 className='text-amber-500 text-5xl font-bold'>25%</h1>
                <p className='text-2xl font-bold'>Apprentissage <br /> theorique <br />en presentiel </p>
            </div>
            <div className='text-start bg-amber-100 w-70 h-70 p-5 rounded-md'>
                <h1 className='text-amber-500 text-5xl font-bold'>25%</h1>
                <p className='text-2xl font-bold'>Apprentissage <br /> support <br /> numériques </p>
            </div>
             <div className='text-start bg-amber-100 w-70 h-70 p-5 rounded-md'>
                <h1 className='text-amber-500 text-5xl font-bold'>25%</h1>
                <p className='text-2xl font-bold'>Travaux <br /> individuels <br />de l’étudiant</p>
            </div>
             <div className='text-start bg-amber-100 w-70 h-70 p-5 rounded-md'>
                <h1 className='text-amber-500 text-5xl font-bold'>25%</h1>
                <p className='text-2xl font-bold '>Apprentissage <br /> en entreprise </p>
            </div>
             
        </div>

        <div className='flex justify-center gap-5 pb-15'>
            <img src='https://www.hei.school/wp-content/uploads/2025/05/Mask-group-1.webp' alt="" className='rounded-sm w-85 h-80'/>
            <img src='https://www.hei.school/wp-content/uploads/2025/05/Mask-group-2.webp' alt="" className='rounded-sm w-85 h-80'/>
            <img src='https://www.hei.school/wp-content/uploads/2025/05/Mask-group-3.webp' alt="" className='rounded-sm w-85 h-80'/>
        </div>

        <div className='bg-lightgrey py-5'>
          <div className='text-center p-15'>
            <h1 className='text-5xl font-bold pb-10'>Les technos et langages utilisées</h1>
            <p className='text-2xl'>Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.</p>
          </div>

          <div className='flex justify-center gap-14 pb-10'>
              <img src='https://www.hei.school/wp-content/uploads/2024/06/Java.png
' alt="" className='w-20 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/06/python.png' alt="" className='w-20 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/06/JS.png
  ' alt="" className='w-20 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/06/C.png' alt="" className='w-20 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/06/TS.png' alt="" className='w-20 h-20 '/>
              
          </div>
          <div className='flex justify-center gap-14 pb-10'>
              <img src='https://www.hei.school/wp-content/uploads/2024/09/docker.png' alt="" className='w-30 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/09/next.png' alt="" className='w-30 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/09/aws.png' alt="" className='w-30 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/09/serverless.png
' alt="" className='w-20 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/09/react.png' alt="" className='w-30 h-20 '/>
              <img src="https://www.hei.school/wp-content/uploads/2024/09/openapi.png" alt="" className='w-30 h-20 ' />
          </div>
        </div>

        <div className=' py-5'>
          <div className='text-center p-15'>
            <h1 className='text-5xl font-bold pb-10'>Nos partenaires</h1>
            <p className='text-2xl' >L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires</p>
          </div>

          <div className='flex justify-center gap-14 pb-10'>
              <img src='https://www.hei.school/wp-content/uploads/2024/05/LOGO-NEXTA.webp' alt="" className='w-40 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/05/PN_Logo_baseline_color_ENG.png' alt="" className='w-40 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/05/Yooz-2023-Logo-2.webp' alt="" className='w-40 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/05/logo-etech.png' alt="" className='w-40 h-20 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/09/logo_emit.png' alt="" className='w-30 h-20 '/>
              
          </div>
          <div className='flex justify-center gap-14 pb-10'>
              <img src='https://www.hei.school/wp-content/uploads/2024/06/Logo-Numer-vf.png' alt="" className='w-30 h-30 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/05/bp-logo-full-2048x663.webp' alt="" className='w-30 h-30 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/05/YIF_LOGO_512x512_BL_on_WH-1.webp' alt="" className='w-30 h-30 '/>
              <img src='https://www.hei.school/wp-content/uploads/2024/05/logo-kante-company-1.png' alt="" className='w-30 h-30 '/>
          </div>
        </div>
    </section>

  );
}

export default MainSection;
