
import { Navigate, Route,  Routes } from 'react-router-dom'
import './App.css'
import { Menu } from './components/Menu'
import { Register } from './components/Register'
import {Login } from './components/Login'
import {Profile } from './components/Profile'
import { Auth } from './components/Auth'
function App() {
 
  return (
    <>
     <Menu/>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Auth>
              <Login />
            </Auth>}/>
      <Route path="*" element={<Navigate/>}/>
      <Route path="/profile" element={<Profile/>}/>

      

    </Routes>
    </>
  )
}

export default App
