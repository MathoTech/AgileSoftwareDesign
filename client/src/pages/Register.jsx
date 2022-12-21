import './Register.css';
import NavigationBar from '../components/navigationBar';
import React, { useState,useEffect } from 'react';
import { NavLink} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-notifications/lib/notifications.css';
import { useNavigate } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api/student/';



function StudentRegister (){
    
  const [studentData,setstudentData] = useState({
      'first_name' : "",
      'last_name' : "",
      'username' : "",
      'codice_fiscal' : "",
      'gender' : "",
      'password' : "",
      'confirm_password' : "",
      'dob' : "",
      'region_of_birth' : "",
      'country' : "",
      'phone_no' : "",
      'status' : ""
  });
  const handleChange=(event)=>{
      setstudentData({
          ...studentData,
          [event.target.name]:event.target.value
      });
      
  }
  const submitForm=()=>{
      const studentFormData=new FormData();
      studentFormData.append('first_name', studentData.first_name)
      studentFormData.append('last_name', studentData.last_name)
      studentFormData.append('username', studentData.username)
      studentFormData.append('codice_fiscal', studentData.codice_fiscal)
      studentFormData.append('gender', studentData.gender)
      studentFormData.append('password', studentData.password)
      studentFormData.append('confirm_password', studentData.confirm_password)
      studentFormData.append('dob', studentData.dob)
      studentFormData.append('region_of_birth', studentData.region_of_birth)
      studentFormData.append('country', studentData.country)
      studentFormData.append('phone_no', studentData.phone_no)

      try{
          axios.post(baseUrl,studentFormData).then((response)=>{
              console.log(response)
  
          });
      }catch(error){
          console.log(error);
          setstudentData({'status':false})
      }

      
  };



  
  const studentLoginStatus = localStorage.getItem('studentLoginStatus')
  if (studentLoginStatus === 'true') {
    window.location.href = '/dashboard';
  }

  useEffect(()=>{
      document.title='Student Register'
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
          <div className="title-blue"> Universita della Calabria</div>
        </div>
        <div className="card-container">
        
          <div className="signup-container">
            <div className="signup-card" id="signup">
              <div className="card-header">
                REGISTER
              </div>
              <hr className="line" />
              <form className="form-personal-data-register" onSubmit={console.log("submited")}>
                <div className="field-container">
                  <div className="field-text">First name:</div>
                  <input onChange={handleChange} type="text" placeholder="full name" name="first_name"  />
                </div>
                <div className="field-container">
                  <div className="field-text">Last name:</div>
                  <input  onChange={handleChange} type="text" placeholder="last name"  name="last_name"/>
                </div>
                <div className="field-container">
                  <div className="field-text">Username:</div>
                  <input  onChange={handleChange} type="text" placeholder="username"  name="username"/>
                </div>
                <div className="field-container">
                  <div className="field-text">Codice Fiscal:</div>
                  <input  onChange={handleChange} type="text" placeholder="codice"  name="codice_fiscal"/>
                </div>

                <div className="field-container">
                  <div className="field-text">Password:</div>
                  <input onChange={handleChange} type="password" placeholder="password"  name="password"/>
                </div>
                <div className="field-container">
                  <div className="field-text">Confirm Password:</div>
                  <input onChange={handleChange} type="password" placeholder="repeat password"  name="confirm_password"/>
                </div>
                <div className="field-container">
                  <div className="field-text">Gender:</div>
                  <input onChange={handleChange} type="text" placeholder="male female"  name="gender"/>
                </div>
                <div className="field-container">
                  <div className="field-text">Date of birth:</div>
                  <input onChange={handleChange} type="text" placeholder="dob"  name="dob"/>
                </div>
                <div className="field-container">
                  <div className="field-text">Region of birth:</div>
                  <input onChange={handleChange} type="text" placeholder="region"  name="region_of_birth"/>
                </div>
                <div className="field-container">
                  <div className="field-text">Country:</div>
                  <input onChange={handleChange} type="text" placeholder="country"  name="country"/>
                </div>
                <div className="field-container">
                  <div className="field-text">Phone number:</div>
                  <input onChange={handleChange} type="text" placeholder="1234"  name="phone_no"/>
                </div>
                <div className="button-container-signup">
                  <button type="submit" className="role-button" onClick={submitForm}>Sign up</button>
                </div>
                <button className="link-btn" >Already have an account? <NavLink to="/">Login here.</NavLink></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default StudentRegister;
