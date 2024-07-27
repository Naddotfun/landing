import About from './components/About'
import Community from './components/Community'
import Footer from './components/Footer'
import Header from './components/Header'
import HowToBuy from './components/HowToBuy'
import LockIn from './components/LockIn'
import Parallelize from './components/Parallelize'
import Rule from './components/Rule'
import TradeProcess from './components/TradeProcess'

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="h-dvh"></div>
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
