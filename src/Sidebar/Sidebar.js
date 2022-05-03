import React from "react";
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div className="sidebar">
      
      <TwitterIcon className="sidebar__twitterIcon" />
      
        <Link to="/Home"><SidebarOption Icon={HomeIcon} text="Home" /></Link>
        <Link to="/Notifications"><SidebarOption Icon={NotificationsNoneIcon} text="Notifications" /></Link>
        <Link to="/Messages"><SidebarOption Icon={MailOutlineIcon} text="Messages" /></Link>
        <Link to="/Login"><SidebarOption Icon={PermIdentityIcon} text="Profile" /></Link>

        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>
    </div>
  );
}

export default Sidebar;
