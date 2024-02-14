
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import { Menu } from './components/Menu'
import { Register } from './components/Register'
import {Login } from './components/Login'
function App() {
 
  return (
    <>
     <Menu/>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
