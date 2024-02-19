import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
class AddContact extends React.Component {

  state={
    name:"",
    email:""
  };

  add=(e)=>{


    if(this.state.name==""||this.state.email==""){
       alert("fill the name and email");
       return;
    }
    this.props.addcontact(this.state.name,this.state.email) 
    this.setState({name:"",email:""})
   
  
  
  }
  

  render(){
  return (
   

<div className="mainCon">
  
<div className="backBtn">
    <Link to="/">
        <button className="btn btn-danger">Back</button>
            </Link></div>
<form onSubmit={this.add}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name="name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" name="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} className="form-control" id="exampleInputPassword1"/>
  </div>
  <Button name={this.state.name} email={this.state.email} addcontact={this.add}/>

</form>
</div>
 )
}
}

export default AddContact
