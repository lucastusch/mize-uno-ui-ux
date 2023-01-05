import { Link } from 'react-router-dom'
import unologo from '../assets/uno-logo.png'

const Navbar = () => {
  return (
    <>
      <header>
        <div className='w-screen h-20 z-10 bg-white'>
          <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center mx-40'>
              <img src={unologo} alt='logo' className='h-16 w-24' />{' '}
              <div className='pl-10 text-3xl font-extrabold mr-4 sm:text-4xl drop-shadow-md tracking-tight'>
                <span>WELCOME TO UNO</span>
                {'-'}
                <span className='underline'>ONLINE</span>
              </div>
            </div>
            <div className='pr-40'>
              <button className='font-semibold px-5 py-2 rounded-md  text-blue-500 bg-slate-200 hover:text-white hover:bg-blue-500 duration-500 drop-shadow-md hover:drop-shadow-lg  bg-transparent mr-4'>
                <Link to='/signin'>Sign In</Link>
              </button>
              <button className='font-semibold px-5 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 drop-shadow-md hover:drop-shadow-lg duration-300 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'>
                <Link to='/signup'>Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Navbar
