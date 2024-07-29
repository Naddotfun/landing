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

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Intro />
        <div className="pt-[120px] text-center max-lg:hidden">
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
    </div>
  )
}

export default App
