import React, {useState,useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


export const Degree = () => {

    const [student_id, setId] = useState('')
    const [type_of_degree, setTod] = useState('')
    const [university_nation, setUn] = useState('')
    const [year_of_enrollment, setYoe] = useState('')
    const [year_of_graduation, setYog] = useState('')
    const [discipline, setDiscipline] = useState('')
    console.log({ student_id,type_of_degree,university_nation,year_of_enrollment,year_of_graduation,discipline })
    const handleId = (e) => {
      setId(e.target.value)
    }
    const handleTod = (e) => {
        setTod(e.target.value)
    }
    const handleUn = (e) => {
        setUn(e.target.value)
    }
    const handleYoe = (e) => {
        setYoe(e.target.value)
    }
    const handleYog = (e) => {
        setYog(e.target.value)
    }
    const handleDiscipline = (e) => {
        setDiscipline(e.target.value)
    }


  
    const submitForm = () => {

      console.log({ student_id,type_of_degree,university_nation,year_of_enrollment,year_of_graduation,discipline })
      axios.post('http://127.0.0.1:8000/api/degree/', {
        student_id: student_id,
        type_of_degree: type_of_degree,
        university_nation: university_nation,
        year_of_enrollment: year_of_enrollment,
        year_of_graduation: year_of_graduation,
        discipline: discipline,

      }).then(result => {
        console.log(result.data)
        alert('success')

      })
        .catch(error => {
          alert('service error')
          console.log(error)
        })
    }

    return (
        <div className="auth-form-container">
    
          <h2>Degree</h2>
          <h3>Please Insert your correct data below</h3>
          <form className="Discipline-form" >

          <label htmlFor="text" className="form-label">Id Number</label>
            <input type="text" placeholder="National ID#" name="student_id" value={student_id} onChange={handleId}/>
    
            <label htmlFor="text" className="form-label">Type Of Degree</label>
            <input type="text" placeholder="Type Of Degree" name="type_of_degree" value={type_of_degree} onChange={handleTod}/>

            <label htmlFor="text" className="form-label">University Of Nation</label>
            <input type="text" placeholder="Type" name="university_nation" value={university_nation} onChange={handleUn}/>

            <label htmlFor="text" className="form-label">Year Of Enrollment</label>
            <input type="date" placeholder="Year when you enrolled" name="year_of_enrollment" value={year_of_enrollment} onChange={handleYoe}/>

            <label htmlFor="text" className="form-label">Year Of Graduation</label>
            <input type="date" placeholder="Year of graduation" name="year_of_graduation" value={year_of_graduation} onChange={handleYog}/>

            <label htmlFor="text" className="form-label">Discipline </label>
            <input type="text" placeholder="Previously Selected" name="discipline" value={discipline} onChange={handleDiscipline}/>

            <button type="submit" onClick ={submitForm} >Submit </button>
          </form>
          <button className="link-btn" >Done? <NavLink to="/studentenrolled">Click here.</NavLink></button>
        </div>
      )
    }
    export default Degree;