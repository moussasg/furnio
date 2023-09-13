import React from 'react'
import Style from "./index.module.css"
import bedrom from "../../../assets/bedrom.png"
import living from "../../../assets/living.png"
import dining from "../../../assets/dining.png"
export default function Range() {
  return (
    <>
    <section>
        <div className={Style.title}>
        <h1>Browse The Range</h1>
        <p>loreum ipsum dolor sit amet</p>
        </div>
        <br></br>
        <div className={Style.imgtitle}>
        <div><img src={dining}></img><h4>Dining</h4></div>
        <div><img src={living}></img><h4>living</h4></div>
        <div><img src={bedrom}></img><h4>bedrom</h4></div>
        </div>
    </section>
    </>
  )
}
