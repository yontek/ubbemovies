
import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import { useEffect, useState } from "react"
import axios from "axios"

const Home= ({type})=> {

  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState(null);

  useEffect(()=>{
    const getRandomLists = async ()=>{

      try{
          const res = await axios.get(
            `http://localhost:8800/api/list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
              headers:{
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2QyODA2ZTNkMWU4OGE5MWZlODI2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxOTU5MDEzNiwiZXhwIjoxNzIwMDIyMTM2fQ.DPZBSg-myWwS9Q2BUoLQCLwLvpQCtq6w3Yr8jjvHqmk"
              },
            });
         
          setLists(res.data)
      }
      catch(err){
        console.log(err)
      }
    };
getRandomLists()
    },[type,genre])


  return (
    <div className="home">
        <Navbar/>
      
    <Featured type={type}/>
   {lists.map((list)=>(
    <List list={list}/>
   )
  )}
    </div>
  )
}

export default Home