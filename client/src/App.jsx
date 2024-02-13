
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import { Menu } from './components/Menu'
import { Register } from './components/Register'

function App() {
 
  return (
    <>
     <Menu/>
    <Routes>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
