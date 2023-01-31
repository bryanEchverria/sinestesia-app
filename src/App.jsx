import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouterProvider } from "react-router-dom";
import {router} from './router/index'
// COMPONENTS
import NavBar from "../src/components/home/NavBar.jsx";
import FooterComponent from './components/FooterComponent.jsx';
import DataProvider from './components/context/DataContext.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <DataProvider>
    <div className="App">
      <NavBar/>
      <RouterProvider router={router} />
      <FooterComponent/>
    </div>
    </DataProvider>
  )
}

export default App
