import React from 'react';
import './InforUser.css';
import { useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';


const InforUser = () =>{
    const navigate = useNavigate();


    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () =>{
        navigate('/login')
    }

    const handleNewFlim =() =>{
        navigate('/newfilm')
    }

    const handleHome = () =>{
        navigate('/')
    }

    const handleCommingSoonFilm = () =>{
        navigate('/commingsoonfilm')
    }

    const handlePopularFilm = () =>{
        navigate('/phimthinhhanh')
    }

    const handleInforUser = () =>{
        navigate('/inforuser')
    }

    return (
        <>
         <div className="Menu-user">
            <button type="button" onClick={handleHome}>Trang chủ</button>
            <button type="button" onClick={handleNewFlim}>Phim mới</button>
            <button type="button" onClick={handleCommingSoonFilm}>Phim sắp chiếu</button>
            <button type="button" onClick={handlePopularFilm}>Phim thịnh hành</button>
            <div className="Login-home">
                <button type="button" onClick={handleLogin}>Log out</button>
                {/* <span>/</span>
                <button type="button" onClick={handleRegister}>Register</button> */}
            </div>
            <div className="icon-home"></div>
            <div className="profile-menu-user">
                <button className="icon-ant" type="button" onClick={handleInforUser}><UserOutlined /></button>
            </div>
            <table>
            <tr>
                <th>FullName</th>
                <th>Lê Nhật Duy</th>
            </tr>
            <tr>
                <td>Birthday</td>
                <td>5/10/2002</td>
               
            </tr>
            <tr>
                <td>UserName</td>
                <td>admin123</td>
                
            </tr>
            <tr>
                <td>Email</td>
                <td>duy950630@gmail.com</td>
            </tr>
        </table>
        </div>
        <h2 className='title-user'>Information</h2>
        <hr className="separator-user"></hr>

        
        </>
      );
    };

export default InforUser;