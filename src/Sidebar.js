import React, { useState } from 'react';
import "./sidebar.css";
import styled from '@emotion/styled'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Sidebar() {
    const[signupOpen,setSignupOpen]= useState(false);
    const toggleSignup=()=>{
        setLoginOpen(false);
        signupOpen?setSignupOpen(false):setSignupOpen(true);
    }

    const[loginOpen,setLoginOpen]= useState(false);
    const toggleLogin=()=>{
        setSignupOpen(false);
        loginOpen?setLoginOpen(false):setLoginOpen(true);
    }

    return (

        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            

            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={PersonOutlineIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>
            
            
            <Button  variant="outlined" className="sidebar__tweet" onClick={toggleSignup} >Sign Up</Button>
            <Button  variant="outlined" className="sidebar__tweet" onClick={toggleLogin}>Login</Button>

            {signupOpen && <div className="signup">
            <input class="signup_textBox"  type="text"  placeholder="Enter Your Full Name"/>
            <input class="signup_textBox"  type="text"  placeholder="Choose A Username"/>
            <input class="signup_textBox"  type="text"  placeholder="Choose A Password"/>
            <Button  variant="outlined" className="sidebar__tweet" >Upload Profile Pic</Button>
            <Button  variant="outlined" className="sidebar__tweet" >Submit</Button>

            </div>}

            {loginOpen && <div className="signup">
            <input class="signup_textBox"  type="text"  placeholder="Username"/>
            <input class="signup_textBox"  type="text"  placeholder="Password"/>
            <Button  variant="outlined" className="sidebar__tweet" >Login</Button>

            </div>}

        </div>
    )
}

export default Sidebar
