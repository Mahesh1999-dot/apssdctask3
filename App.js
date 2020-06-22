import React from 'react';
import profile from './profile.svg';
import dynamic from './js/dynamic.js';
import dynamic from './json/dynamic.json';
//import logo from './logo.svg';
import './App.css';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
{

}
<Home/> 
    </div>
        );
}

let Home=() =>{
  let profiles=data.profile;
  console.log(profiles);

  return(
  <div className="row ">
  {profiles.map((values)=>(
    <div className="card ">
       <div className="card-body text-center">
       <img src={profileIcon} alt="Profile Icon"style={{width:"25%"}}/>
       <h2>{values.basics.name}</h2>
       <h4 className="text-secondary">{values.basics.role}</h4>
       <a href={"tel:"+values.basics.phone}>
       <h4>{values.basics.phone}</h4>
       </a>
       <a href={"mailto:"+values.basics.email}>
       <h5>{values.basics.email}</h5>
       </a>
       </div>
    </div>
    ))}
  </div>
  )
}
export default App;
