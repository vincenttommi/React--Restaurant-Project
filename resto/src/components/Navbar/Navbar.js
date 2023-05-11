import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import './Navbar.css';
import images from '../../constants/images';
const Navbar = () => (
  <nav className='app_navbar'>
  <div className='app_navbar-logo'>
    <img src={images.gericht} alt='app logo'/>
  </div>
  <ul className='app_navbar_links'>
  <li className='p_opensans'><a href='#home'>Home</a> </li>
  <li className='p_opensans'><a href='#about'>About</a> </li>
  <li className='p_opensans'><a href='#menu'>Menu</a> </li>
  <li className='p_opensans'><a href='#awards'>Awards</a> </li>
  <li className='p_opensans'><a href='#contact'>Contact</a> </li>

  </ul>

  {/* login div */}

  <div  className='app_navbar_logins'>
    <a href='#login ' className='p_opensans'>Login/Register</a>

<a href='#login' className='p_opensans'>Book Table</a>
  </div>

<div className='app_navbar-smallscreen'>

  <GiHamburgerMenu color='#fff' fontSize={27}  onClick={()=>{}}></GiHamburgerMenu>

</div>

{/* another div */}

<div className='app_navbar-smallscreen_overlay flex_center slide_bottom'>
 <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={()=>{}}></MdOutlineRestaurantMenu>




<ul className='app_navbar_smallscreen'>
  <li className='p_opensans'><a href='#home'>Home</a> </li>
  <li className='p_opensans'><a href='#about'>About</a> </li>
  <li className='p_opensans'><a href='#menu'>Menu</a> </li>
  <li className='p_opensans'><a href='#awards'>Awards</a> </li>
  <li className='p_opensans'><a href='#contact'>Contact</a> </li>

  </ul>






</div>


  </nav>
);

export default Navbar;
