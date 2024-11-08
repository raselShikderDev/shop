
import './App.css'
import BannerWinter from './component/Bannerwinter/BannerWinter'
import Hero from './component/Hero/Hero'
import Navbar from './component/NavBar/Navbar'
import Prodacts from './component/Prodacts/Prodacts'
import TopProdact from './component/TopProdact/TopProdact'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Prodacts />
      <TopProdact />
      <BannerWinter/>
    </>
  )
}

export default App
