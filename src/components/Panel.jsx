import React from 'react'
import { useSelector } from 'react-redux'

const Panel = () => {

  const getFullDate = useSelector((state) => state.selected)
  console.log(getFullDate)
  return (
    <div className='bg-blue-900 h-[80vh] w-[400px]'>
        Your Selected Date :- {getFullDate}
    </div>
  )
}

export default Panel