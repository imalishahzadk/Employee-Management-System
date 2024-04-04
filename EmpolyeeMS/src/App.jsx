import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import AdminLogin from './Components/AdminLogin'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/ManageEmployee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import Start from "./Components/Start"
import EmpLogin from "./Components/EmpLogin"
import EmpDetails from './Components/EmpDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/adminLogin' element={<AdminLogin />}/>
        <Route path='/empLogin' element={<EmpLogin />}/>
        <Route path='/empDetails/:id' element={<EmpDetails />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/home' element={<Home />}></Route>
          <Route path='/dashboard/employee' element={<Employee />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/addCategory' element={<AddCategory />}></Route>
          <Route path='/dashboard/addEmployee' element={<AddEmployee />}></Route>
          <Route path='/dashboard/editEmployee/:id' element={<EditEmployee />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
