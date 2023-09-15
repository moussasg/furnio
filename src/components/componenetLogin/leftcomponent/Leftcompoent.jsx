import React from 'react'
import Style from "./index.module.css"
export default function Leftcompoent() {
  return (
    <div className={Style.left}>
    <div className={Style.backgroundimg}> 
    <div className={Style.textinsideimg}>
      <div className={Style.furnio}>
    Furniro
    </div>
    <div className={Style.txtflex}>
        <div>
            <div>
            <div className={Style.abc}>abc.com is the best place to find </div> <br/>
            <div className={Style.abc}>remote talent. We’ve been super </div> <br/>
            <div className={Style.abc}>impress by the quality of applicants</div><br/>
            </div>
            </div>
            <div>
                <div className={Style.ceo}>Madhushan sasanka</div>
                <div className={Style.website}>CEO, abc.com</div>
        </div>
    </div>
    </div>
    </div>
  </div>
  )
}
