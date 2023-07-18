import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './CounterSlice'

function Counter() {
    const [incrementAmount, setIncrementAmount] = useState(0)
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

     const addValue = Number(incrementAmount) || 0;

    const resetAll = ()=>{
        setIncrementAmount(0)
        dispatch(reset())
    }
  return (
    <section>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <input type='text' value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}/>
      <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add</button>
      <button onClick={resetAll}>Reset</button>
   
    </section>
  )
}

export default Counter
