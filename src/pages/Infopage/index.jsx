import React, { useEffect } from 'react'
import Header from '../../components/compoennetAbout/headerAbout/index'
import Background from "../../components/compoennetAbout/backgroundAbout/index"
import Range from "../../components/compoennetAbout/Range/index"
import Ourproducts from '../../components/compoennetAbout/ourproducts/index'
import Rooms from "../../components/compoennetAbout/rooms/index"
import Hashtags from '../../components/compoennetAbout/hashtags/index'
import Footer from '../../components/compoennetAbout/footer/index'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/componenetLogin/rightcomponent/autcontext'
export default function index() {
  const navigate = useNavigate()
  const { userToken } = useAuth()
  useEffect(()=> {
  if (!userToken) {
    // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
    navigate('/Home')
  } }, []);
  return (
    <>
    <div>
      <Header/>
      <Background/>
      <br/>
      <br/>
      <Range/>
     <br/>
     <br/>
     <Ourproducts/>
     <br/>
     <br/>
    <Rooms/>
    <br/>
    <Hashtags/>
    <br/>
    <br/>
    <Footer/>
    </div>
      </>
  )
}
