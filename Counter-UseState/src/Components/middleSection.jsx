import React, { useState } from 'react';
import Insert from './insert';
import Deacrease from './deacrease';
import Jump from './jump';


const middleSection = () => {

  const [num, setNum] = useState(0)
  const increase = ()=>{
    setNum(prev =>prev +1)
  }
  const deacrese = ()=>{
    setNum(prev =>prev -1)
  }
  const jump = ()=>{
    setNum(prev =>prev +5)
  }

  return (
    <div className='w-100 h-90 mx-auto flex flex-col justify-between items-center border-3 mt-40 rounded-2xl'>
      <div className='mt-0' >
        <h4 className='font-bold text-2xl mt-3'>Current Tally </h4>
      </div>
      <div className='text-8xl font-bold'>
        {num}
      </div>
      <div>
        <Insert onclick={increase}/>
      </div>
      <div className='flex justify-between gap-5 mb-3'>
        <Deacrease onclick={deacrese}/>
        <Jump onclick={jump}/>
      </div>
      
    </div>
  )
}

export default middleSection