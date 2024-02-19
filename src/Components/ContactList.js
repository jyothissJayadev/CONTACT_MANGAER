import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ContactList = (props) => {
 const SearchText= "";
  const [state, setState] = useState({ SearchText });

  // search button 
 
  // delete button
  const deletecontact=(id)=>{
    props.deletecontact(id);
    console.log("helllo")
  }
  const edit=(id)=>{
    props.edit(id);
    console.log("helllo")
  }
const rendercontact=props.contact.map((e)=>{
  return (
    <ContactCard key={props.contact.id} contact={e} clicked={deletecontact} edit={edit}/>
  )

})
  return (
   <>
   <br />
   <div className='equal'>
   <h1 >Contact List </h1>
   
   <Link className='link' to='/add'>
   <button className='btn addbtn'>Add Contact</button></Link>
 
   </div>
   <hr />
  <div className="searchBox">
 
  </div>
   
    <div>{props.contact.length>0?rendercontact:"no search found"}</div>
    </>
  )
}

export default ContactList
    