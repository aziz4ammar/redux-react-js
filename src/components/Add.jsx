import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/actions'

const Add = () => {
    const dispatch=useDispatch()
 const [tasker,setTasker] = useState("")
const handleSubmit = (e) => {
    e.preventDefault()
    const newTask={
        id:Math.random(),action:tasker,isDone:false
    }
    dispatch(add(newTask))
    setTasker("")
}
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={tasker}
          onChange={(e) => setTasker(e.target.value)}
        />
        <button type="submit">plus</button>
      </form>
    </div>
  )
}

export default Add