import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./manageEmployee.css"
const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate()
  
  useEffect(() => {
    axios.get('http://localhost:8080/auth/employee')
      .then(res => {
        if (res.data.Status) {
          setEmployee(res.data.Result);
        } else {
          alert(res.data.Error);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/auth/deleteEmployee/ ${id}`)
      .then(res => {
        if (res.data.Status) {
          navigate("/dashboard/employee");
          window.location.reload();
        } else {
          alert(res.data.Error);
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="employee-container-scrollable">
      <Link to="/dashboard/addEmployee"><button className="top-left-button">Add Employee</button></Link>
      
      <div className="row">
        {employee.map(e => (
          <div key={e.id} className="col-md-6">
            <div className="employee-box">
              <img src={`http://localhost:8080/images/${e.image}`} alt={e.name} className="empImage" />
              <Link to={`/dashboard/editEmployee/` + e.id}><button className='btn1'>Edit</button></Link>
              <button className='btn2' onClick={()=> handleDelete(e.id)}>Delete</button>
              <div className="employee-details">
                <span><strong>Name:</strong> {e.name}</span>
                <span><strong>Email:</strong> {e.email}</span>
                <span><strong>Address:</strong> {e.address}</span>
                <span><strong>Salary:</strong> {e.salary}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;
