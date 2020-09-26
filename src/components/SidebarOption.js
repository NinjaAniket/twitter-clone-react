import React, { useEffect } from "react";
import "./sidebaroptions.css";

export default function SidebarOption({ active, Icon, text }) {
  return (
    <div className={`sidebarOption  ${active && "sidebarOption  --active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
