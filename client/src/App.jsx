
import { Navigate, Route,  Routes } from 'react-router-dom'
import './App.css'
import { Menu } from './components/Menu'
import { Register } from './components/Register'
import {Login } from './components/Login'
import {Profile } from './components/Profile'
import { AuthProvider } from './context/AuthContext'
import { Public } from './components/Public'
import { Auth } from './service/Auth'
function App() {
 
  return (
    <>
     <Menu/>
    <Routes>
      <Route path="/register" element={<AuthProvider><Register/></AuthProvider>}/>
      <Route path="/login" element={<Public>
        <AuthProvider>
              <Login /></AuthProvider>
            </Public>}/>
      <Route path="/profile" element={<Auth><Profile/></Auth>}/>
      <Route path="*" element={<Navigate/>}/>

      

    </Routes>
    </>
  )
}

export default App
