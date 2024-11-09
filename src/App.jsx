
import './App.css'
import BannerWinter from './component/Bannerwinter/BannerWinter'
import Footer from './component/Footer/Footer'
import Hero from './component/Hero/Hero'
import Navbar from './component/NavBar/Navbar'
import Prodacts from './component/Prodacts/Prodacts'
import Subscribe from './component/Subscribe/Subscribe'
import Testimonial from './component/Testimonial/Testimonial'
import TopProdact from './component/TopProdact/TopProdact'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Prodacts />
      <TopProdact />
      <BannerWinter />
      <Subscribe />
      <Prodacts />
      <Testimonial />
      <Footer/>
    </>
  )
}

export default App
