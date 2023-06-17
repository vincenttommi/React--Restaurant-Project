import React from 'react'
import './Gallery.css';

import {SubHeading} from  '../../components';
import { images} from '../../constants';
import {BsInstragram,BsArrowLeftShort,BsArrowLeftRightShort} from  'react-icons/bs';


const Gallery = () => {
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>

         <SubHeading  title="Instagram"/>
         <h1 className='headtext__cormorant'>Photo Gallery</h1>

      </div>

     </div>
  )
}

export default Gallery