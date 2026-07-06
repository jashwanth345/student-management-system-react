import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import toast from 'react-hot-toast';
import "./ViewAll.css"

const ViewAll = () => {
  
  const [student,setStudent]=useState([])

  //resolve promise -->async and await
  const getApi=async ()=>{
     const {data} = await axios.get("http://localhost:5000/students")
      setStudent(data)
  }

  console.log("state",student);
  
  //fetching data from server -->side-effect-->useEffect
  //?[]-->componentDidMount --> "executes once"
  useEffect(()=>{
    try{
     getApi()
    }catch(e){
      console.log(e);
    }
  },[])

  const handleDelete=(id)=>{
    const confirmed=window.confirm("Confirm to felete the data")
    console.log(confirmed);
  if(confirmed){
    axios.delete("http://localhost:5000/students/"+id).then(()=>{
      getApi() //? display all remaining valueback o UI
      toast.success('Successfully Deleted!')
    }).catch((e)=>{
      console.log(e);
    })
  }else{
    toast.error("NOt Deleted!.")
  }
}
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>STUDENT NAME</th>
            <th>STUDENT EMAIL</th>
            <th>MORE OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          {student.map((val)=>{
            {/* console.log("current val",val)//obj */}
            return (
              <Fragment key={val.id}>
                <tr>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>
                    <Link to={`/viewmore/${val.id}`}>
                      <button><FaUsersViewfinder /></button>
                    </Link>
                    <Link to={`/edit/${val.id}`}>
                      <button><FaUserEdit /></button>
                    </Link>
                    <button onClick={()=>{handleDelete(val.id)}}><AiFillDelete /></button>
                  </td>
                </tr>
              </Fragment>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default ViewAll

