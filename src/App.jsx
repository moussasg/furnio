import './App.css'
import Loginpage from "./pages/loginpage/index"
import Infopage from "./pages/Infopage/index"
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <div>
    <Routes>
    <Route path='/Infopage' element={<Infopage/>}/>
    <Route path='/Loginpage' element={<Loginpage/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
