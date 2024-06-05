import React from "react"
import "./App.css"
import Header from "./Components/Header"
import Footer from './Components/Footer'
import Content from './Components/Content'
import Blogs from "./Components/Blogs"
import Home from "./Pages/Home"
import Blogspage from './Pages/Blogpage'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Tags from "./Pages/Tags"
import Category from "./Pages/Category"
export default function App() {
  return( 
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog/:blogId' element={<Blogspage></Blogspage>}></Route>
      <Route path="/tags/:tag" element={<Tags></Tags>}></Route>
      <Route path="/Category/:Category" element={<Category></Category>}></Route>
    </Routes>
  )
}
