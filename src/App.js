import React, { useContext, useEffect } from "react"
import "./App.css"
import Header from "./Components/Header"
import Footer from './Components/Footer'
import { Content } from "./Components/Content"
import Blogs from "./Components/Blogs"
import Home from "./Pages/Home"
import { BrowserRouter, Route, Routes, useLocation, useSearchParams} from 'react-router-dom'
import Tags from "./Pages/Tags"
import Category from "./Pages/Category"
export default function App() {
  const {fetchData} =useContext(Content);
  const [searchParams,setsearchParams]=useSearchParams();
  const location=useLocation();
  useEffect(()=>{
    const page=searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),tag)
    }else if(location.pathname.includes("categories")){
      const cat=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),null,cat);
    }else{
      fetchData(Number(page));
    }

  },[location.search,location.pathname])

  return( 
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blog/:blogId' element={<Home></Home>}></Route>
      <Route path="/tags/:tag" element={<Tags></Tags>}></Route>
      <Route path="/categories/:category" element={<Category></Category>}></Route>
    </Routes>
  )
}
