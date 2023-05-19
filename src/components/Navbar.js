import React, { useState } from 'react';
import './Navbar.css';
import { CgProfile } from 'react-icons/cg';
import Sample from './Products';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpenPro, setisDropdownOpenPro] = useState(false);
  const [isDropdownOpenOrd, setisDropdownOpenOrd] = useState(false);
  const [isDropdownOpenPay, setisDropdownOpenPay] = useState(false);

  const toggleDropdown = () => {
    setisDropdownOpenPro(!isDropdownOpenPro);
  };
  const toggleDropdownOrd = () => {
    setisDropdownOpenOrd(!isDropdownOpenOrd);
  };
  const toggleDropdownPay= () => {
    setisDropdownOpenPay(!isDropdownOpenPay);
  };

  return (
    <>
      <nav>
        <Link href="index.html">
          <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path>
            <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path>
          </svg>
        </Link>
        <div className='ul'>
          <ul className='navbar'>
            <li>
              <div className='dropdown'>
                <Link to="/products" onClick={toggleDropdown}>
                  PRODUCTS
                  <i className={isDropdownOpenPro ? 'fas fa-caret-up' : 'fas fa-caret-down'}></i>
                </Link>
                {isDropdownOpenPro && (
                  <div className='dropdown-content'>
                    <Link to="/products">Add New Product</Link>
                    <Link to="/products">View/Edit</Link>
                    {/* <Link to="/products">Product 3</Link> */}
                  </div>
                )}
              </div>
            </li>
            
            <li>
              <div className='dropdown'>
                <Link to="/orders" onClick={toggleDropdownOrd}>
                  ORDERS
                  <i className={isDropdownOpenOrd ? 'fas fa-caret-up' : 'fas fa-caret-down'}></i>
                </Link>
                {isDropdownOpenOrd && (
                  <div className='dropdown-content'>
                    <Link to="/products">View All Orders</Link>
                    {/* <Link to="/products">View/Edit</Link> */}
                    {/* <Link to="/products">Product 3</Link> */}
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className='dropdown'>
                <Link to="/payment" onClick={toggleDropdownPay}>
                  PAYMENT
                  <i className={isDropdownOpenPay ? 'fas fa-caret-up' : 'fas fa-caret-down'}></i>
                </Link>
                {isDropdownOpenPay && (
                  <div className='dropdown-content'>
                    <Link to="/products">View All Transactions</Link>
                    <Link to="/products">Withdraw</Link>
                    {/* <Link to="/products">View/Edit</Link> */}
                    {/* <Link to="/products">Product 3</Link> */}
                  </div>
                )}
              </div>
            </li>
          </ul>
          <ul>
            <li><Link to='profile' className='profile'><CgProfile /></Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        {/* <Route exact path='/products' element={<Sample />} /> */}
        {/* <Route exact path='/orders' element={<Sample />} /> */}
        {/* <Route exact path='/payment' element={<Sample />} /> */}
      </Routes>
    </>
  );
};

export default Navbar;
