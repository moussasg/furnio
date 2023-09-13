import React from 'react'
import Header from '../../components/compoennetAbout/headerAbout/index'
import Background from "../../components/compoennetAbout/backgroundAbout/index"
import Range from "../../components/compoennetAbout/Range/index"
import Ourproducts from '../../components/compoennetAbout/ourproducts/index'
import Rooms from "../../components/compoennetAbout/rooms/index"
import Hashtags from '../../components/compoennetAbout/hashtags/index'
import Navbrar from '../../components/compoennetAbout/navbar/index'
export default function index() {
  return (
    <>
      <Header/>
      <Background/>
      <br/>
      <br/>
      <Range/>
     <br/>
     <Ourproducts/>
     <br/>
    <Rooms/>
    <br/>
    <Hashtags/>
    <br/>
    <Navbrar/>
      </>
  )
}
