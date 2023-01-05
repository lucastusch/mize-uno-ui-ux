import { Link } from 'react-router-dom'
import unologo from '../assets/uno-logo.png'

const Navbar = () => {
  return (
    <>
      <section className=''>
        <div className='w-screen h-20 z-10 border-b-2 drop-shadow-lg bg-gray-100'>
          <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center mx-40'>
              <img src={unologo} alt='logo' className='h-16 w-24' />{' '}
              <h1 className='pl-10 text-3xl font-bold mr-4 sm:text-4xl drop-shadow-md hover:'>
                <span>WELCOME TO UNO</span>
                {'-'}
                <span className='underline'>ONLINE</span>
              </h1>
            </div>
            <div className='pr-40'>
              <button className='border-none bg-transparent text-black mr-4'>
                <Link to='/signin'>Sign In</Link>
              </button>
              <button className='px-5 py-2 rounded-md bg-violet-500 hover:bg-violet-600 drop-shadow-md hover:drop-shadow-lg active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>
                <Link to='/signup'>Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Navbar
