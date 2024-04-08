import './index.css'
import { BsSearch } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";

const Header =()=>(
    <nav className="nav-header">
        <div className='nav-logo-item'>
      <img src='https://cdn.vectorstock.com/i/500p/88/58/laurel-wreath-simple-concept-logo-vector-4028858.jpg' alt ='logo' className='logo-img'/>
      <h1 className='logo-name'>LOGO</h1>
      
      <div className='icon-con'>
      <BsSearch className='nav-icon'/>
      <BsSuitHeart className='nav-icon'/>
      <RiShoppingBagLine className='nav-icon'/>
      <CgProfile className='nav-icon-profile'/>
      <p className='Eng-heading'>ENG<span><BsChevronDown/></span></p>
      
    
      </div>
      
      </div>
      <ul className='nav-items-tabs'>
        <li className='nav-items-tab-name'>SHOP</li>
        <li className='nav-items-tab-name'>SKILLS</li>
        <li className='nav-items-tab-name'>STOTRES</li>
        <li className='nav-items-tab-name'>ABOUT</li>
        <li className='nav-items-tab-name'>CONTACT US</li>
      </ul>
     <hr className='line'/>
  </nav>
  

)

export default Header