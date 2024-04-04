import React, { useEffect, useState } from 'react';
import "./home.css";
import axios from 'axios';

const Home = () => {
  const [adminTotal, setAdminTotal] = useState();
  const [employeeTotal, setEmployeeTotal] = useState();
  const [salaryTotal, setSalaryTotal] = useState();
  const [admins, setAdmins] = useState([]);

useEffect(() => {
  adminCount()
  salaryCount()
  employeeCount()
  adminRecords()

},[])

const adminCount = () => {
  axios.get('http://localhost:8080/auth/adminCount')
  .then(result => {
    if(result.data.Status){
      setAdminTotal(result.data.Result[0].admin)
    }
  })
  .catch(err => console.log(err))
}

const employeeCount = () => {
  axios.get('http://localhost:8080/auth/employeeCount')
  .then(result => {
    if(result.data.Status){
      setEmployeeTotal(result.data.Result[0].employee)
    }
  })
  .catch(err => console.log(err))
}

const salaryCount = () => {
  axios.get('http://localhost:8080/auth/salaryCount')
  .then(result => {
    if(result.data.Status){
      setSalaryTotal(result.data.Result[0].salary)
    }
  })
  .catch(err => console.log(err))
}

const adminRecords = () => {
  axios.get('http://localhost:8080/auth/adminRecords')
  .then(result => {
    if(result.data.Status){
      setAdmins(result.data.Result)
    }
  })
  .catch(err => console.log(err))
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="card1 l-bg-cherry">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
              <div className="mb-4">
                <h5 className="card-title mb-0">Admin</h5>
              </div>
              <div className="row justify-content-between mb-2 d-flex">
                {/* <div className="col-8"> */}
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-0">Total:</h3>
                    <h3 className=' counth3 mb-0'>{adminTotal}</h3>
                  </div>
                {/* </div> */}
              </div>
              <div className="progress mt-1" data-height="8" style={{ height: '8px' }}>
                <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="card2 l-bg-blue-dark">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large"><i className="fas fa-users"></i></div>
              <div className="mb-4">
                <h5 className="card-title mb-0">Salary</h5>
              </div>
              <div className="row justify-content-between mb-2 d-flex">
                {/* <div className="col-8"> */}
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-0">Total:</h3>
                    <h3 className=' counth3 mb-0'>{salaryTotal} $</h3>
                  </div>
                {/* </div> */}
              </div>
              <div className="progress mt-1" data-height="8" style={{ height: '8px' }}>
                <div className="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="card3 l-bg-green-dark">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
              <div className="mb-4">
                <h5 className="card-title mb-0">Employee</h5>
              </div>
              <div className="row justify-content-between mb-2 d-flex">
                {/* <div className="col-8"> */}
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-0">Total:</h3>
                    <h3 className=' counth3 mb-0'>{employeeTotal}</h3>
                  </div>
                {/* </div> */}
              </div>
              <div className="progress mt-1" data-height="8" style={{ height: '8px' }}>
                <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='admin-container'>
            <div className='admin-header'>
                <h3>List of Admins</h3>
            </div>
            {/* <Link to="/dashboard/addCategory" className='btn btn-success add-admin-btn'>Add Category</Link> */}
            <div className='admin-list'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Admins</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((ad, index) => (
                            <tr key={index}>
                                <td>{ad.email}</td>
                                <td>
                                  <button className = "btn btn-info btn-sm me-2">Edit</button>
                                  <button className='btn btn-warning btn-sm'>Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default Home;
