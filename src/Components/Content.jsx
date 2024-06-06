    import { createContext, useEffect, useState } from "react";
    import {baseUrl} from '../baseUrl'
    export const Content=createContext( );

    export default function ContentProvider({children}){
        const [loading,setloading]=useState(false);
        const [pages,setpages]=useState(1);
        const [blogs,setblogs]=useState([]);
        const [totalpages,settotalpages]=useState(0);

        async function fetchData(page=1,tag,category){
            setloading(true);
            let url=`${baseUrl}?page=${page}`
            if(tag){
                url+=`&tag=${tag}`;
            }
            if(category){
                url+=`&category=${category}`
            }
            console.log(url);
            try{
                const response=await fetch(url);
                const data=await response.json();
                setpages(data.page);
                setblogs(data.posts);
                settotalpages(data.totalPages);
            }catch(error){
                alert("Unable to fetch data");
                setpages(1);
                setblogs([]);
                settotalpages(null);
                setloading(false);
            }
            setloading(false);
        }

        function pageHandler(page){
            setpages(page);
            fetchData(page);
        }

        useEffect(()=>{
            fetchData();
        },[])

        const value={
            loading,
            setloading,
            pages,
            setpages,
            blogs,
            setblogs,
            totalpages,
            settotalpages,
            fetchData,
            pageHandler,
        }


        return <Content.Provider value={value}>
            {children}
        </Content.Provider>
    }