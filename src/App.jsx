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
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Privacy from './components/Privacy'
import Home from './components/Home'

function App() {

  return (
    <><div className=" inter gradient  text-white">
     <BrowserRouter>
     <Layout>
     <Routes> 
      
     <Route path="/" element={<Home/>} />
          

          <Route path="/privacy" element={<Privacy/>} />
       
     
      </Routes> 
      </Layout>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
