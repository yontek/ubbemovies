import { useEffect, useState } from "react";
import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "axios"



export default function WidgetSm() {

    const[newUsers,setNewUsers] = useState([])
useEffect(()=>{

    
const getNewUsers = async ()=>{
    try{
    const res = await axios.get("http://localhost:8800/api/users?new=true",{
        headers:{
            token:
             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2QyODA2ZTNkMWU4OGE5MWZlODI2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMDM1NjY5MSwiZXhwIjoxNzIwNzg4NjkxfQ.MgBNKo51Xdn4UhnOc8wpBAq-nHJEI1umsLCxHylT0lk"
          },
    });
setNewUsers(res.data)

}

    
    catch(err){
        console.log(err)
    }

};
    getNewUsers()
},[])
    



  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Joined Members</span>
        <ul className="widgetSmList">
        {newUsers.map((user)=>(
            <li className="widgetSmListItem">
                <img src={user.profilePic || "https://image.lexica.art/full_jpg/928bd3bf-873a-487d-8202-19a395f7a1ff"} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>
                    Display
                </button>

            </li>
          ))}
        </ul>
    </div>
  )
}
