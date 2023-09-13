import React from 'react'
import Style from "./index.module.css"
export default function Navbrar() {
  return (
    <>
<div className={Style.container}>
<div className={Style.logo}>
       <h3 className={Style.funiro}>Funiro.</h3>
       <div className={Style.coloradress}>
        400 University Drive Suite 200 Coral Gables
        <div>FL 33134 USA</div>
        </div>
</div>
  <div className={Style.row}>
    <div className={Style.column}> {/*first column*/}
      <p className={Style.pstyle}>Links</p>
      <p>Home</p>
      <p>Shop</p>
      <p>About</p>
      <p>Contact</p>
    </div>
    <div className={Style.column}> {/*second column*/}
    <div className={Style.helpandpaymen}>
      <p className={Style.pstyle}>Help</p>
      <p>Payment Options</p>
      <p>Returns</p>
      <p>Privacy Policies</p>
      </div>
    </div>
    <div className={Style.column}>
      <div className={Style.newslet}>
        <div className={Style.newplussubsc}>
        <p className={Style.pstyle}>Newsletter</p>
        </div>
      <div className={Style.subscribe}>
       <input type='text' value="Enter Your Email Adress"></input> 
      <p>SUBSCRIBE</p>
      </div>
        </div>
    </div>
  </div>
</div>
<div className={Style.allright}>
    <p>2023 furino. All rights reverved</p>
    </div>
</>
  )
}
