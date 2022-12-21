import './Login.css';
import NavigationBar from '../components/navigationBar';
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-notifications/lib/notifications.css';
import { useNavigate } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/student-login'



function StudentLogin() {

  const [studentLoginData, setstudentLoginData] = useState({

    'username': "",
    'password': ""
  });

  const handleChange = (event) => {

    setstudentLoginData({
      ...studentLoginData,
      [event.target.name]: event.target.value
    });

  }

  const submitForm = () => {
    const studentFormData = new FormData;
    studentFormData.append('username', studentLoginData.username)
    studentFormData.append('password', studentLoginData.password)
    try{
      axios.post(baseUrl, studentFormData)
      .then((res)=>{
        if(res.data.bool===true){
          localStorage.setItem('studentLoginStatus',true)
        }
        
      });
    }catch (error) {
      console.log(error);
 
    }

  }

  const studentLoginStatus = localStorage.getItem('studentLoginStatus')
  if (studentLoginStatus === 'true') {
    window.location.href = '/dashboard';
  }


  useEffect(() => {
    document.title = 'Student Login'
  });


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavigationBar />
      <div className="home-container">
        <div className="title">
          <img src="/icons/form.png" alt="form-icon" className="form-icon" />
          <div className="title-white">Attempt to</div>
          <div className="title-blue"> Universita Della Calabria</div>
        </div>
        <div className="card-container">
          <div className="card" id="login">
            <div className="card-header">
              LOGIN
            </div>
            <hr className="line" />
            <form className="form-personal-data" onSubmit={console.log("submited")}>
              <div className="field-container">
              <input onChange={handleChange} type="text" placeholder="username" value={studentLoginData.username} name="username" />
              </div>
              <div className="field-container">
              <input onChange={handleChange} type="password" placeholder="password" value={studentLoginData.password} name="password" />
              </div>
              <div className="button-container">

                <Button
                sx={{backgroundColor:"#EEEEEE",color:"#2A2A2A"}}
                 size="small"
                 type="submit" 
                 onClick={submitForm}
                 >Sign In</Button>
              </div>
              <button className="link-btn" >Don't have an account? <NavLink to="/register">Register here.</NavLink></button>
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default StudentLogin;
