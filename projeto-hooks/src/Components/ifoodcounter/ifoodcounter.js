/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react'
import'../ifoodcounter/ifoodcounter.css'

export default function ifoodcounter() {
  
  const [value, setValue] =useState(1)
  const [buttonStyle, setButtonStyle] = ("counter-button-minus-active")

  useEffect(()=>{
        document.getElementById("moeda").innerHTML = 2.00 * value
  },[value])

  function down(){
   
    
    
    if (value > 0){
        setValue(value-1)
    }
   }

  function up(){
    setValue(value+1)
  }
  
    return (
    <div className="counter-wrapper">
       <button
          className={buttonStyle}
          onClick={down}
       >
           -
       </button>
       <p>{value}</p>
       <button
        className={setButtonStyle}
        onClick={up}
       >
            +
       </button>
       <button id="moeda">12,00</button>
    </div>
  )
}
