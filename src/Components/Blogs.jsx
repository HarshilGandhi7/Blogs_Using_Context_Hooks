import { createContext, useContext } from "react"
import { Content } from "./Content"
import Spinner from "./Spinner"
import BlogDetails from "./BlogDetails"
import { NavLink } from "react-router-dom"

export default function Blogs(){
    const {loading,pages,blogs,totalpages}=useContext(Content)
    return (
        <div className="pt-20 w-[45%] pb-20 mx-auto ">
            {
                loading ?
                <div className="flex justify-center items-center align-middle"><Spinner></Spinner></div>:
                blogs.map((element) => {
                    return (
                     <BlogDetails id={element.id} element={element}></BlogDetails>
                    );
                  })                  
            }
        </div>
    )
}