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
        <header>
            <nav>
            <div className={Style.myheader}>
                <div className={Style.mynavleft}>
                <div className={Style.mylogonav}> 
                <img src={Logonav}></img>
                <div className={Style.Furnio}>Furnio</div>
                </div>
                </div>
                <div className={Style.centerright}>
                <div className={Style.mynavcenter}>
                    <h3>Home</h3>
                    <h3>Shop</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
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
    </>
  )
}
