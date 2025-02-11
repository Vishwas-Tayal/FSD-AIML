import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = () => {
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[name,setName] = useState();
    function getData(){
        alert("Jai Shree Ram");
    }

  return (
    <div>
        <form>
  <div className="form-group">
    <label for="exampleInputName1">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name"/>
    <small id="nameHelp" className="form-text text-muted" ></small>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted" >We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={getData}>Submit</button>
</form>
    </div>
  )
}

export default Registration