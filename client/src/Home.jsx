import './Home.css';
import NavigationBar from './components/navigationBar';
import React, { useState } from 'react';

const Home = () => {
  const [firstName, setFirstName] = useState("")
  const [name, setName] = useState("")
  const [birth, setBirth] = useState("")
  const [gender, setGender] = useState("")
  const [citizenship, setCitizenship] = useState("")
  const [nationality, setNationality] = useState("")
  const [codiceFiscal, setCodiceFiscal] = useState("")

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleBirthChange = (event) => {
    setBirth(event.target.value)
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value)
  }
  const handleCitizenshipChange = (event) => {
    setCitizenship(event.target.value)
  }
  const handleNationalityChange = (event) => {
    setNationality(event.target.value)
  }
  const handleCodiceFiscalChange = (event) => {
    setCodiceFiscal(event.target.value)
  }

  const handleSubmission = (event) => {
    const data = new FormData(event.target);
    console.log(data);
    //envoyer requete Post a un serveur
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
          <div className="card">
            <div className="card-header">
              PERSONAL DATA
            </div>
            <hr className="line" />
            <form className="form-personal-data" onSubmit={handleSubmission}>
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
                <div className="field-text">Name:</div>
                <input
                  className="field"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                  onChange={handleNameChange}
                  value={name}
                />
              </div>
              <div className="field-container">
                <div className="field-text">Date of birth:</div>
                <input
                  className="field"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                  onChange={handleBirthChange}
                  value={birth}
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div className="field-container">
                <div className="field-text">Gender:</div>
                <fieldset className="set">
                  <input name="gender" type="radio" id="male" value="male" onChange={handleGenderChange}
                  value={gender}/>
                    <img className="gender-icon" src="/icons/male.png"/>
                    <input name="gender" type="radio" id="female" value="female" onChange={handleGenderChange}
                  value={gender}/>
                    <img className="gender-icon" src="/icons/female.png"/>
                </fieldset>
              </div>
              <div className="field-container">
                <div className="field-text">Citizenship:</div>
                <select id="citizenship">
                <option value="france">France</option>
                <option value="italy">Italy</option>
                </select>
              </div>
              <div className="field-container">
                <div className="field-text">Nationality:</div>
                <select id="citizenship">
                <option value="france">France</option>
                <option value="italy">Italy</option>
                </select>
              </div>
              <div className="field-container">
                <div className="field-text">Provincia:</div>
                <select id="citizenship">
                <option value="france">Ile de France</option>
                <option value="italy">Bretagne</option>
                </select>
              </div>
              <div className="field-container">
                <div className="field-text">City:</div>
                <select id="citizenship">
                <option value="france">Paris</option>
                <option value="italy">Marseille</option>
                </select>
              </div>
              <div className="field-container">
                <div className="field-text">Code fiscale:</div>
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
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
