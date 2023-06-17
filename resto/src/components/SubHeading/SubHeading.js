import React from 'react';
import {images} from '../../constants';
import './SubHeading.css'; 

// destructuring a props so as to be accessed our function
const SubHeading = ({ title}) => (
  <div  style={{marginBottom: '1rem'}}>
    <p className='p__Cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className=''spoon__img/>
   
  </div>
);

export default SubHeading;
