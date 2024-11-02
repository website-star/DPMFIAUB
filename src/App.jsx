import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './assets/component/navbar'
import Footer from './assets/component/footer'
import Home from './assets/pages/Home'
import Programs from './assets/pages/Programs'
import Peoples from './assets/pages/Peoples'
import ScrollToTop from './assets/component/ScrollToTop'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSinergiOpen, setIsSinergiOpen] = useState(false)
  const [isAksiOpen, setIsAksiOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <div className='h-screen'>
        <Navbar/>
        <ScrollToTop/>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Programs' element={<Programs />}></Route>
              <Route path='/People' element={<Peoples />}></Route>
            </Routes>
        <footer className='h-[350px] bg-gradient-to-l from-[#3bbdac] from-0% via-[#2BA097] via-30% via-[#256a6b] via-65% to-[#148b8f] to-95% rounded-t-[70px] mt-auto'>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

export default App