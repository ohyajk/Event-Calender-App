import React from 'react'
import { useSelector } from 'react-redux'
const Panel = () => {
    const date = useSelector((state) => state.yearSlice)
  return (
    <div className='w-[25%] '>
      <h2 className='flex justify-center text-center py-4 text-xl'>
      {date.dayInEng}  {date.day}-{date.month}-{date.year}
      </h2>
    </div>
  )
}

export default Panel