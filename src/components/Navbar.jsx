import logo from '../assets/96.png'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-start items-center gap-4 pt-4 '>
      <img className='h-12' src={logo} alt="logo" />
      <h1 className='text-3xl font-bold'>Event Calender</h1>
    </div>
    <h4 className='text-center pb-2'>Add Your Events Now...</h4>
    </>
  )
}

export default Navbar