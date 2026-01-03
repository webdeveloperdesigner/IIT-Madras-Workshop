import { useState } from 'react'
import './Counter.css'
function Counter() {
// Step 1: Define state using the useState hook
const [count, setCount] = useState(0)
// Step 2: Create functions to handle state changes
const increment = () => {
setCount(count + 1)
}
const decrement = () => {
setCount(count - 1)
}
const reset = () => {
setCount(0)
}
// Step 3: The component renders based on the state
return (
<div className="counter">
<h1>Counter App</h1>
<div className="count-display">
<p>Count: <span className="count-number">{count}</span></p>
</div>
<div className="button-group">
<button className="btn btn-decrement" onClick={decrement}>
Decrement
</button>
<button className="btn btn-reset" onClick={reset}>
Reset
</button>
<button className="btn btn-increment" onClick={increment}>
Increment
</button>
</div>
</div>
)
}
export default Counter