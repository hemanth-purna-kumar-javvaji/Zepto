import React from 'react'
import img1 from './images/img1.avif'
import './Body.css'
function Body() {
  return (
    <div>
        <div className='body-desc'>
            <img width="250px" height="300px" src={img1}/>
            <h4>Sit Tight! We’re Coming Soon!</h4>
            <p>
            Our team is working tirelessly to bring 10 minute deliveries to your location
            </p>
            <h3>Follow Us</h3>
            <p>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
            </p>
        </div>
    </div>
  )
}

export default Body
