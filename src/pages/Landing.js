import { useState } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import unoongoinggame from '../assets/uno-ongoing-game.jpg'

const Landing = () => {
  // //just playing around

  // const [lobbyid, setLobbyID] = useState(1)
  // const [activeplayers, setActivePlayers] = useState(1)

  // const lobbyHandler = () => {
  //   setLobbyID((prevState) => {
  //     prevState = lobbyid + 1
  //     return prevState
  //   })
  // }

  // const activePlayersHandler = () => {
  //   setActivePlayers((prevState) => {
  //     if (activeplayers < 10) {
  //       prevState = activeplayers + 1
  //       return prevState
  //     } else {
  //       prevState = activeplayers
  //       return prevState
  //     }
  //   })
  // }

  // const [search, setSearch] = useState('')
  // const data = [
  //   {
  //     id: 1,
  //     lobbyname: 'lucassewi-uno',
  //     lobbyid: '#00000',
  //     currentplayerfrommax: '2/8',
  //     host: 'lucassewi',
  //   },
  // ]
  const [search, setSearch] = useState('')

  //just as an example [sewi backend]
  const data = [
    {
      id: 1,
      lobbycode: '#0001',
      lobbyname: 'sewis uno',
      host: 'sewi',
      currentplayermax: '1/8',
    },
    {
      id: 2,
      lobbycode: '#0002',
      lobbyname: 'lucas uno',
      host: 'lucas',
      currentplayermax: '2/8',
    },
  ]

  return (
    <>
      <Navbar />
      {/* Hero */}
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

      {/* Lobby-list */}
      <section>
        <div className='flex flex-wrap justify-center'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-9 h-9'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 12h-15'
              />
            </svg>
          </span>
          <span className='px-2 font-bold text-3xl'>AVAILABLE LOBBYS</span>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-9 h-9'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 12h-15'
              />
            </svg>
          </span>
        </div>

        <article>
          <div className='px-40'>
            <div>
              <div>
                <div className='my-3'>
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search contacts'
                  />
                </div>
              </div>
              <div className='w-full'>
                <th className='w-1/4'>Lobby-Code</th>
                <th classname='w-1/4'>Lobby-Name</th>
                <th className='w-1/4'>Host</th>
                <th className='w-1/4'>Player</th>

                <tbody>
                  {data
                    .filter((item) => {
                      return search.toLowerCase() === ''
                        ? item
                        : item.lobbyname.toLowerCase().includes(search)
                    })
                    .map((item, index) => (
                      <tr key={index}>
                        <td>{item.lobbycode}</td>
                        <td>{item.lobbyname}</td>
                        <td>{item.host}</td>
                        <td>{item.currentplayermax}</td>
                      </tr>
                    ))}
                </tbody>
              </div>
            </div>
          </div>
        </article>
      </section>

      <Footer />
    </>
  )
}

export default Landing
