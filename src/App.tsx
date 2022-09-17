import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';
import { useEffect, useState } from 'react'
import logoImg from './assets/Logo.svg';
import { CreateAdBanner } from './components/CreateAdBanner';
import { api } from './services/api';
import { GameBanner } from './components/GameBanner';
import { ModalNewAd } from './components/ModalNewAd';

interface Game {
  bannerUrl
  :
  string,
  id: string,
  title: string,
  _count: { ads: number };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    api.get('/games').then(response => {
      setGames(response.data)
      console.log(response.data);
    }).catch(() => { });

  }, [])

  return (
    <div className="max-w-[1360px] mx-auto flex flex-col items-center px-20 my-20">
      <img className='md:max-h-60 max-w-md' src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-clip-text bg-nlw-gradient">duo</span> está aqui!!</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerURL={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>
      <ModalNewAd>
        <CreateAdBanner />
      </ModalNewAd>
    </div>


  )
}

export default App
