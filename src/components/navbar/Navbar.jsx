import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';
import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import "./navbar.scss"

const Navbar = () => {

    const {dispatch} = useContext(DarkModeContext)

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='search...'/>
                    <SearchOutlined />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className='icon'/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlined className='icon' onClick={(e)=> dispatch({type: "TOGGLE"})}/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className='icon'/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className='icon'/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ListOutlined className='icon'/>
                    </div>
                    <div className="item">
                        <img 
                        src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        className='avatar'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
