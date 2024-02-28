import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement ,selectCount} from './counterSlice'

function Counter() {

  const count = useSelector(selectCount);
  const dispatch = useDispatch()
  
  return (
    <div>


    <button onClick={()=>dispatch(increment())}>Increment</button>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter