
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import How from './components/How'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Footer from './components/Footer'
import Howtoplay from './components/Howtoplay'
import Playcards from './components/PlayCards'

function App() {

  return (
    <>
    <div className="gradient inter overflow-x-hidden  text-white">

   <div className="bg    "   >
  
<Nav/>
<Hero/>
</div>
<How/>
<Howtoplay/>
<Playcards/>
<Tokenomics/>
<Roadmap/>
<Team/>
<Footer/>


</div>
    </>
  )
}

export default App
