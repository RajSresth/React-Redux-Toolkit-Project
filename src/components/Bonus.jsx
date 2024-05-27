import React from 'react'
import { decrement, increment } from '../slices/bonusSlice.js'
import { useDispatch, useSelector } from 'react-redux'

const Bonus = () => {
    const amount=useSelector(state=>state.account.amount)
    const points=useSelector(state=>state.bonus.points)
    const dispatch=useDispatch()
  return (
    <div className='w-[fitcontent] py-10 px-[7rem] border-black border-[2px] flex flex-col gap-5'>
    <div>
        <h2 className='text-[2.5rem] font-semibold'>Bonus Component</h2>
        
        <h2 className='text-[2rem] font-semibold'>Amount: {amount}</h2>
        <h2 className='text-[2rem] font-semibold'>Points: {points}</h2>
    </div>
    <div className='flex gap-5'>
        <button className='bg-blue-500 text-white py-3 px-10 font-semibold rounded-md text-[1.2rem]' onClick={()=>dispatch(increment())}>Increment</button>

        <button className='bg-red-500 text-white py-3 px-10 font-semibold rounded-md text-[1.2rem]' onClick={()=>dispatch(decrement())}>Decrement</button>            
    </div>
</div>
  )
}

export default Bonus