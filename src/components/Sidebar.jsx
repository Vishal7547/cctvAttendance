import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        background: "rgb(0,0,44)",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="rgb(0,0,44)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Purnea College of <br /> Engineering
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" textColor="#333">
          <CDBSidebarMenu textColor="#fff">
            <NavLink exact to="#" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Analytics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="#" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Members</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="#" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Staff</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
