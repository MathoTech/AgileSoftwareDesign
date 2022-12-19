import "./Login.css";
import NavigationBar from "../components/navigationBar";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-notifications/lib/notifications.css";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/student-login";

class Notifications extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "accept":
          NotificationManager.success("Info message");
          break;
        case "refuse":
          NotificationManager.error("Success message");
          break;
      }
    };
  };
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [studentLoginData, setstudentLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setstudentLoginData({
      ...studentLoginData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = () => {
    const studentFormData = new FormData();
    studentFormData.append("username", studentLoginData.username);
    studentFormData.append("password", studentLoginData.password);
    try {
      axios.post(baseUrl, studentFormData).then((res) => {
        if (res.data.bool === true) {
          localStorage.setItem("studentLoginStatus", true);
          navigate("/selectdegree");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const studentLoginStatus = localStorage.getItem("studentLoginStatus");
  if (studentLoginStatus === "true") {
    navigate("/dashboard");
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <NavigationBar />
      <div className="home-container">
        <div className="title">
          <img src="/icons/form.png" alt="form-icon" className="form-icon" />
          <div className="title-white">Attempt to</div>
          <div className="title-blue"> Universita della Calabria</div>
        </div>
        <div className="card-container">
          <div className="card" id="login">
            <div className="card-header">LOGIN</div>
            <hr className="line" />
            <form
              className="form-personal-data"
              onSubmit={console.log("submited")}
            >
              <div className="field-container">
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="username"
                  value={studentLoginData.username}
                  name="username"
                />
              </div>
              <div className="field-container">
                <input
                  onChange={handleChange}
                  type="password"
                  placeholder="password"
                  value={studentLoginData.password}
                  name="password"
                />
              </div>
              <div className="button-container">
                <Button
                  sx={{ backgroundColor: "#EEEEEE", color: "#2A2A2A" }}
                  size="small"
                  onClick={submitForm}
                >
                  Connect
                </Button>
              </div>
              <div className="text-container">
                <a onClick={() => navigate("/register")}> Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Login;
