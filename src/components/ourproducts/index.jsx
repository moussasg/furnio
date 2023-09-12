import React from 'react'
import Style from "./index.module.css"
import espira from "../../assets/espira.png"
import Leviosa from "../../assets/Leviosa.png"
import lolito from "../../assets/lolito.png"
import syltherine from "../../assets/syltherine.png"
export default function Ourproducts() {
  return (
    <div>
        <section>
            <h1>Our Products</h1>
            <br/>
        <div className={Style.imgourproducts}>
          <div>
            <img src={syltherine}></img>
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <h4>Rp 2.500.000</h4>
          </div>
          <div>
          <img src={Leviosa}></img>
            <h4>Leviosa</h4>
            <p>Stylish cafe chair</p>
            <h4>Rp 2.500.000</h4>
          </div>
          <div>
          <img src={lolito}></img>
            <h4>Lolito</h4>
            <p>Luxury big sofa</p>
            <h4>Rp 7.000.000</h4>
          </div>
          <div>
          <img src={espira}></img>
            <h4>Respira</h4>
            <p>Outdoor bar table and stool</p>
            <h4>Outdoor bar table and stool </h4>
          </div>
        </div> 
        </section>
    </div>
  )
}
