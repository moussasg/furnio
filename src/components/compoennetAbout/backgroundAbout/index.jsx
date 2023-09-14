import React from "react";
import Style from "./index.module.css"
export default function Mybackground() {
  return (
    <section className={Style.bgrnd}>
        <div className={Style.Discover}>
            <div className={Style.Discoverdetails}>
                <div className={Style.newariv}>New Arrival</div>
                <div className={Style.h1discover}>
                  Discover Our  <br/>New Collection
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Ut  magnam officia, eveniet minus eaque ipsa</p>
                <button className={Style.buyy}><div className={Style.butnow}>BUY NOW</div></button>
                <br></br>
            </div>
        </div>
    </section>
  );
}
