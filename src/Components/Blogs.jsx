import { createContext, useContext } from "react"
import { Content } from "./Content"
import Spinner from "./Spinner"

export default function Blogs(){
    const {loading,pages,blogs,totalpages}=useContext(Content)
    return (
        <div>
            {
                loading ? <Spinner></Spinner>:
                blogs.map((element) => {
                    return (
                      <div key={element.id}>
                        <h1>{element.title}</h1>
                        <div>By {element.author} on {element.category}</div>
                        <div>Posted On {element.date}</div>
                        <div>{element.content}</div>
                        <div>
                          {element.tags.map((title, index) => {
                            return <div key={index}>{title}</div>;
                          })}
                        </div>
                      </div>
                    );
                  })                  
            }
        </div>
    )
}