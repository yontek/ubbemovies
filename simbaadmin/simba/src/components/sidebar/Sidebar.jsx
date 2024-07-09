import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import {Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
               <Link to="/" className='link'>
                <li className="sidebarListItem">
                 <LineStyleIcon/>
                Home
                </li>
                </Link>
                <li className="sidebarListItem">
                 <TimelineIcon/>
                Analytics
                </li>
                <li className="sidebarListItem">
                 <TrendingUpIcon/>
                Sales
                </li>
                
            </ul> 
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <Link to="/users" className="link"> 
                <li className="sidebarListItem">
                 <PersonOutlineOutlinedIcon/>
                Users
                </li>
                </Link>
                <Link to="/movies" className="link"> 
                <li className="sidebarListItem">
                 <PlayCircleOutlineIcon/>
                Movies
                </li>
                </Link>
                <li className="sidebarListItem">
                 <AttachMoneyOutlinedIcon/>
                Transactions
                </li>
                <li className="sidebarListItem">
                 <EqualizerOutlinedIcon/>
                Reports
                </li>
            </ul>      
         </div>
         <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                 <MarkunreadOutlinedIcon />
                Mail
                </li>
                <li className="sidebarListItem">
                 <NotesOutlinedIcon/>
                Feedback
                </li>
                <li className="sidebarListItem">
                <ChatBubbleOutlineOutlinedIcon/>
                Messages
                </li>
            </ul>         
    </div>
    <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                 <WorkOutlineOutlinedIcon />
                Manage
                </li>
                <li className="sidebarListItem">
                 <TimelineIcon/>
                Analytics
                </li>
                <li className="sidebarListItem">
                <ErrorOutlinedIcon/>
                Reports
                </li>
            </ul>         
        </div>
        </div>
       </div>
  )
}
