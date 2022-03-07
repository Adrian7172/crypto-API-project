import React from 'react'
import { Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';

import icon from '../images/cryptocurrency.png';
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">CryptoWorld</Link>
            </Typography.Title>
        </div>
        <Menu theme="dark">
            <Menu.Item  className='navbar-element'>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item  className='navbar-element'>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item className='navbar-element'>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
        
    </div>
  )
}

export default Navbar