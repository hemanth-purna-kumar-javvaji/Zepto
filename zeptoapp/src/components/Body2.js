import React from 'react'
import './Body2.css'
import img2 from './images/img2.svg'
import img3 from './images/img3.svg'
import img4 from './images/img4.svg'
function Body2() {
  return (
    <div className='body2-desc'>
        <h4>How it Works</h4>
      <div className='container mt-5'>
        <div className='row'>
            <div className='col-lg-4 card'>
                <div>
                    <img src={img2}/>
                    <h3>open the app</h3>
                    <p>Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more</p>

                </div>
            </div>
            <div className='col-lg-4 card '>
                <img src={img3}/>
                <h3>
                    Place the order
                </h3>
                <p>Add your favourite items to the cart & avail the best offers</p>
            </div>
            <div className='col-lg-4 card'>
                <img src={img4}/>
                <h3>Get Free Delivery</h3>
                <p>Experience lighting-fast speed & get all your items delivered in 10 minutes</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Body2
