import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'; 
import React from "react";
import { Link,useLocation } from "react-router-dom";


const  Watch = () => {
  
const location = useLocation()

const movie = location.state.movie

  return (
    <div className="watch">
<Link to="/">
        <div className="back">
        <ArrowBackOutlinedIcon/>
        Home
        </div>
  </Link>
        <video className="video" autoPlay
         progress 
         controls 
         src={movie.video}
         />
    </div>
  )
}

export default Watch