import React, { useState } from 'react';
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar"
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const New = ({inputs, title}) => {

    const [file, setFile] = useState("")

    console.log(file)

    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file)
                         : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                         alt="no-image" />
                    </div>
                    <div className="right">
                        <form action="">
                        <div className="formInput">
                                <label htmlFor='file'>
                                    Upload Image: <DriveFolderUploadOutlined className='icon'/>
                                </label>
                                <input type="file" id='file' onChange={(e)=> setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div>
                            {inputs.map((input) =>(
                                <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder}
                                />
                            </div>
                            ))}
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;
