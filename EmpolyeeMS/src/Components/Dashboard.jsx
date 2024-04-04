import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet, useNavigate} from 'react-router-dom'
import "./styles.css"
import axios from 'axios'

function Dashboard() {
	const navigate = useNavigate()
	axios.defaults.withCredentials = true;
	const handleLogout = () => {
		axios.get("http://localhost:8080/auth/logout")
		.then(res => {
			if(res.data.Status){
				navigate("/")
			}
			else{

			}
		})
	}
	return (
		<div className="container-fluid">
			<div className="row flex-nowrap">
				<div className=" sidebar col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
							<span className="fs-5 fw-bolder d-none d-sm-inline">Dashboard</span>
						</a>
						<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
							<li>
								<Link to="/dashboard/home" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
									<i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
							</li>
							<li>
								<Link to="/dashboard/employee" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Manage Employees</span> </Link>
							</li>
              <li>
								<Link to="/dashboard/category" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Category</span> </Link>
							</li>
							<li>
								<Link to="/dashboard/profile" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Profile</span></Link>
							</li>
							<li onClick={handleLogout}>
								<Link className="nav-link px-0 align-middle text-white"></Link>
								
									<i className="fs-4 bi-power"></i><span className="ms-1 d-none d-sm-inline">Logout</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="col p-0 m-0">
					<div className='p-3 d-flex justify-content-center shadow'>
						<h4>Employee Management System</h4>						
					</div>
          <Outlet />
				</div>
			</div>
		</div>
	)
}

export default Dashboard