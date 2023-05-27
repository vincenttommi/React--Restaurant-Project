import React from 'react'
import './Chef.css';
import { SubHeading } from '../../components';

import {images} from '../../constants';
 const Chef = () => {
  return (
 


    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse' >
        <img  src={images.chef} alt='chef'/>
 

      </div>
    
    <div className='app__wrapper_info'>
     <SubHeading  title="Chef's Word"/>
     <h1 className='headtext__cormorant '>What we believe in</h1>


    </div>
    </div>
  )
}

export default Chef;