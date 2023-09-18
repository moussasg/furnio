import React from 'react'
import Style from "./index.module.css"
import imgone from "../../../assets/1.png"
import imgtwo from "../../../assets/2.png"
import imgtree from "../../../assets/3.png"
import imgfor from "../../../assets/4.png"
import imgfive from "../../../assets/5.png"
import imgsix from "../../../assets/6.png"
import imgseven from "../../../assets/7.png"
import imgheight from "../../../assets/8.png"
import nign from "../../../assets/9.png"
export default function Hashtags() {
  return (
    <>
    <section>
        <div className={Style.title}>
        <div className={Style.Share}>Share your setup with</div><br/>
        <div className={Style.furniture}>#FuniroFurniture</div>
        </div>
        <br/>
      <div className={Style.totlagallery}>
    <div className={Style.gallery}>
    <div className={Style.item}> 
    <img src={imgone} alt="Image 1"/>
    </div>
   <div className={Style.item}> 
   <img src={imgtwo} alt="Image 2" style={{ width: '800px' }}/>
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
   <img src={imgheight} alt="Image 8" />
   </div>
   <div className={Style.item}> 
   <img src={nign} alt="Image 9" />
   </div>
    </div>
    </div>
    </section>
    </>
  )
}
