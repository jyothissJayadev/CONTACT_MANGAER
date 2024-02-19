import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = (props) => {
const navigate=useNavigate();
const navigation=()=>{
   
    if(props.name==""||props.email==""){
        return;
     }
    props.addcontact(props.name,props.email)
    navigate("/")
}
  return (
    <div>
       <button type="submit" className="btn addbtn " onClick={navigation}>Add</button>
    </div>
  )
}

export default Button
