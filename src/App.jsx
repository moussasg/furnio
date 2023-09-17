import './App.css'
import Home from "./pages/Home/index"
import Signin from "./components/componenetLogin/rightcomponent/signin/index"
import Infopage from "./pages/Infopage/index"
import { Route, Routes } from 'react-router-dom'
import { AuthProvider, useAuth } from './components/componenetLogin/rightcomponent/autcontext';
import { useEffect } from 'react';
function App() {
  const { setUserToken } = useAuth(); // Utilisez le hook pour accéder au contexte
  useEffect(() => {
    const storedToken = localStorage.getItem('jwt'); // Obtenir le token du localStorage
    if (storedToken) {
      // Mettre à jour le token dans le contexte s'il existe dans le localStorage
      setUserToken(storedToken);
    }
  }, []);
  return (
    
    <AuthProvider>
    <>
    <div>
      
    <Routes>
      <Route path='/' element={<Home/>}/> 
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Infopage' element={<Infopage/>}/>
    <Route path='/Signin' element={<Signin/>}/>
    </Routes>
    
    </div>
    
    </>
    </AuthProvider>
  )
}

export default App
