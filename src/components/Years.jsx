import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { currentYear } from '../Logic/dayJs';
import { addYear } from '../Redux/getFull/getFull';
const Years = () => {

  const [year, setYear] = useState(currentYear)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addYear(year.toString()))
  })

  const next12Years = []
  for (let i = 0; i <= 11; i++) {
    next12Years.push(parseInt(currentYear) + i)
  }

  return (
    <div className='w-[15%] text-center border-r border-black wk'>
      <ul  >
      <li className='bg-[#1798e1]/20'>YEAR</li>
        {
          next12Years.map((yr) => {
            return (
              <li onClick={()=>{setYear(yr)}} key={yr} className={year==yr ? ' bg-[#1798e1]' : ''}>{yr}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Years