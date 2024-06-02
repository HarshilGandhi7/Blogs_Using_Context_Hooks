import { useContext } from "react"
import { Content } from "./Content"

export default function Footer(){
    
    const {pages,totalpages,setpages,pageHandler}=useContext(Content)

    return (
        <div>
            {
                pages<totalpages &&
                <div>
                    <button onClick={()=>{
                    pageHandler(pages+1)
                    setpages(pages+1)
                    }}>Next</button>
                </div>
            }
            {
                pages>1 &&
                <div>
                    <button onClick={()=>{
                        pageHandler(pages-1)
                        setpages(pages-1);
                    }}>Prev</button>
                </div>
            }
            <div>Page {pages} of {totalpages}</div>
        </div>
    )
}