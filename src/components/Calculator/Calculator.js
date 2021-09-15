import React from 'react'
import { useState } from 'react/cjs/react.development'
import "./Calculator.css"

export default function Calculator() {
    const [result,getResult] = useState("")
    function handleClick(e){
        getResult(result.concat(e.target.name))
    }
    function backspace(){
        getResult(result.slice(0,result.length-1))
    }
    function calculator(){
        getResult(eval(result).toString())
    }
    function clear(){
        getResult("")
    }
    return (
        <div className="container">
            <form>
                <input type="text" value={result}/>
            </form>
        <div className="keyboard">
            <button  className="clear" onClick={clear}>clear</button>
            <button onClick={backspace}>C</button>
            <button name="/" onClick={handleClick}>&#xf7;</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8"onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="*" onClick={handleClick}>&times;</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="-" onClick={handleClick}>-</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="+" onClick={handleClick}>+</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="." onClick={handleClick}>.</button>
            <button onClick={calculator}>=</button>
           
        </div>
        </div>
    )
}
