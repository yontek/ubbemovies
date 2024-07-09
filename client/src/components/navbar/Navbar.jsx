import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import logo from "../navbar/ubbe.png"
import { Link } from "react-router-dom";


const Navbar = ()=>{

        const[isScrolled,setIsScrolled] =  useState(false);

        window.onscroll =()=>{
            setIsScrolled(window.scrollY ?false:true)
            return()=>(window.onscroll == null)
        }

       

    return(
        <div className= {isScrolled?  "navbar scrolled": "navbar"} >
            <div className="container">
                <div className="left">
        <img src={logo}
            alt="" />

        <Link to="/" className="link"> 
        <span>Home</span>
        </Link>
        

        <Link to="/series" className="link">
        <span>Series</span>
        </Link>

       <Link to="/movies" className="link">
       <span>Movies</span>
       </Link>
         
        <span>New</span>
        <span>My list</span>

                </div>
                <div className="right">
                    <SearchIcon className="icon"/>
                    <span>KID</span>
                    <NotificationsIcon className="icon"/>
                    <img src="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     alt="" 
                     />

                     <div className="profile">
                     <KeyboardArrowDownIcon className="icon"/>
                     <div className="options">
                        <span>Setting</span>
                        <span>log out </span>
                     </div>
                     </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar