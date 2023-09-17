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
                <div className={Style.loreum}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ut <br/>elit tellus, luctus nec ullamcorper mattis.</div>
                <button className={Style.buyy}><div className={Style.butnow}>BUY NOW</div></button>
                <br></br>
            </div>
        </div>
    </section>
  );
}
