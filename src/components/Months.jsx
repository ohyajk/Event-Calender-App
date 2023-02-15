import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { currentMonthTxt } from '../Logic/dayJs'
import { addMonth } from '../Redux/getFull/getFull'

const Months = () => {
  const [month, setMonth] = useState(currentMonthTxt)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addMonth(month))
  })

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return (
    <div className='w-[15%] text-center border-r border-black wk'>
        <ul>
      <li className='bg-[#1798e1]/20'>MONTH</li>
        {
          months.map((mnth) => {
            return (
              <li onClick={()=> {setMonth(mnth)}} key={mnth} className={month==mnth ? ' bg-[#1798e1]' : ''}>{mnth}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Months