import { NavLink } from "react-router-dom"
export default function BlogDetails({element}){
    return(
        <div key={element.id} className="pt-4 pb-4">
        <NavLink to={`/blog/${element.id}`}>
          <h1 className="font-bold text-xl">{element.title}</h1>
        </NavLink>
        <div className="mt-2">By <span className="italic">{element.author}</span> on 
        <NavLink to={`/categories/${element.category.replaceAll(" ","-")}`}> 
          <span className="font-bold underline">{element.category}</span>
        </NavLink>
        </div>
        <div className="mt-1">Posted On {element.date}</div>
        <div className="pt-6">{element.content}</div>
        <div>
          {element.tags.map((title, index) => {
            return (
            <span key={index}>
              <NavLink  to={`/tags/${title.replaceAll(" ","-")}`}>
              <span className="text-blue-800 underline pr-2 text-sm">#{title}</span>
            </NavLink>
            </span>)
          })}
        </div>
      </div>
    )
}