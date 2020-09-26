import { Button } from "@material-ui/core";
import {
  Home,
  Twitter,
  Search,
  NotificationsNone,
  MailOutlineOutlined,
  MailOutlined,
  BookmarkBorderOutlined,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twittericon" />
      {/* <Search />
      <NotificationsNone /> */}
      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption Icon={Search} text="Explore" />
      <SidebarOption Icon={NotificationsNone} text="Notification" />
      <SidebarOption Icon={MailOutlined} text="MailOutlined" />

      <SidebarOption Icon={BookmarkBorderOutlined} text="Bookmark" />
      <SidebarOption Icon={ListAlt} text="List" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHoriz} text="more" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}
