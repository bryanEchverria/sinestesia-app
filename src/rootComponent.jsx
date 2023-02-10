import { useState } from 'react'
import { Outlet } from 'react-router-dom';
// COMPONENTS
import NavBar from "./components/home/NavBar.jsx";
import FooterComponent from './components/FooterComponent.jsx';

const RootComponent = ()=>{
  return(
    <div className="rootComponet">
      <NavBar/>
      <Outlet/>
      <FooterComponent/>
    </div>
  )
}


export default RootComponent;