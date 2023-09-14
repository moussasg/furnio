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
                <div className={Style.sametitele}>50+ Beautiful rooms</div><div className={Style.sametitele}>inspiration</div>
                <div  className={Style.subtitle}>Our designer already made a lot of Beautiful</div><div className={Style.subtitle}>prototipe of roomsthat inspire you </div>
               <div> <button className={Style.btn}><h3 style={{ color: 'white' }}>Explore More</h3></button></div>
            </div>
            <div className={Style.imgrooms}>




            <div className={Style.cotainerimg}>
                <img src={Bedrom} ></img> 
                <div className={Style.overlay}>
                     <div><button>Add To  card</button></div>
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
