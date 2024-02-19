import React from 'react'
import user from '../img/user.webp'
import { Link, useLocation } from 'react-router-dom'

const ContactDetail = (props) => {
const location=useLocation();
console.log(location.state.contact.name)
   
  return (
    <>
    <div className="backBtn">
    <Link className='link' to="/">
        <button className="btn btn-danger">Back</button>
            </Link></div>
    <div className='boxContainer'>
        <div className="imageBox">
            <img src={user} alt="" />
        </div>
        <div className="downBox">
        <h1>{location.state.contact.name}</h1>
     <h3>{location.state.contact.email}</h3>
        </div>
     
    </div>
    </>
  )
}

export default ContactDetail
