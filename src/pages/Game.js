// just a temporary solution - want to handle this dynamic
const gamebg =
  'https://1.bp.blogspot.com/-CUGrjTz--uk/YKexcWh29nI/AAAAAAAAh4M/HslKXMPNl7AI42WH7sNMKMgjkS_KJLSoQCLcBGAsYHQ/s1920/V1-CUTE-TROPICAL-DESKTOP-WALLPAPER-HD.png'

// just as an example [sewi backend]
const data = [
  {
    id: 1,
    player_name: 'lucas',
    player_cards: ['red_5', 'blue_2', 'green_0'],
    player_active: 'no',
  },
  {
    id: 2,
    player_name: 'sebastian',
    player_cards: ['red_1', 'blue_7', 'green_9'],
    player_active: 'yes',
  },
  {
    id: 3,
    player_name: 'sophia',
    player_cards: ['red_3', 'blue_6', 'green_8'],
    player_active: 'no',
  },
]

const Game = () => {
  return (
    <>
      <div className='relative'>
        <img
          type='image'
          src={gamebg}
          alt=''
          className='-z-10 h-screen w-screen brightness-50'
        />
        <div className='absolute text-3xl text-amber-400 top-8 left-8 -translate-y-1/2'>
          Top Left: list of players
        </div>
        <div className='absolute text-3xl text-amber-400 top-8 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          Top Center: current active player
        </div>
        <div className='absolute text-3xl text-amber-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          Center: current card
        </div>
        <div className='absolute text-3xl text-amber-400 bottom-8 left-1/2 -translate-x-1/2'>
          Bottom Center: buttons for cards
        </div>
        {/* temporary: -right-40 */}
        <div className='absolute text-3xl text-amber-400 bottom-2 -right-40 -translate-x-1/2'>
          Bottom Right: button to leave
        </div>
      </div>
    </>
  )
}

export default Game
