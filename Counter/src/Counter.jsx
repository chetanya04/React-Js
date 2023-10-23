import { useState } from "react"
import React from 'react'

function Counter() {
    const [ count , setCount]=useState(0)
    const increment=()=>setCount(count+1)
    const decrement=()=>setCount(count-1)
    return(
        <>
        <div className="container">
            <div className="counter">
                <h1 className="Count">{count}</h1>
            </div>
        </div>
        <section className="btns-container">
            <button className="increment" onClick={increment}>+</button>
            <button className="increment" onClick={decrement}>-</button>
            </section>
            </>
    )
}






export default Counter