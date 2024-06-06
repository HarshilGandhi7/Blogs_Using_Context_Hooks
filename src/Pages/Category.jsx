import { useLocation, useNavigate } from "react-router-dom"
import Header from "../Components/Header"
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
export default function Category(){
    const Navigate=useNavigate();
    const location =useLocation();
    const category=location.pathname.split("/").at(-1);
    return (
        <div>
            <Header className=""></Header>
            {/* <div className="text-center">
                <button  className="pt-20 text-xl  border-b-2 text-center boxShadow"onClick={()=>{Navigate(-1)}}>Back</button>
                <span>Blogs on {category}</span>
            </div> */}
            <div className="text-center -mb-5">
                <button
                className="mt-[100px] mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 " // Tailwind classes for styling
                onClick={() => { Navigate(-1) }}
                >
                Back
                </button>
                <span className="block text-2xl font-bold">Blogs on  Category <span className="underline text-blue-500">{category}</span></span>
            </div>
            <Blogs ></Blogs>
            <Footer></Footer>
        </div>
    )
}