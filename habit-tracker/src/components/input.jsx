import { useEffect } from "react";
import React  from 'react'


export default function input() {
    function handleChange(event) {  
        console.log(event.target.value);    
    }
  return (
    <div>
      <input type="text" placeholder="Enter your habit" />
    </div>
  )
}
