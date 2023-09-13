import React from 'react'
import Ui from "./ui"
import Style from "./index.module.css"
import { Route , Routes} from 'react-router-dom';
export default function Rightcomponenet() {
    const hand = () => {
    window.location.replace('http://localhost:5173/Infopage');

    }
  return (
    <>
    <div className={Style.right}>  
    <div className={Style.title}>
        <div className={Style.createtitle}>
           <div className={Style.createac}>Create an account</div>
       <div className={Style.letsget}>Let’s get started with your 30 days free trial</div>
        </div>
    </div>
    <div className={Style.register}>
        <div>
        <div className={Style.inp}>
            <div className={Style.same}>Name</div>
            <Ui/>
        </div>
        <br/>
        <div className={Style.inp}>
        <div className={Style.same}>Email</div>
            <Ui/>
        </div>
        <br/>
        <div className={Style.inp}>
        <div className={Style.same}>Password</div>
            <Ui/>
        </div>
    <div className={Style.twobutton}>
        <button onClick={hand} type="submit" className={Style.buttcreate}><p>Create Account</p></button>
        <button  className={Style.buttsignup}><p>Sign up with Google</p></button>
        </div>
        </div> 
    </div>
    <div className={Style.haveaccount}>
        <div className={Style.lastAlready}>Already have an account?</div>
        <div className={Style.lastsignin}>Sign in</div>
    </div>
</div>
    </>
  )
}
