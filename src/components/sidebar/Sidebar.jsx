import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import "./sidebar.scss";
import {Link} from "react-router-dom";
import { AccountBox, Dvr, Inventory2, LocalShipping, Logout, NotificationsNone, Person2Outlined, Psychology, QueryStatsOutlined, SettingsApplications, SettingsSystemDaydream } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Edseyadmin</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <Person2Outlined className='icon'/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                    <Inventory2 className='icon'/>
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                    <Dvr className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                    <LocalShipping className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                    <QueryStatsOutlined className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                    <NotificationsNone className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydream className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <Psychology className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplications className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBox className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <Logout className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
}

export default Sidebar;
