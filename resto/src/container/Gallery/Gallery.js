import React from 'react'
import './Gallery.css';

import {SubHeading} from  '../../components';
import { images} from '../../constants';
import {BsInstragram,BsArrowLeftShort,BsArrowLeftRightShort} from  'react-icons/bs';

const scroll =  (direction) =>{

  const  { current }  = scrollRef;
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
          <div className='app__gallery-images_arrow'>
            <BsArrowLeftShort className="gallery__arrow-icons" onClick={() => scroll('left')} />
            <BsArrowLeftRightShort className="gallery__arrow-icons" onClick={() => scroll('right')} />



          </div>
        </div>
      </div>

     </div>
  )
}   

export default Gallery