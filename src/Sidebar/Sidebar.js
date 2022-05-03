import React from "react";
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link } from "react-router-dom";

function Sidebar() {

	return (
		<div className="sidebar">
			<Link to="/"><TwitterIcon className="sidebar__twitterIcon" /></Link>	
			<Link to="/Home"><SidebarOption Icon={HomeIcon} text="Home" /></Link>
			<Link to="/Profile"><SidebarOption Icon={PermIdentityIcon} text="Profile" /></Link>
		</div>
	);
}

export default Sidebar;
