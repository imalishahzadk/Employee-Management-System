import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmployee = () => {
    const {id} = useParams()
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        salary: "",
        address: "",
        categoryID: "",
      });
      const [category, setCategory] = useState([])
      const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:8080/auth/category')
        .then(result => {
            if(result.data.Status) {
                setCategory(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))

        axios.get('http://localhost:8080/auth/employee/'+id)
        .then(result => {
            setEmployee({
                ...employee,
                name: result.data.Result[0].name,
                email: result.data.Result[0].email,
                address: result.data.Result[0].address,
                salary: result.data.Result[0].salary,
                categoryID: result.data.Result[0].categoryID,
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8080/auth/editEmployee/'+id, employee)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/employee')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className='col-12'>
            <label for="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="category" className="form-label">
              Category
            </label>
            <select name="category" id="category" className="form-select"
                onChange={(e) => setEmployee({...employee, categoryID: e.target.value})}>
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditEmployee

// import { useParams, useNavigate } from 'react-router-dom'
// import React,{useState,useEffect} from 'react'
// import axios from 'axios'   
// import "./addEmployee.css"


// const EditEmployee = () => {
//     const {id} = useParams()
//     const [category, setCategory]= useState([])

//     const [employee, setEmployee] = useState({
//         name: "",
//         email: "",
//         salary: "",
//         address: "",
//         categoryID: "",
//       });

//       useEffect(() => {
//           axios.get('http://localhost:8080/auth/category')
//           .then(res => {
//               if(res.data.Status){
//                   setCategory(res.data.Result)
//               }
//               else{
//                   alert(res.data.Error)
//               }
//           })
//           .catch(err => console.log(err))

//           axios.get(`http://localhost:8080/auth/employee/`+ id)
//           .then(result => {
//             setEmployee({
//                 ...employee,
//                 name: result.data.Result[0].name,
//                 email: result.data.Result[0].email,
//                 address: result.data.Result[0].address,
//                 salary: result.data.Result[0].salary,
//                 categoryID: result.data.Result[0].categoryID,

//             })
//           })
//           .catch(err => console.log(err))
//       },[])

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:8080/auth/editEmployee/` + id, employee)
//         .then(res => {
//             if(res.data.Status){
//                 navigate('/dashboard/employee')
//             }
//             else{
//                 alert(res.data.Error)
//             }
//         })
//         .catch(err => console.log(err))
//       }

//       const navigate = useNavigate()
//   return (
//     <form className="form-style-9" onSubmit={handleSubmit}>
//     <ul>
//       <li>
//         <input
//           type="text"
//           name="name"
//           className="field-style field-split align-left"
//           placeholder="Name"
//           required
//           value={employee.name}//fetching name from database to edit
//           onChange={(e) =>
//             setEmployee({ ...employee, name: e.target.value })
//           }
//         />
//         <input
//           type="email"
//           name="email"
//           className="field-style field-split align-right"
//           placeholder="Email"
//           required
//           value={employee.email}//fetching name from database to edit
//           onChange={(e) =>
//             setEmployee({ ...employee, email: e.target.value })
//           }
//         />
//       </li>
//       <li>
//         <input
//           type="text"
//           name="address"
//           className="field-style field-full align-right"
//           placeholder="Address"
//           required
//           value={employee.address}//fetching name from database to edit
//           onChange={(e) =>
//             setEmployee({ ...employee, address: e.target.value })
//           }
//         />
//       </li>
//       <li>
//         <input
//           type="text"
//           name="salary"
//           className="field-style field-full align-none"
//           placeholder="Salary"
//           required
//           value={employee.salary}//fetching name from database to edit
//           onChange={(e) =>
//             setEmployee({ ...employee, salary: e.target.value })
//           }
//         />
//       </li>
//       <li>
//       <select className="form-select mt-3" name="category" id="category"required
//               onChange={(e) => setEmployee({...employee, categoryID: e.target.value})}>
//                 <option disabled value="">Category</option>
//                 {category.map((c) => {
//                   return <option value={c.id}>{c.name}</option>;
//                })}
//       </select>
//       </li>
//       <li>
//         <button className="button" id="submit" type="submit">
//           Edit Employee
//         </button>
//       </li>
//     </ul>
//   </form>
//   )
// }

// export default EditEmployee

{/* <div class="form-body">
<div class="row">
  <div class="col-md-12 form-holder">
    <div class="form-content">
      <div class="form-items">
        <h3>Edit Employee</h3>
        <form class="requires-validation" novalidate onSubmit={handleSubmit} > 
          <div class="row">
            <div class="col-md-12">
              <input class="form-control" type="text" name="name" 
              id="name" placeholder="Full Name" required 
              value={employee.name}//fetching name from database to edit
               onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }/>
            </div>
            <div class="col-md-12">
              <input class="form-control" type="email" 
              name="email" id="email" 
              placeholder="E-mail Address" required 
              value={employee.email}//fetching name from database to edit
               onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }/>
            </div>
            <div class="col-md-12">
              <input class="form-control" type="text" 
              name="address" id="address" 
              placeholder="Address" required 
              value={employee.address}//fetching name from database to edit
               onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }/>
            </div>
            <div class="col-md-12">
              <input class="form-control" type="text" 
              name="salary" placeholder="Salary" 
              id="salary" required 
              value={employee.salary}//fetching name from database to edit
               onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }/>
            </div>
            <div class="col-md-12">
              <select class="form-select mt-3" name="category" id="category"required
              onChange={(e) => setEmployee({...employee, categoryID: e.target.value})}>
                <option selected disabled value="">Category</option>
                {category.map((c) => {
                  return <option value={c.id}>{c.name}</option>;
               })}
              </select>
            </div>
            <div class="form-button mt-3">
              <button id="submit" type="submit" class="btn btn-primary">Edit Employee</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div> */}