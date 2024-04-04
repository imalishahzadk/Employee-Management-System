import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import "./empDetails.css"

const EmpDetails = () => {
    const { id } = useParams() // to fetch id from URL
    const [employee, setEmployee] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8080/emp/empDetails/${id}`) // Using template literals to include the id parameter
        .then(result => {
            if(result.data.Status){
            setEmployee(result.data.Result)
        }else{
            alert(result.data.Error)
        }
        })
        .catch(err => {
            console.log(err)
        })
    }, [id]) // Include 'id' in the dependency array to re-run the effect when id changes

    const handleLogout = () => {
		axios.get("http://localhost:8080/emp/logout")
		.then(res => {
			if(res.data.Status){
				navigate("/")
			}
			else{

			}
		})
	}
  return (
    <div className="employee-container1">      
      <div className="row">
        {employee.map(e => (
          <div key={e.id} className="col-md-6">
            <div className="employee-box1">
              <img src={`http://localhost:8080/images/${e.image}`} alt={e.name} className="empImage" />
              <Link to={`/dashboard/editEmployee/` + e.id}><button className='btn11'>Edit</button></Link>
              <button className='btn22' onClick={handleLogout}>Logout</button>
              <div className="employee-details1">
                <span><strong>Name:</strong> {e.name}</span>
                <span><strong>Email:</strong> {e.email}</span>
                <span><strong>Address:</strong> {e.address}</span>
                <span><strong>Salary:</strong> {e.salary}</span>
              </div>
              <div className="achievement-box-bar">
                <div className="achievement-box-status-25"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmpDetails
