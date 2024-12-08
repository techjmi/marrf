import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import EditEmp from './components/EditEmp';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/emp_edit/:id" element={<EditEmp />} />
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
