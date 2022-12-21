import React, {useState} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


export const Studentenrolled = () => {

    const [course_selected, setCourse_selected] = useState('')
    const [document_id, setDocument_id] = useState('')
    console.log({ course_selected,document_id })

    const handleCourse_selected = (e) => {
      setCourse_selected(e.target.value)
    }

    const handleDocument_id = (e) => {
        setDocument_id(e.target.value)
      }
  
    const submitForm = () => {

      console.log({ course_selected, document_id })
      axios.post('http://127.0.0.1:8000/api/studentenrolled/', {
        course_selected: course_selected,
        document_id:document_id,
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

      <h2>Program Select</h2>
      <h3>for example "AI','CHEMISTRY'...</h3>
      <form className="Discipline-form" >

        <label htmlFor="text" className="form-label">Enter Program</label>
        <input type="text" placeholder="Which Programme you want to choose" name="course_selected" value={course_selected} onChange={handleCourse_selected}/>

        <label htmlFor="text" className="form-label">Document ID</label>
        <input type="text" placeholder="ID#" name="document_id" value={document_id} onChange={handleDocument_id}/>

        <button type="submit" onClick ={submitForm} >Submit </button>
      </form>
      <button className="link-btn" >Done? <NavLink to="/homepage">Click here.</NavLink></button>
    </div>
  )
}
export default Studentenrolled;