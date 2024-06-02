import { useContext } from "react"
import { Content } from "./Content"
import '../App.css'

export default function Footer(){
    
    const {pages,totalpages,setpages,pageHandler}=useContext(Content)

    return (
        <div class="w-full h-16 text-black bg-white border border-gray-500 flex justify-around items-center fixed bottom-0  ">
            <div className="flex flex-row gap-4 pl-20">
                {
                    pages>1 &&
                    <div className="border border-gray-400 px-3 py-1 rounded-md">
                        <button onClick={()=>{
                            pageHandler(pages-1)
                            setpages(pages-1);
                        }}>Prev</button>
                    </div>
                }
                {
                    pages<totalpages &&
                    <div className="border border-gray-400 px-3 py-1 rounded-md">
                        <button onClick={()=>{
                        pageHandler(pages+1)
                        setpages(pages+1)
                        }}>Next</button>
                    </div>
                }
            </div>
            <div>Page {pages} of {totalpages}</div>
        </div>
    )
}