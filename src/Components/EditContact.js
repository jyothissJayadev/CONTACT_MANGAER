import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const EditContact = (props) => {
  const navigate=useNavigate();

  const location = useLocation();
  const { id, name, email } = location.state.contact;
  
  const [state, setState] = useState({ id, name, email });

  const edit = (e) => {
    e.preventDefault();
    if (state.name === '' || state.email === '') {
     
      alert('Please fill in the name and email');
      return;
    }
    props.edit1(state.id,state.name, state.email);
    setState({ id: '', name: '', email: '' });
    navigate('/')

  };

  return (
    <div className="mainCon">
    <div className="backBtn">
    <Link className='link' to="/">
        <button className="btn btn-danger">Back</button>
            </Link></div>
      <form onSubmit={edit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className=" btn addbtn">Edit</button>
      </form>
    </div>
  );
};

export default EditContact;
