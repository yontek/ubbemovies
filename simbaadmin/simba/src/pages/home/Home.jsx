import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import Chart from "../../components/chart/Chart"
import {userData } from "../../dummyData";
import Widgetsm from "../../components/widgetSm/Widgetsm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import axios from "axios"
import {useMemo,useState,useEffect} from "react"


export default function Home() {


  const MONTHS = useMemo(()=>[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  
   ],
   []
  
   )

   const[userStats, setUserStats] = useState([])

   useEffect(()=> {
     const getStats = async () => {
   
       try{
   const res = await axios.get("http://localhost:8800/api/users/stats",{
     headers:{
       token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2QyODA2ZTNkMWU4OGE5MWZlODI2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxOTU5MDEzNiwiZXhwIjoxNzIwMDIyMTM2fQ.DPZBSg-myWwS9Q2BUoLQCLwLvpQCtq6w3Yr8jjvHqmk"
     },
   
       });
   
   const statsList  = res.data.sort((function (a,b) {
    return a.id - b.id;
   }));

   statsList.map(item=> 
    setUserStats(prev=>[
      ...prev,
      {name:MONTHS[item._id-1], "New User": item.total},
   ])
   
   );
   
     }
     
     catch(err){
   
       console.log(err)
   
       }
   
     };
     getStats();
     },[MONTHS])
     
   console.log(userStats)
   


  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid 
        dataKey="New User"/>
        <div className="homeWidget">
      <Widgetsm/>
      <WidgetLg/>
        </div>
    </div>
  )
}
