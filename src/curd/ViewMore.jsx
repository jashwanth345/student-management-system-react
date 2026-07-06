//?since we display "only one student at a time", navigate to this page based on "individual user detail"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'
import "./ViewMore.css"

const ViewMore = () => {
    const [student,setStudent]=useState({})

    const {id}=useParams()
    console.log("slug",id);

    //!navigate-->func returned by useNavigate()
    const navigate = useNavigate()

    //!resolve promise-->async and await
    const getApi=async ()=>{
         const {data} = await axios.get("https://student-management-backend-yzrj.onrender.com/students/" + id)
         toast.success('View More Detail!')
        setStudent(data)
    }

    console.log("state",student);//obj
    
    //!fetching the data from server -->side-effect -->useEffect
    //?[]-->componentDidMount-->executes once
    useEffect(()=>{
        try{
           getApi()
        }catch(e){
            console.log(e);
        }
    },[])
  return (
    <>
       <section>
        <h2>Student Name : {student.name}</h2>
        <h2>Student Email : {student.email}</h2>
        <h2>ID : {student.id}</h2>
        <button onClick={()=>{navigate("/")}}>GO-TO-HOME</button>
        <button onClick={()=>{navigate(-1)}}>GO-BACK</button>
       </section>
    </>
  )
}
export default ViewMore

//!useParams()-->hook -->extract extra paramter val(slug val) by destructuring specific slug.
//?const {slug} = useParams()

//!Slug -->extra parameter(extra extension) given to path, slug value changes dynamically.
//ex :   "/path/:slug"
