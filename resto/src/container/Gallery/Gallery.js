import React from 'react'
import './Gallery.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {SubHeading} from  '../../components';
import { images} from '../../constants';
import {BsInstragram,BsArrowLeftShort,BsArrowRightShort} from  'react-icons/bs';

const  galleryImages  = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]
//a variable holding  images being passed from an array

// string function taking in a string
const scroll =  (direction) =>{

  const  { current }  = scroll;
}

const Gallery = () => {

  const scrollRef  = React.useRef(null);

  const scroll =  (direction) => {

    const { current } = scrollRef;

    if(direction === 'left'){
     current.scrollLeft -= 300;

    }else{

    current.scrollLeft  += 300;


    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>

         <SubHeading  title="Instagram"/>
         <h1 className='headtext__cormorant'>Photo Gallery</h1>
         <p className='p__opensans' style={{color:'#AAA',marginTop: '2rem'}}>t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
         <button  type='button' className='custom__button'>View More</button>

      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>


           {/* map function that  extracts images from  the array  */}
          {galleryImages.map((image,index) => (

            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt= "gallery image" />
             
             {/* <BsInstragram className="gallery__image-icon" /> */}

             <FontAwesomeIcon icon={faInstagram} size="2x" className='gallery__image-icon' />



            </div>
            
          ))}

          <div className='app__gallery-images_arrow'>
            <BsArrowLeftShort className="gallery__arrow-icons" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icons" onClick={() => scroll('right')} />



          </div>
        </div>
      </div>

     </div>
  );
} 

export default Gallery