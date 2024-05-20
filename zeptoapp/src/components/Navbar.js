import React from 'react'
import './Navbar.css'
function Navbar() {
 
    function popup(){

    }
    function loginpage(){
        document.getElementById("login").style.display="block";
    }
    function loginsubmit() {
      document.getElementById("login").style.display="none";
    }
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-2'>
                <h1>Zepto</h1>
            </div>
            <div className='col-lg-3 mt-4'>
            <p>Opposite Kalanjali,MG Road,labbipet,...<i class="fa-solid fa-angle-down" onClick={popup}></i></p>
            </div>
            <div className='col-lg-5 search'>
            <p><i class="fa-solid fa-magnifying-glass mt-2"></i>  search for</p>
            
            </div>
            <div className='col-lg-1'>
               <div>
                    <i class="fa-regular fa-user mt-3 mx-4" onClick={loginpage}></i>
                </div>
                 <p className='mx-3'>Login</p>
                </div>
            <div className='col-lg-1'>
            <div>
                <i class="fa-solid  fa-cart-shopping mt-3 mx-3"></i>
               </div>
               <p className='mx-3'>Cart</p>
            </div>
            
        </div>
      </div>
      <div>
        <form id='login' className='loginpage'>
          <h1>Zepto Login</h1>
            <input type='number' placeholder='+91 Enter Mobile Number'/><br/>
            <button onClick={loginsubmit}>Continue</button>
        </form>
      </div>
    </div>
  )
}

export default Navbar
