import React from 'react'
import Style from "./index.module.css"
import imgone from "../../assets/1.png"
import imgtwo from "../../assets/2.png"
import imgtree from "../../assets/3.png"
import imgfor from "../../assets/4.png"
import imgfive from "../../assets/5.png"
import imgsix from "../../assets/6.png"
import imgseven from "../../assets/7.png"
import imgheight from "../../assets/8.png"
import nign from "../../assets/9.png"
export default function Hashtags() {
  return (
    <>
    <section className={Style.mysec}>
        <div className={Style.title}>
        <h1 style={{ color: '#616161' }}>Share your setup with</h1><br/>
        <h1 style={{ color: '#3A3A3A' }}>#FuniroFurniture</h1>
        </div>
        <br/>
    <div className={Style.gallery}>
    <div className={Style.item}> 
    <img src={imgone} alt="Image 1"/>
    </div>
   <div className={Style.item}> 
   <img src={imgtwo} alt="Image 2"/>
   </div>
   <div className={Style.item}> 
   <img src={imgtree} alt="Image 3"/>
   </div>
   <div className={Style.item}> 
   <img src={imgfor} alt="Image 4"/>
   </div>
   <div className={Style.item}> 
   <img src={imgfive} alt="Image 5"/>
   </div>
   </div>
   <div className={Style.gallery}>
   <div className={Style.item}> 
   <img src={imgsix} alt="Image 6"/>
   </div>
   <div className={Style.item}> 
   <img src={imgseven} alt="Image 7"/>
   </div>
   <div className={Style.item}> 
   <img src={imgheight} alt="Image 8"/>
   </div>
   <div className={Style.item}> 
   <img src={nign} alt="Image 9"/>
   </div>
    </div>
    </section>
    </>
  )
}
