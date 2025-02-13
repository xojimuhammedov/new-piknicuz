import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Question from './components/Question'
import BlogPage from './pages/BlogPage'

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
      </Routes>
      <Footer />
    </>
  )
}

export default App
