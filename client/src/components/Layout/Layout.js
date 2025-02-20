import React from 'react';
import Home from '../../pages/Home/Home';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import './Layout.css';
const Layout = () => {
 return (
  <>
  <div className='sidebar-section'>
<div className='sidebar'>
 <div className='sidebar-toggle-icons'>
<p>
<IoMdArrowDropdownCircle size={50}/>
</p>
 </div>
 <div className='container'>
<Home/>
 </div>

</div>
  </div>
  
  </>
 );
};

export default Layout;