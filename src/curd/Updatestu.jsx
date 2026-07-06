// //?Since we edit only one student detail at a time, navigate based on individual stu detail

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useParams } from "react-router-dom";


// const Updatestu = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });
//    const { id } = useParams();
//    console.log(id);
   
//   const { name, email } = formData; //?destrcture state

//   const handleChange = (event) => {
//     console.log(event);
//     const {name,value}=event.target
//     setFormData({...formData,[name]:value})
//   };

//   const navigate = useNavigate()
//   useEffect(() => {
//   axios.get(`http://localhost:5000/students/${id}`)
//     .then((res) => {
//       setFormData(res.data);
//     });
// });
//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     //!passing the data to server
//     try{
//       const payload = formData
//       await axios.put(
//   `http://localhost:5000/students/${id}`,
//   payload
// );
//       navigate("/viewall")
//       toast.success('Successfully Updated!')
//     }catch(e){
//       console.log(e);
//     }finally{
//       setFormData({
//     name: "",
//     email: "",
//   })
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <h1>Update students details below</h1>
//         </div>
//         <div>
//           <label htmlFor="uname">Name : </label>
//           <input
//             type="text"
//             id="uname"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="uemail">Email :</label>
//           <input
//             type="email"
//             id="uemail"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <button>UPDATE</button>
//         </div>
//       </form>
//     </>
//   );
// };
// export default Updatestu;


// Updatestu.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Updatestu = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const { name, email } = formData;

  // Fetch existing student details
  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get(`https://student-management-backend-yzrj.onrender.com/students/${id}`)
        setFormData(data);
      } catch (error) {
        console.log(error);
        toast.error("Unable to fetch student details!");
      }
    };

    getStudent();
  }, [id]);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Update student
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`https://student-management-backend-yzrj.onrender.com/students/${id}`, formData)

      toast.success("Successfully Updated!");
      navigate("/viewall");
    } catch (error) {
      console.log(error);
      toast.error("Update Failed!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Update Student Details</h1>
        </div>

        <div>
          <label htmlFor="uname">Name :</label>
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
          <button type="submit">UPDATE</button>
        </div>
      </form>
    </>
  );
};

export default Updatestu;