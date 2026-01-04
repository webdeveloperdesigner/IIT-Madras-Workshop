import React from 'react'

export default function Button() {
    const butn=()=>{
        alert("Button Clicked")
    }
  return (
    <div>
      
        <button onClick={butn} color='blue'>Click Me</button>
    </div>
  )
}
