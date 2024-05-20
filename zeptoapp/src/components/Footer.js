import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
          <div className='container-fluid mt-3'>
            <div className='row'>
            <div className='col-lg-3 mt-4'>
                <h1 className='mb-3'>Zepto</h1>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <p className='mt-3'>@KiranKart Technologies Private Limited</p>
            </div>
            <div className='col-lg-3'>
            <a href='#'> <h5>Home</h5></a>
            <a href='#'> <h5>Delivery Areas</h5></a>
            <a href='#'><h5>careers</h5></a>
            <a href='#'> <h5>Customer Support</h5></a>
            <a href='#'><h5>Press</h5></a>
            </div>
            <div className='col-lg-3'>
            <a href='#'> <h5>Privacy Policy</h5></a>
            <a href='#'> <h5>Terms Of Use</h5></a>
            <a href='#'><h5>Responsible Disclosure Policy</h5></a>
            <a href='#'> <h5>Mojo- aZepto Blog</h5></a>
            </div>
            <div className='col-lg-3 mt-4'>
                    <h4>Download App</h4>
                    <a href='#'><h5><i class="fa-brands fa-google-play"></i> Get it from Play store</h5></a>
                    <a href='#'><h5><i class="fa-brands fa-apple"></i> Get it on AppStore</h5></a>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
