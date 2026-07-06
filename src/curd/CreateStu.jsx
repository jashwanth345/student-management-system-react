import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./CreateStu.css";

const CreateStu = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const {name, email } = formData; //?destrcture state

  const handleChange = (event) => {
    console.log(event);
    const {name,value}=event.target
    setFormData({...formData,[name]:value})
  };

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    //!passing the data to server
    try{
      const payload = formData
      axios.post("https://student-management-backend-yzrj.onrender.com/students", payload)
      navigate("/viewall")
      toast.success('Successfully Created!')
    }catch(e){
      console.log(e);
    }finally{
      setFormData({
    name: "",
    email: "",
  })
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add students details below</h1>
        </div>
        <div>
          <label htmlFor="uname">Name : </label>
          <input
            type="text"
            id="uname"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="uemail">Email :</label>
          <input
            type="email"
            id="uemail"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button>SUBMIT</button>
        </div>
      </form>
    </>
  );
};
export default CreateStu;
