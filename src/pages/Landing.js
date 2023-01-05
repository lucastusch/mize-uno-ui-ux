//import { useState } from 'react'
//import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Landing = () => {
  //const [lobbyid, setLobbyID] = useState(1)
  /*
  //same function as the clickhandler below
  const clickHandler = () => {
    setLobbyID((prevState) => {
      prevState = lobbyid + 1
      return prevState
    })
  }
*/
  /*
  //same function as the clickhandler above
  const clickHandler = () => {
    setLobbyID(lobbyid + 1)
  }
*/

  //<Link to={`/game/${lobbyid}`}>Lobby-{lobbyid}</Link>

  /*
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
      <section>
        <Navbar />
        <div>Hello World</div>
        <Footer />
      </section>
    </>
  )
}

export default Landing
