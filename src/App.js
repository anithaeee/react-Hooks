import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const[count,setcount] = useState(0);
   useEffect(()=>{
     console.log("clicked");
   },[count])
  return (
    <div className="App">
       <div className='container'>
         <h1>{count}</h1>
         <button onClick={(()=>setcount(count+1))}>Click</button>
       </div>
    </div>
  );
}

export default App;
