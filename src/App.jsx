import React from 'react'
import Account from './components/Account'
import Bonus from './components/Bonus'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const amount=useSelector(state=>state.account.amount)
  const points=useSelector(state=>state.bonus.points)
  
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-11'>
      <div>
          <h1 className='text-[3rem] font-semibold'>Parent Component</h1>
            <h2 className='text-[2rem] font-semibold'>Amount: {amount}</h2>
            <h2 className='text-[2rem] font-semibold'>Points: {points}</h2>
      </div>
      <div className='flex gap-[5rem]'>
        <Account></Account>
        <Bonus></Bonus>
      </div>
    </div>
  )
}

export default App