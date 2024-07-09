import "./listitem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Watch from "../../pages/watch/Watch";

export default function ListItem({index,item}) {

  const [isHovered,setIsHovered] = useState(false);
  const [movie,setMovie] = useState({});

 useEffect(()=>{
  const getMovie = async ()=>{
    try{

      const res = await axios.get("http://localhost:8800/api/movies/find/" + item,{

        headers:{
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2QyODA2ZTNkMWU4OGE5MWZlODI2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxOTU5MDEzNiwiZXhwIjoxNzIwMDIyMTM2fQ.DPZBSg-myWwS9Q2BUoLQCLwLvpQCtq6w3Yr8jjvHqmk"
        },
      });
      setMovie(res.data);
    }catch(err){
      console.log(err)
    }
  };
  getMovie()
 },[item]);

 
  return (

    <Link to={{pathname:"/watch",
    }}
     state={{movie}}>
    <div className="listItem" 
    style={{ left: isHovered && index * 225 - 50  }}
    
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave = {()=>setIsHovered(false)}
     >
<img src={ListItem.img}
alt=""
 />

{isHovered && (
   <>
 <video src={movie.trailer} autoPlay={true} loop />
 <div className="itemInfo">
  <div className="icons">
    <PlayArrowIcon/>
    <AddOutlinedIcon/>
    < ThumbUpOutlinedIcon/>
    <ThumbDownAltOutlinedIcon/>
  
  </div>
  <div className="itemInfoTop">
    <span>{movie.duration}</span>
    <span className="limit"> +{movie.limit}</span>
    <span>{movie.year}</span>
  </div>
  <div className="desc">
    {movie.desc}
  </div>
  <div className="genre">{movie.genre}</div>
 </div>
 </>
)}
    </div> 
    </Link>
  );
}
