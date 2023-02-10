import { useState } from 'react'
import './App.css'
import { RouterProvider } from "react-router-dom";
import {router} from './router/index'
import DataProvider from './components/context/DataContext.jsx';
function App() {
  return (
    <DataProvider>
    <div className="App">
      <RouterProvider router={ router } />
    </div>
    </DataProvider>
  )
}

export default App
