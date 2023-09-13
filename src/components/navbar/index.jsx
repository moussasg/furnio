import React from 'react'
import Style from "./index.module.css"
export default function Navbrar() {
  return (
<div className={Style.container}>
  <div className={Style.row}>
    <div className={Style.column}> {/*first column*/}
      <p>Mot 1</p>
      <p>Mot 2</p>
      <p>Mot 3</p>
      <p>mot 4</p>
      <p>mot 5</p>
    </div>
    <div className={Style.column}>
      <p>Mot 4</p>
      <p>Mot 5</p>
      <p>Mot 6</p>
    </div>
    <div className={Style.column}>
      <p>Mot 7</p>
      <p>Mot 8</p>
      <p>Mot 9</p>
    </div>
  </div>
</div>
  )
}
