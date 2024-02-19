import '../Components/App.css';
import React,{useState,useEffect} from 'react';
import {v4 as uuid}from "uuid"
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Button from './Button';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';



function App() {


// search bar funtion
const [searchTerm,setSearchTerm]=useState([""])
const [searchResult,setSearchResult]=useState([""])
 const searchfuntion=(text)=>{
  if(text!=""){
    setSearchTerm(text)
    const searchfilter=contact.filter((contact)=>{
  //  if( Object.values(contact).join("").toLowerCase().includes(text.toLowerCase())){
 return Object.values(contact.name.concat(contact)).join("").toLowerCase().includes(text.toLowerCase())
 
   
    })
    setSearchResult(searchfilter);
  }
  else{
    setSearchResult(contact)
  }
 }

  // setting the contact into the local strorage
  const [contact, setContact] = useState(
    JSON.parse(localStorage.getItem("contact"))??[]
  );

  // delete button funtion
const deletecontact=(id)=>{
  console.log("your wish to delete this contact",id)
  const newContact=contact.filter((contact)=>{
    return contact.id!==id;

  })
  setContact(newContact)
}

// edit page funtion
const edit=(id,name,email)=>{
  console.log("clicked edit",id,name,email);
  const updatedContacts = contact.map((c) => {
    if (c.id === id) {
      return { ...c, name, email };
    }
    return c;
  });

  setContact(updatedContacts);
}

// add contact page function
const addcontact =(name,email)=>{
 
setContact([...contact,{id:uuid(),name:name,email:email,...contact}])
}
useEffect(() => {
  localStorage.setItem("contact", JSON.stringify(contact));
}, [contact]);

// returning the html tag
  return (
 <div >
  <Router>
    <Header/>
  
     
      <Routes>
      <Route exact path='/' Component={()=><ContactList searchfuntion={searchfuntion} contact={contact} deletecontact={deletecontact} edit={edit}/>} ></Route>
      <Route path='/add' Component={()=><AddContact addcontact={addcontact}/>}/>
      <Route path='/none' Component={()=><Button addcontact={addcontact}/>}/>
      <Route path='/contact/:id' Component={()=><ContactDetail/>}/>
      <Route path='/edit' Component={()=><EditContact contact={contact} edit1={edit}/>}/>
      </Routes>
  
   
  
  </Router>
 </div>
  );
}

export default App;
