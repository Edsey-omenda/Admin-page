import React from 'react';
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import TableList from "../../components/table/Table"

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                    <h1 className="title">Information</h1>
                    <div className="item">
                        <img src="https://media.istockphoto.com/id/1155214538/photo/woman-suffering-an-anxiety-attack-alone-in-the-night.jpg?b=1&s=612x612&w=0&k=20&c=Xy57-3fzMTiIt1FldGUCmEU9jGN0yTvNjSi7QGjCAwQ=" 
                        alt="" 
                        className="itemImg" />
                        <div className="details">
                            <h1 className="itemTitle">Jane Doe</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">janedoe@gmail.com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">+254 0712345678</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">Moi Avenue Nairobi</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">Kenya</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Chart aspect={2/1} title="User Spending (Last 6 months)"/>
                </div>
            </div>
            <div className="bottom">
            <h1 className="title">Latest Transactions</h1>
                <TableList />
            </div>
            </div>
        </div>
    );
}

export default Single;
