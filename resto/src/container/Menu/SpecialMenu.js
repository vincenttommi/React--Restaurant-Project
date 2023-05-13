import React from 'react';
import { images,data } from '../../constants';
import { SubHeading,MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => {


return(
  <div className='app__specialMenu flex__center section__padding ' id='menu'>
    <div className='app__specialMenu-title'>

      <SubHeading title="Menu that fits your palatte "/>
      <h1 className='headtext__'cormorant>Today's Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
    <div className='app__specialMenu-menu_wine flex__center' ></div>
     <p className='app__specialMenu_menu_heading'>Wine && Beer</p>
     <div className='app__specialMenu_menu_items'>
{/* accessing the data and rendering it in specialmenu section */}
      {data.wines.map((wine, index)=>(

         <p>{wine.title}</p>
      ))}

     </div>
    </div>

    <div className='app__specialMenu-menu_img'>
      <img src={images.menu} alt="menu img"/>
      <div className='app__specialMenu-menu_cocktails flex__center' ></div>
     <p className='app__specialMenu_menu_heading'>Wine && Beer</p>
     <div className='app__specialMenu_menu_items'>
{/* accessing the data and rendering it in specialmenu section */}
      {data.cocktails.map((cocktail, index)=>(

         <p>{cocktail.title}</p>
      ))}

     </div>

    </div>

   <div style={{marginTop:'15px'}}>
    <button type='button' className='custome__button'>View More</button>

   </div>
  </div>
);
}
export default SpecialMenu;
