import './Login.css';
import NavigationBar from '../components/navigationBar';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-notifications/lib/notifications.css';
import { useNavigate } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class Notifications extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'accept':
          NotificationManager.success('Info message');
          break;
        case 'refuse':
          NotificationManager.error('Success message');
          break;
      }
    };
  };
};

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


const Login = () => {



  const [codiceFiscal, setCodiceFiscal] = useState("")
  const [password, setPassword] = useState("")
 


  async function postRegister(registrationCodiceFiscal, registrationPassword, registrationPasswordConfirmed) {
    const rawResponse = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ registrationCodiceFiscal: registrationCodiceFiscal, registrationPassword: registrationPassword, registrationPasswordConfirmed: registrationPasswordConfirmed })
    });
    const content = await rawResponse.json();
    console.log(content)
  }


  const handleCodiceFiscalChange = (event) => {
    setCodiceFiscal(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


  function addStyle() {
    var element = document.getElementById("signup");
    element.classList.add("visible");
    document.getElementById("login").classList.add("invisible")
  }

  const navigate = useNavigate();


  async function checkLogin(codice, password) {
    if (getCookie("codice") === codice && getCookie("password") === password) {
      NotificationManager.success('Login success');
      navigate("/home");

    } else {
      NotificationManager.error('Codice fiscal and password are not matching.');
    }
  }

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
          <div className="card" id="login">
            <div className="card-header">
              LOGIN
            </div>
            <hr className="line" />
            <form className="form-personal-data" onSubmit={console.log("submited")}>
              <div className="field-container">
                <TextField
                  id="outlined-password-input"
                  label="Codice Fiscal"
                  size="small"
                  sx={{
                    backgroundColor: "#A6A6A6",
                    borderRadius: "5px",
                    borderColor: "#EEEEEE",
                    color: "#EEEEEE",
                    '& label.Mui-focused': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                  }}
                  autoComplete="current-password"
                  onChange={handleCodiceFiscalChange}
                  value={codiceFiscal}
                />
              </div>
              <div className="field-container">
                <TextField
                  type="password"
                  id="outlined-password-input"
                  label="Password"
                  size="small"
                  sx={{
                    backgroundColor: "#A6A6A6",
                    borderRadius: "5px",
                    borderColor: "#EEEEEE",
                    color: "#EEEEEE",
                    '& label.Mui-focused': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                  }}
                  autoComplete="current-password"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>
              <div className="button-container">

                <Button
                sx={{backgroundColor:"#EEEEEE",color:"#2A2A2A"}}
                 size="small" 
                 onClick={() => {
                  checkLogin(codiceFiscal, password)
                }}>Connect</Button>
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
}

export default Login;
