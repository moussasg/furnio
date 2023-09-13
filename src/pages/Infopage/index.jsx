import React from 'react'
import Header from '../../components/headerAbout'
import Background from "../../components/backgroundAbout"
import Range from "../../components/Range/index"
import Ourproducts from '../../components/ourproducts'
import Rooms from "../../components/rooms/index"
import Hashtags from '../../components/hashtags'
import Navbrar from '../../components/navbar'
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
