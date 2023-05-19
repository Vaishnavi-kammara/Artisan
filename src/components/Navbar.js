import React from 'react'
import './Navbar.css';
import {CgProfile} from 'react-icons/cg'
import Sample from './Sample';
const Navbar = () => {
  return (
    <div>
        <nav>
            <a href="index.html">
            <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg>
            </a>
            <div className='ul'>
               <ul className='navbar'>
                    <li><a href={<Sample />}>PRODUCTS</a></li>
                    <li><a href="index.html">ORDERS</a></li>
                    <li><a href="index.html">PAYMENT</a></li>
                   
               </ul>
               <ul>
                  <li><a href='index.html' className='profile'><CgProfile /></a></li>
               </ul>
            </div>
            {/* <div id='mobile'>
              <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                <i className='fas fa-bars'></i>
                <i className='fas fa-times'></i>
            </div> */}
        </nav>
    </div>
  )
}

export default Navbar
