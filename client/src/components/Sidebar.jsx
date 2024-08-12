import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff"  className='bg-success'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/admin" className="text-decoration-none" style={{ color: 'inherit' }}>
           ADMIN
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/addproduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Add Product</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/listproducts" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">List Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/listorders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">List Orders</CDBSidebarMenuItem>
            </NavLink>
           
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            LOG OUT
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;