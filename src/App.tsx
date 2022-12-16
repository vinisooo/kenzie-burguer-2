import React from 'react';
import logo from './logo.svg';
import RouterComp from './Routes';

//TOASTIFY
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const App =()=> {

  return (
    <div className="App">
      <RouterComp/>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
