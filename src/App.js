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
         <h1> React Tutorial{count}</h1>
         <button onClick={(()=>setcount(count+1))} style={{height:'40px',width:'100px',backgroundColor:'blue',borderRadius:'5px'}}>Click</button>
       </div>
    </div>
  );
}

export default App;
