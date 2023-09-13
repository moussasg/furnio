import React from 'react';
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
  return (
    <div>
      <section>
        <div className={Style.Our}>Our Products</div>
        <br/>
        <div className={Style.row}> {/*the same style for two row */}
          <div className={Style.rowoneimg}>
            <div>
              <img src={syltherine} alt="syltherine"></img>
              <div className={Style.containerproducts}>
                <h3>Syltherine</h3>
                <p>Stylish cafe chair</p>
                <h3>Rp 2.500.000</h3>
              </div>
            </div>
            <div>
              <img src={Leviosa} alt="Leviosa"></img>
              <div className={Style.containerproducts}>
                <h3>Leviosa</h3>
                <p>Stylish cafe chair</p>
                <h3>Rp 2.500.000</h3>
              </div>
            </div>
            <div>
              <img src={lolito} alt="lolito"></img>
              <div className={Style.containerproducts}>
                <h3>Lolito</h3>
                <p>Luxury big sofa</p>
                <h3>Rp 7.000.000</h3>
              </div>
            </div>
            <div>
              <img src={espira} alt="espira"></img>
              <div className={Style.containerproducts}>
                <h3>Respira</h3>
                <p>Outdoor bar table and stool</p>
                <h3>Outdoor bar table and stool</h3>
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
                <h3>Grifo</h3>
                <p>Night lamp</p>
                <h3>Rp 1.500.000</h3>
              </div>
            </div>
            <div>
              <img src={mugo} alt="mugo"></img>
              <div className={Style.containerproducts}>
                <h3>Muggo</h3>
                <p>Small mug</p>
                <h3>Rp 150.000</h3>
              </div>
            </div>
            <div>
              <img src={pingky} alt="pingky"></img>
              <div className={Style.containerproducts}>
                <h3>Pingky</h3>
                <p>Cute bed set</p>
                <h3>Rp 7.000.000</h3>
              </div>
            </div>
            <div>
              <img src={potty} alt="potty"></img>
              <div className={Style.containerproducts}>
                <h3>Potty</h3>
                <p>Minimalist flower pot</p>
                <h3>Rp 500.000</h3>
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
