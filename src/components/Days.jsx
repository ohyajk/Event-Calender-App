import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { currentDay } from '../Logic/dayJs'
import { addDay, addDayInEng } from '../Redux/getFull/getFull'

const Days = () => {
  const [day, setDay] = useState(currentDay)
  const year = useSelector((state) => state.yearSlice.year)
  const month = useSelector((state) => state.yearSlice.month)
  const daysInMonth = dayjs(`${year}-${month}-01`).daysInMonth()
  const dayName = dayjs(`${year}-${month}-01`).format('d')
  const dayNamePlusOne = parseInt(dayName) + 1 

  const dayNameEng = dayjs(`${year}-${month}-${day}`).format('ddd')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addDay(day.toString()))
    dispatch(addDayInEng(dayNameEng.toString()))
  })

  let arr = []
  for(let i=1; i<=daysInMonth; i++) {
    if(i<10){
    arr.push(0+i.toString())
    }else {
      arr.push(i.toString())
    }
  }

  return (
    <div className='w-[45%] text-center border-r border-black'>
        <ul  className='grid grid-cols-7 wk w-full'>
            <li className='bg-[#1798e1]/20'>SUN</li>
            <li className='bg-[#1798e1]/20'>MON</li>
            <li className='bg-[#1798e1]/20'>TUE</li>
            <li className='bg-[#1798e1]/20'>WED</li>
            <li className='bg-[#1798e1]/20'>THU</li>
            <li className='bg-[#1798e1]/20'>FRI</li>
            <li className='bg-[#1798e1]/20'>SAT</li>
            {
                  arr.map((i,index) => {
                      return (
                        <button key={i} className={i == day ? 'day bg-[#1798e1]' : 'day'} style={index == 0 ? {gridColumnStart: dayNamePlusOne.toString()} : {}} onClick={() => {setDay(i)}} >{i}</button>
                      )                    
                  })
                }
        </ul>
    </div>
  )
}

export default Days