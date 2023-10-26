import React, { useState } from 'react'
import './Project.css'
function Project(){
    const[count,setCount]=useState(0)
    const[price,setPrice]=useState(0)
    const[buy ,setThanks] =useState('buy')
  return (
    <div className='box'>
      <div className="box1"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxzUsDGP8pibmp85nB2FBktimGPnZXmB7cQ&usqp=CAU' alt=''></img></div>
      <div className="box2">
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>
      </div>
      <div className="box3">
        <button id='button1'onClick={()=>setPrice(count*50)}>Price</button>
        <h1>{price}</h1>
      </div>
      <div className='box4'>
      <button onClick={()=>setThanks('❤️Thanks and come Again😊')}>{buy}</button>
      </div>
    </div>
  )
}
export default Project