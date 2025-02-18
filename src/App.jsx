import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Question from './components/Question'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import AboutProduct from './pages/AboutProduct'
import KorzinkaPage from './pages/KorzinkaPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Products />
            <Question />
          </>
        } />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/product/:id' element={<AboutProduct />} />
        <Route path='/korzinka' element={<KorzinkaPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
