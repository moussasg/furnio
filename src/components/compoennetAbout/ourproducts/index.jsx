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
import fifty from "../../../assets/fifty.png";
import logonew from "../../../assets/Newnew.png";
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
        <br/>
        <div className={Style.row}> {/*the same style for two row */}
          <div className={Style.rowoneimg}>

          <div className={Style.cotainerimg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={Style.innerContainer}>
            <div style={{ textAlign: 'right' }}>
            <img style={{height:'50px' , width:'50px'}} src={fifty}></img>
            </div>
              <img src={syltherine} alt="syltherine"></img>
              {isHovered && (
              <div className={Style.overlay}>
                      <button className={Style.addtocard}><p>Add To Card</p></button>
                  </div>
                )}
              <div className={Style.containerproducts}>
                <div className={Style.title}>syltherine</div>
                <div className={Style.gray}>Stylish cafe chair</div>
                <div className={Style.title}>Rp 2.500.000</div>
                </div>
                </div>
              </div>


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
              
  <div className={Style.cotainerimg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={Style.innerContainer}>
                <img src={lolito} alt="Leviosa"></img>
              {isHovered && (
              <div className={Style.overlay}>
                      <button className={Style.addtocard}><p>Add To Card </p></button>
                  </div>
                )}
              <div className={Style.containerproducts}>
                <div className={Style.title}>Lolito</div>
                <div className={Style.gray}>Luxury big sofaRp </div>
                <div className={Style.title}>Rp 7.000.000</div>
                </div>
                </div>
              </div>

              <div className={Style.cotainerimg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={Style.innerContainer}>
                <img src={espira} alt="Leviosa"></img>
              {isHovered && (
              <div className={Style.overlay}>
                      <button className={Style.addtocard}><p>Add To Card </p></button>
                  </div>
                )}
              <div className={Style.containerproducts}>
                <div className={Style.title}>Respira</div>
                <div className={Style.gray}>Outdoor bar table and stool</div>
                <div className={Style.title}>Rp 500.000</div>
                </div>
                </div>
              </div>

          </div> 
        </div>
        <br/>
        <br/>
        <div className={Style.row}>
          <div className={Style.rowtwoimg}>
             <div className={Style.cotainerimg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={Style.innerContainer}>
                <img src={grifo} alt="Grifo"></img>
              {isHovered && (
              <div className={Style.overlay}>
                      <button className={Style.addtocard}><p>Add To Card </p></button>
                  </div>
                )}
              <div className={Style.containerproducts}>
                <div className={Style.title}>Grifo</div>
                <div className={Style.gray}>Night lamp</div>
                <div className={Style.title}>Rp 1.500.000</div>
                </div>
                </div>
              </div>

              <div className={Style.cotainerimg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={Style.innerContainer}>
                <img src={mugo} alt="Leviosa"></img>
              {isHovered && (
              <div className={Style.overlay}>
                      <button className={Style.addtocard}><p>Add To Card </p></button>
                  </div>
                )}
              <div className={Style.containerproducts}>
                <div className={Style.title}>Muggo</div>
                <div className={Style.gray}>Small mug</div>
                <div className={Style.title}>Rp 150.000</div>
                </div>
                </div>
              </div>

              <div className={Style.cotainerimg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={Style.innerContainer}>
                <img src={pingky} alt="Leviosa"></img>
              {isHovered && (
              <div className={Style.overlay}>
                      <button className={Style.addtocard}><p>Add To Card </p></button>
                  </div>
                )}
              <div className={Style.containerproducts}>
                <div className={Style.title}>Pingky</div>
                <div className={Style.gray}>Cute bed set</div>
                <div className={Style.title}>Rp 7.000.000</div>
                </div>
                </div>
              </div>


             <div className={Style.cotainerimg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={Style.innerContainer}>
            <div style={{ textAlign: 'right' }}>
            <img style={{height:'50px' , width:'50px'}} src={logonew}></img>
           
                <img src={potty} alt="Leviosa"></img>
                </div>
              {isHovered && (
              <div className={Style.overlay}>
                      <button className={Style.addtocard}><p>Add To Card </p></button>
                  </div>
                )}
              <div className={Style.containerproducts}>
                <div className={Style.title}>Potty</div>
                <div className={Style.gray}>Minimalist flower pot</div>
                <div className={Style.title}>Rp 500.000</div>
                </div>
                </div>
              </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className={Style.btn}>
        <button className={Style.btnshowmore}><h3>Show More</h3></button>
        </div>
      </section>
    </div>
  )
}
