import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addEmployee.css"

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    categoryID: "",
    image: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('address', employee.address);
    formData.append('salary', employee.salary);
    formData.append('image', employee.image);
    formData.append('categoryID', employee.categoryID);

    axios.post('http://localhost:8080/auth/addEmployee', formData)
    .then(res => {
        if(res.data.Status){
            navigate("/dashboard/employee")
        }else{
            setErrors(result.date.Error)
        }
    })    .catch(err => console.log(err))
  }
  return (
      <form className="form-style-9" onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="text"
              name="name"
              className="field-style field-split align-left"
              placeholder="Name"
              required
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
            <input
              type="email"
              name="email"
              className="field-style field-split align-right"
              placeholder="Email"
              required
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </li>
          <li>
            <input
              type="password"
              name="password"
              className="field-style field-split align-left"
              placeholder="Password"
              required
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
            <input
              type="text"
              name="address"
              className="field-style field-split align-right"
              placeholder="Address"
              required
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </li>
          <li>
            <input
              type="text"
              name="salary"
              className="field-style field-full align-none"
              placeholder="Salary"
              required
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </li>
          <li>
            <select
              className="form-select mt-3"
              name="category"
              id="category"
              required
              onChange={(e) => setEmployee({ ...employee, categoryID: e.target.value })}
            >
              <option disabled value="" selected>
                Category
              </option>
              {category.map((c) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </li>
          <li>
            <input
              className="form-control"
              type="file"
              name="image"
              id="inputGroupFile01"
              placeholder="Image should be passport size"
              required
              onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
            />
          </li>
          <li>
            <button className="button" id="submit" type="submit">
              Add Employee
            </button>
          </li>
        </ul>
      </form>

  );
  }  
export default AddEmployee;