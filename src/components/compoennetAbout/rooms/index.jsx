import React from 'react'
import Style from "./index.module.css"
import Bedrom from "../../../assets/Rectangle 24bedroom.png"
import livingroom from "../../../assets/Rectangle 25cuisin.png"
export default function Rooms() {
  return (
    <div>
        <section>
            <div className={Style.cont}>
            <div className={Style.titlerooms}>
                <div><h1>50+ Beautiful rooms </h1></div><div><h1>inspiration</h1></div>
                <div><p>Our designer already made a lot of Beautiful</p></div><div><p>prototipe of roomsthat inspire you </p></div>
               <div> <button className={Style.btn}><h3 style={{ color: 'white' }}>Explore More</h3></button></div>
            </div>
            <div className={Style.imgrooms}>
            <div className={Style.cotainerimg}>
                <img src={Bedrom} ></img> 
                <div className={Style.overlay}>
                     <div>01 --- Bed Room</div>
                     <div><h2>Inner Place</h2></div>
                    </div>
                    </div>
                <img src={livingroom} height="500px"></img>
            </div>
            </div>
        </section>
    </div>
  )
}
