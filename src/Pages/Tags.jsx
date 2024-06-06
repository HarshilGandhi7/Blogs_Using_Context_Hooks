import Header from "../Components/Header"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
export default function Tags(){
    const Navigate=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);  
    return (
        <div>
            <Header></Header>
            <div className="text-center -mb-5">
                <button
                className="mt-[100px] mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 " // Tailwind classes for styling
                onClick={() => { Navigate(-1) }}
                >
                Back
                </button>
                <span className="block text-2xl font-bold">Blogs tagged <span className="underline text-blue-500">#{tag}</span></span>
            </div>  
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    )
}