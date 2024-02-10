import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#333" backgroundColor="#FFFFFF">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" textColor="#333">
          <CDBSidebarMenu>
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