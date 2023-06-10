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
      {/* introducing attritubes to a component */}
     <SubHeading  title="Chef's Word"/>
     <h1 className='headtext__cormorant '>What we believe in</h1>

     <div className='app__chef-content'>
      <div className='app__chef-content_quote'>

         <img src={images.quote} alt='quote'/>
         <p className='p__opensans'>Whatever you do, do with determination. You have one life to live; do your work with passion and give your best. Whether you want to be a chef, doctor, actor, or a mother, be passionate to get the best result.</p>

       <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder </p>
        <img src={images.sign} alt='sign' />




       </div>
      </div>
     </div>
    </div>
    </div>
  )
} 

export default Chef;