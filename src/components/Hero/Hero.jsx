import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
            Passionate Full-Stack Developer | Transforming Ideas into Seamless and Visually Stunning Solutions</p>
      </div>
      <div className='hero-img'>
        <div>
        <div className='tech-icon'>
             <img src="../../assets/images/img00.png" alt="" />
        </div>     
        <div className='tech-icon'>
             <img src="../../assets/images/img01.png" alt="" />
        </div>  
        <div className='tech-icon'>
             <img src="../../assets/images/img02.png" alt="" />
        </div>  
        <div className='tech-icon'>
             <img src="../../assets/images/img03.png" alt="" />
        </div>  
            <img src="../../assets/images/hero-img.png" alt="" />
         </div>
         <div>
             <div className='tech-icon'>
             <img src="../../assets/images/img04.png" alt="" />
             </div>  
             <div className='tech-icon'>
             <img src="../../assets/images/img05.png" alt="" />
             </div>  
             <div className='tech-icon'>
             <img src="../../assets/images/img06.png" alt="" />
             </div>  
        </div>



     </div>
    </section>
 )
}
export default Hero