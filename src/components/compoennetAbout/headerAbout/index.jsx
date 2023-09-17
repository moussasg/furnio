import React from 'react'
import Style from "./index.module.css"
import Logonav from "../../../assets/logonav.png"
import Loginimg from "../../../assets/loginimg.png"
import magnifyingglass from "../../../assets/magnifyingglass.png"
import Folow from "../../../assets/folow.png"
import Basket from "../../../assets/basket.png"
import Logout from '../../componenetLogin/rightcomponent/logout.jsx'
export default function Header() {
  return (
    <>
    <div className={Style.corp}>
        <header>
            <nav>
            <div className={Style.myheader}>
                <div className={Style.mynavleft}>
                <div className={Style.mylogonav}> 
                <img src={Logonav}></img>
                <div className={Style.Furnio}>Furnio</div>
                </div>
                </div>
                <div className={Style.navcenterandright}>
                <div className={Style.mynavcenter}>
                    <div className={Style.textenavbar}>Home</div>
                    <div className={Style.textenavbar}>Shop</div>
                    <div className={Style.textenavbar}>About</div>
                    <div className={Style.textenavbar}>Contact</div>
                </div>
                <div className={Style.mynavright}>
                  <img src={Loginimg}></img>
                  <img src={magnifyingglass}></img>  
                  <img src={Folow}></img>  
                  <img src={Basket}></img> 
                  <Logout/> 
                </div>
                </div>
                </div>
            </nav>
        </header>
        </div>
    </>
  )
}
