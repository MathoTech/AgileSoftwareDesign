import React, {useState,useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";




// const baseUrl='http://127.0.0.1:8000/api/discipline/'
export const MBP = () => {

    const [named, setNamed] = useState('')
    console.log({named})
    const handleNamed = (e) => {
      setNamed(e.target.value)
    }
  
    const submitForm = () => {

      console.log({ named })
      axios.post('http://127.0.0.1:8000/api/discipline/', {
        name: named,
      }).then(result => {
        console.log(result.data)
        alert('success')

      })
        .catch(error => {
          alert('service error')
          console.log(error)
        })
    }



    // const [studentData,setstudentData] = useState({
    //     'name' : ""
    // });
    // const handleChange=(event)=>{
    //     setstudentData({
    //         ...studentData,
    //         [event.target.name]:event.target.value
    //     });
        
    // }
    // const submitForm=()=>{
    //     const studentFormData=new FormData();
    //     studentFormData.append('name', studentData.name)

    //     try{
    //         axios.post(baseUrl,studentFormData).then((response)=>{
    //             console.log(response)
    
    //         });
    //     }catch(error){
    //         console.log(error);
    //         setstudentData({'status':false})
    //     }

        
  return (
    <div className="auth-form-container">

      <h2>Discipline</h2>
      <h3>Apply for "Masters"? "Bachelors" ?"PHD" ?</h3>
      <form className="Discipline-form" >

        <label htmlFor="text" className="form-label">Masters?</label>
        {/* <input type="text" placeholder="Type Masters" name="name" onChange={handleChange}/> */}
        <input type="text" placeholder="Type Masters" name="name" value={named} onChange={handleNamed}/>
        <button type="submit" onClick ={submitForm} >Submit </button>
      </form>
      <button className="link-btn" >Done? <NavLink to="/document">Click here.</NavLink></button>
    </div>
  )
}
export default MBP;