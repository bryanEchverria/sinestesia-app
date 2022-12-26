import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouterProvider } from "react-router-dom";
import {router} from './router/index'

// COMPONENTS
import NavBar from "../src/components/home/NavBar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <RouterProvider router={router} />
    <main>

    </main>
    </div>
  )
}

export default App
