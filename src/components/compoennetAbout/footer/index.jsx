import React from 'react'
import Style from "./index.module.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function Navbrar() {
  return (
    <>
<div className={Style.container}>
<div className={Style.logo}>
       <h3 className={Style.funiro}>Funiro.</h3>
       <br/>
       <br/>
       <div className={Style.coloradress}>
        <div>400 University Drive Suite 200 Coral</div> 
        <div className={Style.textalign}>Gables </div> 
        <div className={Style.textalign}>FL 33134 USA</div>
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
        <div className={Style.subscribe}>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '21ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        variant="standard" 
        value="Enter Your Email Adress"
        fullWidth 
      />
    </Box>
          <p>SUBSCRIBE</p>
        </div>
      
      </div>
        </div>
    </div>
  </div>
</div>
    <div className={Style.allright}>2023 furino. All rights reverved</div>
</>
  )
}
