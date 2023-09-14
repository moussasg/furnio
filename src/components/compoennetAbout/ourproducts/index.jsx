import React, { useState } from 'react';
import Style from "./index.module.css";
import espira from "../../../assets/espira.png";
import Leviosa from "../../../assets/Leviosa.png";
import lolito from "../../../assets/lolito.png";
import syltherine from "../../../assets/syltherine.png";
import grifo from "../../../assets/Imagesgrifo.png";
import mugo from "../../../assets/imgmugo.png";
import pingky from "../../../assets/image 7pingky.png";
import potty from "../../../assets/image 8potty.png";

export default function Ourproducts() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
<div>
     <section>
        <div className={Style.Our}>Our Products</div>
        <br/>
        <div className={Style.row}> {/*the same style for two row */}
          <div className={Style.rowoneimg}>
            <div className={Style.backgroundgray}>
              <img src={syltherine} alt="syltherine"></img>
              <div className={Style.containerproducts}>
                <div className={Style.title}>Syltherine</div>
                <div className={Style.gray}>Stylish cafe chair</div>
                <div className={Style.title}>Rp 2.500.000</div>
              </div>
            </div>
            <div className={Style.pourcent}>


            <div className={Style.cotainerimg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={Style.innerContainer}>
                <img src={Leviosa} alt="Leviosa"></img>
              {isHovered && (
              <div className={Style.overlay}>
                      <button className={Style.addtocard}><p>Add To Card </p></button>
                  </div>
                )}
              <div className={Style.containerproducts}>
                <div className={Style.title}>Leviosa</div>
                <div className={Style.gray}>Stylish cafe chair</div>
                <div className={Style.title}>Rp 2.500.000</div>
                </div>
                </div>
</div>




            </div>
            <div>
              <img src={lolito} alt="lolito"></img>
              <div className={Style.containerproducts}>
                <div className={Style.title}>Lolito</div>
                <div className={Style.gray}>Luxury big sofa</div>
                <div className={Style.title}>Rp 7.000.000</div>
              </div>
            </div>
            <div>
              <img src={espira} alt="espira"></img>
              <div className={Style.containerproducts}>
                <div className={Style.title}>Respira</div >
                <div className={Style.gray}>Outdoor bar table and stool</div >
                <div className={Style.title}>Rp 500.000</div >
              </div>
            </div>
          </div> 
        </div>
        <br/>
        <br/>
        <div className={Style.row}>
          <div className={Style.rowtwoimg}>
            <div>
              <img src={grifo} alt="grifo"></img>
              <div className={Style.containerproducts}>
                <div className={Style.title}>Grifo</div>
                <div className={Style.gray}>Night lamp</div>
                <div className={Style.title}>Rp 1.500.000</div>
              </div>
            </div>
            <div>
              <img src={mugo} alt="mugo"></img>
              <div className={Style.containerproducts}>
                <div className={Style.title}>Muggo</div>
                <div className={Style.gray}>Small mug</div>
                <div className={Style.title}>Rp 150.000</div>
              </div>
            </div>
            <div>
              <img src={pingky} alt="pingky"></img>
              <div className={Style.containerproducts}>
                <div className={Style.title}>Pingky</div>
                <div className={Style.gray}>Cute bed set</div>
                <div className={Style.title}>Rp 7.000.000</div>
              </div>
            </div>
            <div>
              <img src={potty} alt="potty"></img>
              <div className={Style.containerproducts}>
                <div className={Style.title}>Potty</div>
                <div className={Style.gray}>Minimalist flower pot</div>
                <div className={Style.title}>Rp 500.000</div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className={Style.btn}>
        <button><h3>Show More</h3></button>
        </div>
      </section>
    </div>
  )
}
