import React, { useState } from 'react';
import dayjs from 'dayjs';
import Panel from '../components/Panel';
import { useDispatch } from 'react-redux';
import { selectedFullDate } from '../Redux/getFull/getFull';
selectedFullDate
const Home = () => {
  const [year, setYear] = useState('2023');
  const [month, setMonth] = useState('01');
  const [day, setDay] = useState('01');

  const dispatch = useDispatch();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
 const getFull = () => {
  return dayjs(year + '-' + month + '-' + day).format('DD-MM-YYYY ddd') 
 }

 const full = getFull();
console.log(full)
  const getYearMonthWeek = () => {
    return dayjs(year + '-' + month + '-01').startOf('month').format('ddd')
  } 
  const monthEnd = () => {
    return dayjs(year + '-' + month + '-01').daysInMonth()
  }
  const days = []

  const dayStart =()=> {
    for(let i=1; i <= monthEnd() ;i++){
      days.push(i)
    }
    if(getYearMonthWeek() == 'Sun') {
      return days.map((day,i) => <li className={ i == '0' ? "col-start-1 hover:bg-amber-700 cursor-pointer" : "cursor-pointer hover:bg-amber-700"} onClick={() => {setDay(i+1)}} onChange={dispatch(selectedFullDate(full))} >{day}</li>)
    }else if(getYearMonthWeek() == 'Mon') {
  

      
      return days.map((day,i) => <li className={ i == '0' ? "col-start-2 hover:bg-amber-700 cursor-pointer" : "cursor-pointer hover:bg-amber-700"} onClick={() => {setDay(i+1)}} onChange={dispatch(selectedFullDate(full))} >{day}</li>)
    }else if(getYearMonthWeek() == 'Tue') {
    

   
      return days.map((day,i) => <li className={ i == '0' ? "col-start-3 hover:bg-amber-700 cursor-pointer" : "cursor-pointer hover:bg-amber-700"} onClick={() => {setDay(i+1)}} onChange={dispatch(selectedFullDate(full))} >{day}</li>)
    }else if(getYearMonthWeek() == 'Wed') {
     

      
      return days.map((day,i) => <li className={ i == '0' ? "col-start-4 hover:bg-amber-700 cursor-pointer" : "cursor-pointer hover:bg-amber-700"} onClick={() => {setDay(i+1)}} onChange={dispatch(selectedFullDate(full))} >{day}</li>)
    }else if(getYearMonthWeek() == 'Thu') {
    

      
      return days.map((day,i) => <li className={ i == '0' ? "col-start-5 hover:bg-amber-700 cursor-pointer" : "cursor-pointer hover:bg-amber-700"} onClick={() => {setDay(i+1)}} onChange={dispatch(selectedFullDate(full))} >{day}</li>)
    }else if(getYearMonthWeek() == 'Fri') {
     

      
      return days.map((day,i) => <li className={ i == '0' ? "col-start-6 hover:bg-amber-700 cursor-pointer" : "cursor-pointer hover:bg-amber-700"} onClick={() => {setDay(i+1)}} onChange={dispatch(selectedFullDate(full))} >{day}</li>)
    }else if(getYearMonthWeek() == 'Sat') {
     

      
      return days.map((day,i) => <li className={ i == '0' ? "col-start-7 hover:bg-amber-700 cursor-pointer" : "cursor-pointer hover:bg-amber-700"} onClick={() => {setDay(i+1)}} onChange={dispatch(selectedFullDate(full))} >{day}</li>)
    }
  }
  return (
    <div className='flex justify-center gap-4 h-screen items-center '>
      <div>
      <h1 className='text-3xl logo'>Event Calendar App</h1>
    <div className='flex justify-start items-center py-4'>
      <span className='text-2xl pr-2'>Year :-</span>
    <select onChange={e => setYear(e.target.value)} className='text-black px-2 text-center py-2 outline-none cursor-pointer text-lg rounded-2xl'>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
      </select>
      <span className='pl-4 pr-2 text-2xl'>Month :-</span>
      <select onChange={e => setMonth(e.target.value)} className='text-black text-center outline-none px-2 py-2 text-lg mx-2 cursor-pointer rounded-2xl'>
        {monthNames.map((name, i) => {
          return <option value={`0${i + 1}`} className='text-lg py-2 cursor-pointer px-2 hover:bg-amber-700 border'>{name}</option>
        })}
        </select>
    </div>
    <div className='flex flex-col justify-center items-start'>
      <ul className='grid grid-cols-7 lis'>
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        {dayStart()}
      </ul>
    </div>
      </div>
    
    <Panel />

    </div>
  )
}

export default Home