import React, { useState } from "react"
export default function App() {
  const[value,setClick]=useState('')
  
  return(
    <>
    <div className="calculator">
      <form action="">
      <div className="row">
        <input className="text" defaultValue={value}  type="text" placeholder="Enter the num" />
      </div>
      <div className="row">

          <input type="button" className="btn" value="C" onClick={e=> setClick("")} />
          <input type="button" className="btn" value="AD" onClick={e=> setClick( value.slice(0,-1))} />
          <input type="button" className="btn" value="%" onClick={e=> setClick( value + e.target.value)} />
          <input type="button" className="btn" value="/" onClick={e=> setClick( value + e.target.value)} />
          <div className="row ">
            <input type="button" className="btn" value="7"  onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="8" onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="9" onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="*" onClick={e=> setClick( value + e.target.value)}/>
          </div>
          <div className="row">
            <input type="button" className="btn" value="4" onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="5" onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="6" onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="+" onClick={e=> setClick( value + e.target.value)}/>
          </div>
          <div className="row">
            <input type="button" className="btn" value="1" onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="2" onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="3" onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="-" onClick={e=> setClick( value + e.target.value)}/>
          </div>
          <div className="row">
            <input type="button" className="btn" value="00" onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="0" onClick={e=> setClick( value + e.target.value)}/>
            <input type="button" className="btn" value="=" onClick={e=> setClick( eval(value))}/>
            <input type="button" className="btn" value="+-" onClick={e=> setClick( value + e.target.value)}/>
          </div>
        
      </div>
      </form>
    </div></>
  )
  
  
}