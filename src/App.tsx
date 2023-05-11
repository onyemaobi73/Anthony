import React from 'react'
import { Header } from './components/Block/Header' 
import { Sider } from './components/Block/Sider'
import LandingPage from './pages/LandingPage'
import { Footer } from './components/Block/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Sider />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default App