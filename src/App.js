import React from 'react';
import Navbar from "./components/Navbar";
function App(){
return (
    <div className="App">
    
   <Navbar />
   <div className="page">
   <div className="comingsoon">
  <div id="awesome" >SOMETHING AWESOME IS COMING SOON
  </div>

  <div><p id="para" >Your all-in-one affiliate marketting tracking software track, automate
  and optimize your campaigns</p>
   </div>
   </div>

   <div className="button">
   <button className="btn btn-block bg-white p-2 m-2">
  <p className="time">7<p className="timer"> Days</p></p>
   </button>
   <button className="btn btn-block bg-white p-2 m-2">
  <p className="time"> 24<p className="timer"> Hours</p></p>
   </button>
   <button className="btn btn-block bg-white p-2 m-2">
  <p className="time"> 54 <p className="timer"> Minutes</p></p>
   </button>
   <button className="btn btn-block bg-white p-2 m-2">
   <p className="time">11<p className="timer"> Seconds</p></p>
   </button>
   </div>

  <div>
<form className="form" id="form">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email here" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>

   </div>
  
  </div>
  );
}

export default App;
