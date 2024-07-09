import "./user.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
import {Link } from "react-router-dom";




export default function User() {
  return (
    <div className="user">
<div className="useTitleContainer">
   <h1 className="userTitle"> Edit User</h1>
   <Link to="/newUser">
   <button className="userAddButton">Create</button>
   </Link>
</div>
<div className="userContainer">
    <div className="userShow">
        <div className="userShowTop">
        <img src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         alt="" 
         className="userShowImg" 
         />
         <div className="userShowTopTitle">
            <span className="userShowUsername">Yonny Tek</span>
            <span className="userShowUserTitle">Player1</span>
         </div>  
        </div>
        <div className="userShowBottom">
            <span className="userShowTitle"> Account Details</span>

            <div className="userShowInfo">
            <PermIdentityIcon className="userShowIcon"/>
            <span className="userShowInfoTitle">yon333</span>
            </div>
            <div className="userShowInfo">
            < CalendarTodayIcon className="userShowIcon"/>
            <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle"> Contact Details</span>
            <div className="userShowInfo">
            <PhoneAndroidIcon className="userShowIcon"/>
            <span className="userShowInfoTitle">+251999999</span>
            </div>
            <div className="userShowInfo">
            <MailOutlineIcon className="userShowIcon"/>
            <span className="userShowInfoTitle">yonny@gm.com</span>
            </div>
            <div className="userShowInfo">
            <LocationOnIcon className="userShowIcon"/>
            <span className="userShowInfoTitle">Addis Ababa | Etihopia </span>
            </div>
           
        </div>
    </div>
    <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        
        <form  className="userUpdateForm">
            <div className="userUpdateLeft">

                <div className="userUpdateItem">
                    <label>Username</label>
                    <input 
                    type="text" 
                    placeholder="yonn33" 
                    className="userUpdateInput"
                    />
                </div>
            
            
            <div className="userUpdateItem">
                <label>Full Name</label>
                <input 
                type="text" 
                placeholder="Yonny Tek" 
                className="userUpdateInput"
                />
            
            <div className="userUpdateItem">
                <label>Email</label>
                <input 
                type="text" 
                placeholder="yonny@gm.com" 
                className="userUpdateInput"
                />
            </div>
            <div className="userUpdateItem">
                <label>Phone</label>
                <input 
                type="text" 
                placeholder="+251999999" 
                className="userUpdateInput"
                />
            </div>
            <div className="userUpdateItem">
                <label>Address</label>
                <input 
                type="text" 
                placeholder="Addis Ababa | Etihopia" 
                className="userUpdateInput"
                />
            </div>
            </div>
            </div>
            <div className="userUpdateRight">
                <div className="userUpdateUpload">
                    <img className="userUpdateImg" src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     alt=""
                      />
                      <label htmlFor="file"> <PublishIcon className="userUpdateIcon" /> 
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="userUpdateButton">Update</button>
            </div>
        </form>
    </div>
</div>
    </div>
  )
}
