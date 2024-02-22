import{useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import {SyncLoader}from 'react-spinners';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Home';
import Barrrr from './Barrrr';

function App() {

  const [loading , setloading]=useState(false)
  useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
    setloading(false);}
    ,1000);
  },[])
  return (
    <div> 
      <BrowserRouter>
     
      {
      loading ?
     <div className='preloader'>
              <SyncLoader color="#ed221a" cssOverride={{}}  margin={18}   size={50} />

            </div> 
             :
             <>
      
             <Barrrr/>
            <Routes>
              
            
                <Route path="/" element={<Home />} />
              </Routes>
              </> }

 

      </BrowserRouter>
      
   </div>
  );
}

export default App;
