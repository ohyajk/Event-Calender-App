import logo from '../assets/96.png'

const Navbar = () => {
  return (
    <>
    <div className='bg-[#2D0D4F] flex justify-start items-center gap-2 py-4 px-4 border-b border-white/5 shadow-lg shadow-black/20 mb-4'>
      <img className='h-12' src={logo} alt="logo" />
      <h1 className='text-4xl styler'>Event Calender</h1>
    </div>
    </>
  )
}

export default Navbar