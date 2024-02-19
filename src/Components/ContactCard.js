import React from 'react'
import image from '../img/149071.png'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {

 const {id,name,email}=props.contact
  return (
    <>
    <div className='cotainer contacts'>
      <div className="together">
   
     <img src={image} alt="" />
     <div className="incontacts">
  <Link className='link' to={`/contact/${id}`} state={{contact:props.contact}}>
    
     <p>{name}</p>
   <p>{email}</p>
   </Link>
     </div>
     </div>
     <div className="btnBox">
      <Link className='link' to={'/edit'} state={{contact:props.contact}}>
      <button className=' btn btn-success' onClick={()=>props.edit(id)} >Edit</button>
      </Link>
    
   <button className=' btn btn-danger' onClick={()=>props.clicked(id)} >Delete me</button>
  
     </div>
    
  
    </div>
    </>
  )
}

export default ContactCard
