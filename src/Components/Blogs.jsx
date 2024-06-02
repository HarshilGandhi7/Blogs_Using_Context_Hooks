import { createContext, useContext } from "react"
import { Content } from "./Content"
import Spinner from "./Spinner"

export default function Blogs(){
    const {loading,pages,blogs,totalpages}=useContext(Content)
    return (
        <div className="pt-20 w-[45%] pb-20 mx-auto ">
            {
                loading ?
                <div className="flex justify-center items-center align-middle"><Spinner></Spinner></div>:
                blogs.map((element) => {
                    return (
                      <div key={element.id} className="pt-4 pb-4">
                        <h1 className="font-bold text-xl">{element.title}</h1>
                        <div className="mt-2">By <span className="italic">{element.author}</span> on <span className="font-bold underline">{element.category}</span></div>
                        <div className="mt-1">Posted On {element.date}</div>
                        <div className="pt-6">{element.content}</div>
                        <div>
                          {element.tags.map((title, index) => {
                            return <span key={index} className="text-blue-600 underline pr-2 text-sm">#{title}</span>;
                          })}
                        </div>
                      </div>
                    );
                  })                  
            }
        </div>
    )
}