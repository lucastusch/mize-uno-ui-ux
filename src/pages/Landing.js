//import { useState } from 'react'
//import { Link } from 'react-router-dom'
import unoongoinggame from '../assets/uno-ongoing-game.jpg'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Landing = () => {
  /*
  const [lobbyid, setLobbyID] = useState(1)
  
  //same function as the clickhandler below
  const clickHandler = () => {
    setLobbyID((prevState) => {
      prevState = lobbyid + 1
      return prevState
    })
  }

  
  //same function as the clickhandler above
  const clickHandler = () => {
    setLobbyID(lobbyid + 1)
  }


  //<Link to={`/game/${lobbyid}`}>Lobby-{lobbyid}</Link>

  
   <h1 className='text-3xl font-bold mb-10'>Welcome to !UNO</h1>
      <h2 className='text-2xl font-bold'>Server-List</h2>
      <ol className='list-disc'>
        <li className='ml-5'>
          <button
            className='hover:underline'
            type='button'
            //onClick={() => clickHandler()}
          >
            Lobby-{lobbyid}
          </button>
        </li>
      </ol>
  */

  return (
    <>
      <Navbar />
      <main>
        <div className='text-center relative bg-white overflow-hidden'>
          <div className='max-w-7xl mx-auto'>
            <div className='pt-16 relative z-10 bg-white sm:pb-10 md:pb-10 lg:max-w-2xl lg:w-full lg:pb-14 xl:pb-40'>
              <svg
                className='text-left hidden lg:block absolute right-[-10px] bot-[-150px] inset-y-0 text-white transform translate-x-1/2'
                fill='currentColor'
                viewBox='0 0 100 100'
                preserveAspectRatio='none'
                aria-hidden='true'
                height='680px'
                width='250px'
              >
                <polygon points='45,0 100,0 40,100 0,100' />
              </svg>
              <article className='mb-20 md:mb-20 lg:mb-40  mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-28'>
                <div className='sm:text-center lg:text-left'>
                  <h1 className='text-3xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
                    <span className='block text-red-500 drop-shadow-lg xl:inline'>
                      PLAY UNO TOGETHER
                    </span>{' '}
                    <br />
                    <span className='block text-yellow-500 drop-shadow-lg xl:inline'>
                      WITH YOUR FRIENDS
                    </span>
                    <br />
                    <button className='py-3 px-2 bg-green-300 rounded-md font-bold text-2xl tracking-tighter shadow-lg hover:shadow-xl scale-90 hover:scale-100 duration-300'>
                      <span className='text-white'>PLAY NOW</span>
                    </button>
                  </h1>
                </div>
              </article>
            </div>
          </div>
          <div className='pb-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <div>
              <img src={unoongoinggame} alt='ongoing uno game' />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Landing
