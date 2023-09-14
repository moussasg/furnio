import React from 'react'
import Style from "./index.module.css"
export default function Leftcompoent() {
  return (
    <div className={Style.left}>
    <div className={Style.backgroundimg}> 
    <div className={Style.textinsideimg}>
      <div className={Style.furnio}>
    <h1>Furniro</h1>
    </div>
    <div className={Style.txtflex}>
        <div>
            <h2>
            <div>abc.com is the best place to find </div> <br/>
            <div>remote talent. We’ve been super </div> <br/>
            <div>impress by the quality of applicants</div><br/>
            </h2>
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
