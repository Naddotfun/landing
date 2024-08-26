import { useEffect } from 'react'
import About from './components/About'
import Community from './components/Community'
import Footer from './components/Footer'
import Header from './components/Header'
import HowToBuy from './components/HowToBuy'
import Intro from './components/Intro'
import LockIn from './components/LockIn'
import Parallelize from './components/Parallelize'
import Rule from './components/Rule'
import TradeProcess from './components/TradeProcess'
import Gmonad from './components/ui/Gmonad'
import { initGA } from './lib/ga'
import RouletteButton from './components/RouletteButton'

const App = () => {
  useEffect(() => {
    if (import.meta.env.PROD) {
      initGA(import.meta.env.VITE_GA_KEY)
    }
  }, [])

  return (
    <div>
      <div className="w-full overflow-hidden">
        <Header />
        <Intro />
        <div className="flex justify-center pt-[60px]">
          <Gmonad />
        </div>
        <About />
        <Rule />
        <HowToBuy />
        <Parallelize />
        <TradeProcess />
        <Community />
        <LockIn />
        <Footer />
      </div>
      <RouletteButton />
    </div>
  )
}

export default App
