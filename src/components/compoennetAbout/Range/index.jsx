import React from 'react'
import Style from "./index.module.css"
import bedrom from "../../../assets/bedrom.png"
import living from "../../../assets/living.png"
import dining from "../../../assets/dining.png"
export default function Range() {
  return (
    <>
    <section>
      <div className={Style.titleandimg}>
        <div className={Style.title}>
        <div className={Style.Browse}>Browse The Range</div>
        <div className={Style.loreum}>loreum ipsum dolor sit amet</div>
        </div>
        <br/>
        <br/>
        <div className={Style.imgtitle}>
        <div className={Style.flex}>
          <img src={dining}></img>
          <div className={Style.subtitle}>Dining</div >
          </div>
        <div className={Style.flex}><img src={living}></img><div className={Style.subtitle}>living</div ></div>
        <div className={Style.flex}><img src={bedrom}></img><div className={Style.subtitle}>bedrom</div ></div>
        </div>
        </div>
    </section>
    </>
  )
}
