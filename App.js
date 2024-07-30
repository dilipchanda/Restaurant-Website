import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Products from './components/Products'
import Review from './components/Review'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Footer from './components/Footer'
import "./assets/css/style.css";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
     <Menu></Menu>
     <Products></Products>
     <Review></Review>
     <Contact></Contact>
     <Blog></Blog>
     <Footer></Footer>
    </div>
  )
}

export default App
