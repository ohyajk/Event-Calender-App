import React from 'react'
import Days from '../components/Days'
import Months from '../components/Months'
import Panel from '../components/Panel'
import Years from '../components/Years'

const Home = () => {
  return (
    <div className='flex justify-center '>
      <div className='w-[90vw] flex justify-start bg-[#2D0D4F]'>
        <Years />
        <Months />
        <Days />
        <Panel />
      </div>
    </div>

  )
}

export default Home