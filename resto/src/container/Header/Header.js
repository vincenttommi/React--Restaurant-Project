import React from 'react';
import './Header.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Header = () => {

  return (

    <div className='app_header app_wrapper section_padding' id='home'>
      <div className='app_wrapper_info'>
 {/* assigning a component to a prop */}
      <SubHeading  title="chase the flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>
        Bellissiamo ,Welcome 
        to the Best Hotel in Dago
        Affordable and Cheap
      </p>
      <button type='button' className='custom__buttton'>Explore Menu</button>
      </div>


      <div className='app_wrapper_img'>


      <img  src={images.welcome} alt='header img'/>
        


      </div>
    </div>

  )
}
export default Header;
