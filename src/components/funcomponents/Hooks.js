import React,{useEffect, useState} from 'react'

export default function Hooks() {
let [count, getCount]=useState(0)
    
    
        useEffect(()=>{
            setInterval(()=>{

                getCount(()=>{
                    
                })
             },100)
        })

   const  mouseEvent=()=>{

    getCount(count===0)

    }

    return (
        <div>
           <p>{count}</p> 
           
           <p onMouseOver={mouseEvent}>count</p>
        </div>
    )
}
