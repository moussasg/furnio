import React from 'react'
import Style from "./index.module.css"
import Ui from "./ui"
export default function Rightcomponenet() {
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
        </div> 
    <div className={Style.twobutton}>
        <button className={Style.buttcreate}><p>Create Account</p></button>
        <button className={Style.buttsignup}><p>Sign up with Google</p></button>
    </div>
    <div className={Style.haveaccount}>
        <div className={Style.lastAlready}>Already have an account?</div>
        <div className={Style.lastsignin}>Sign in</div>
    </div>
</div>
    </>
  )
}
