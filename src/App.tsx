import { useEffect } from 'react'
import { About } from './components/About'
import Community from './components/Community'
import Footer from './components/Footer'
import { Header } from './components/Header'
import HowToBuy from './components/HowToBuy'
import { Intro } from './components/Intro'
import LockIn from './components/LockIn'
import Parallelize from './components/Parallelize'
import { Rule } from './components/Rule'
import TradeProcess from './components/TradeProcess'
import Gmonad from './components/ui/Gmonad'
import { initGA } from './lib/ga'
import RouletteButton from './components/RouletteButton'
import { TPS } from './components/tps'

const App = () => {
  useEffect(() => {
    if (import.meta.env.PROD) {
      initGA(import.meta.env.VITE_GA_KEY)
    }
  }, [])

  return (
    <div>
      <div className="w-full overflow-hidden">
        <Header className="fixed top-0 z-50 w-full" />
        <Intro className="mt-[60px]" />
        <Gmonad className="flex justify-center pt-[60px]" />
        <About className="mt-[134px] md:mt-[90px]" />
        <Rule className="mt-[155px] md:mt-[118px]" />
        <HowToBuy className="mx-auto mt-[166px] max-w-[1076px] px-[20px] md:mt-[170px]" />
        <TPS className="mx-auto mt-[122px] max-w-[1076px] px-[20px] md:mt-[257px]" />
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
