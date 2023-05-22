
import React from 'react'
import { Carousel,Button } from 'bootstrap'
import './Login.css'
// setInterval(function() {
//     let currentSlide = document.querySelector('.carousel-item.active');
//     let nextSlide = currentSlide.nextElementSibling;

//     if (!nextSlide) {
//       nextSlide = document.querySelector('.carousel-item:first-child');
//     }

//     currentSlide.classList.remove('active');
//     nextSlide.classList.add('active');
//   }, 3000);

const Login = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  
    <div class="carousel-item">
      <img src="https://picsum.photos/id/456/1200/600" class="d-block w-100" alt="..."/>
    </div>
   
  </div>
 <form className='login-card'>
    <div className='card-body'>
        <h1 className='card-title'>LOGIN</h1>
    </div>
<div className='phone'>
<label for="Phone num" class="form-label">Phone number</label>
<br/>
  <input type="phone" class="form-control" id="phonenum" placeholder="1234567890"/>
</div>
 <div className='pass'>
<label for="Password" class="form-label">OTP</label>
<br/>
  <input type="password" class="form-control" id="pass" placeholder="**********"/>
 </div>
 <button class="btn btn-primary" type="submit">Login me!</button>
  </form>
</div>
  )
}

export default Login;
