import './Login.css';
import NavigationBar from '../components/navigationBar';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-notifications/lib/notifications.css';
import { useNavigate } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';

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
  const [registrationCodiceFiscal, setRegistrationCodiceFiscal] = useState("")
  const [registrationPassword, setRegistrationPassword] = useState("")
  const [registrationPasswordConfirmed, setRegistrationPasswordConfirmed] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [gender, setGender] = useState("")
  const [dob, setDob] = useState("")
  const [region, setRegion] = useState("")
  const [country, setCountry] = useState("")
  const [phone, setPhone] = useState("")




  const handleCodiceFiscalChange = (event) => {
    setCodiceFiscal(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleRegistrationCodiceFiscalChange = (event) => {
    setRegistrationCodiceFiscal(event.target.value)
  }
  const handleRegistrationPasswordChange = (event) => {
    setRegistrationPassword(event.target.value)
  }
  const handleRegistrationPasswordConfirmedChange = (event) => {
    setRegistrationPasswordConfirmed(event.target.value)
  }
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }
  const handleSetGenderChange = (event) => {
    setGender(event.target.value)
  }
  const handleDobChange = (event) => {
    setGender(event.target.value)
  }
  const handleRegionChange = (event) => {
    setRegion(event.target.value)
  }
  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }


  const handleSubmission = (event) => {
    const data = new FormData(event.target);
    console.log(data);
    //SEND POST REQUEST
  }

  function addStyle() {
    var element = document.getElementById("signup");
    element.classList.add("visible");
    document.getElementById("login").classList.add("invisible")
  }

  function checkRegister(codice, password, confirmedPassword) {
    if (codice.length === 6 && password === confirmedPassword && password.length != 0) {
      document.cookie = `codice=${codice}`
      document.cookie = `password=${password}`
      NotificationManager.success('Registration succeed');
      document.getElementById("login").classList.add("full-opacity")
      document.getElementById("signup").classList.add("invisible")



    } else if (codice.length != 6) {
      NotificationManager.error('Codice fiscal length must be of 6 digits');
    } else if (password != confirmedPassword) {
      NotificationManager.error('Passwords should match');
    } else if (password.length === 0 || confirmedPassword.length === 0) {
      NotificationManager.error('All fields have to be filled');
    }
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
                <div className="field-text">Codice Fiscal:</div>
                <input
                  className="field"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                  onChange={handleCodiceFiscalChange}
                  value={codiceFiscal}
                />
              </div>
              <div className="field-container">
                <div className="field-text">Password:</div>
                <input
                  type="password"
                  className="field"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>
              <div className="button-container">
                <a className="role-button" onClick={() => {
                  checkLogin(codiceFiscal, password)
                }}>Connect</a>
              </div>
              <div className="text-container">
                <a onClick={addStyle}> Sign up</a>
              </div>
            </form>
          </div>
          <div className="signup-container">
            <div className="signup-card" id="signup">
              <div className="card-header">
                REGISTER
              </div>
              <hr className="line" />
              <form className="form-personal-data-register" onSubmit={console.log("submited")}>
                <div className="field-container">
                  <div className="field-text">First name:</div>
                  <input
                    className="field"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    onChange={handleFirstNameChange}
                    value={firstName}
                  />
                </div>
                <div className="field-container">
                  <div className="field-text">Last name:</div>
                  <input
                    className="field"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    onChange={handleLastNameChange}
                    value={lastName}
                  />
                </div>
                <div className="field-container">
                  <div className="field-text">Username:</div>
                  <input
                    className="field"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    onChange={handleUsernameChange}
                    value={username}
                  />
                </div>
                <div className="field-container">
                  <div className="field-text">Codice Fiscal:</div>
                  <input
                    className="field"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    onChange={handleRegistrationCodiceFiscalChange}
                    value={registrationCodiceFiscal}
                  />
                </div>
                
                <div className="field-container">
                  <div className="field-text">Password:</div>
                  <input
                    className="field"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    type="password"
                    onChange={handleRegistrationPasswordChange}
                    value={registrationPassword}
                  />
                </div>
                <div className="field-container">
                  <div className="field-text">Confirm Password:</div>
                  <input
                    className="field"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    type="password"
                    label="Search"
                    onChange={handleRegistrationPasswordConfirmedChange}
                    value={registrationPasswordConfirmed}
                  />
                </div>
                <div className="field-container">
                  <div className="field-text">Gender:</div>
                  <select name="gender" id="gender-select">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="field-container">
                  <div className="field-text">Date of birth:</div>
                  <input

                    className="field"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    onChange={handleDobChange}
                    value={dob}
                  />
                </div>
                <div className="field-container">
                  <div className="field-text">Region of birth:</div>
                  <input
                    className="field"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    onChange={handleRegionChange}
                    value={region}
                  />
                </div>
                <div className="field-container">
                  <div className="field-text">Country:</div>
                  <input
                    className="field"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    onChange={handleCountryChange}
                    value={country}
                  />
                </div>
                <div className="field-container">
                  <div className="field-text">Phone number:</div>
                  <input
                    className="field"
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    onChange={handlePhoneChange}
                    value={phone}
                  />
                </div>
                <div className="button-container-signup">
                  <a className="role-button" onClick={() => {
                    checkRegister(registrationCodiceFiscal, registrationPassword, registrationPasswordConfirmed)
                  }}>Sign up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default Login;
