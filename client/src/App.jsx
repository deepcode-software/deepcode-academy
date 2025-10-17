import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Courses from './pages/Courses'
import Blog from './pages/Blog'
import About from './pages/About'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
    </>
  )
}

export default App
