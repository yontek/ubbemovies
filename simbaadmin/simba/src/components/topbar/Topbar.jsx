import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'> 
        
    <div className="topbarWrapper">
        <div className="topleft">
            <span className="logo">Simba Admin</span>
            
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
            <NotificationsNoneIcon/>
            <span className="topIconBadge">2</span>
            </div>   
            <div className="topbarIconContainer">
            <LanguageIcon/>
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <SettingsIcon/>
        </div>
        <img src="https://images.pexels.com/photos/3571576/pexels-photo-3571576.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='topAvatar'/>
    </div>
    </div>
    </div>
    
  )
}
