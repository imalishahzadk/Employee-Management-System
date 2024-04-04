import axios from 'axios';
import { useState } from 'react';
import React from "react";
import { useNavigate } from 'react-router-dom';
import "./addCategory.css"

const AddCategory = () => {

    const [category, setCategory] = useState();
    const [errors, setErrors] = useState(null)

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/auth/addCategory", {category})
        .then(res => {
            if(res.data.Status){
                navigate("/dashboard/category")
            }else{
                setErrors(result.date.Error)
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <form className="form-style-10" onSubmit={handleSubmit}>
      <div className='text-warning'>
        {errors && errors}
      </div>
    <ul>
      <li>
        <input
          type="text"
          name="name"
          className="field-style field-full align-left"
          placeholder="Category name"
          required
          onChange={(e) => setCategory(e.target.value)}

        />
      </li>
      <li>
        <button className="button" id="submit" type="submit">
          Add Category
        </button>
      </li>
    </ul>
  </form>

  );
};

export default AddCategory;

{/* <div class="form-body">
<div class="row">
  <div class="col-md-12 form-holder">
    <div class="form-content">
      <div class="form-items">
      <div className='text-warning'>
        {errors && errors}
      </div>
        <h3>Add Category</h3>
        <form class="requires-validation" novalidate onSubmit={handleSubmit} > 
          <div class="row">
            <div class="col-md-12">
              <input class="form-control" type="text" name="category" id="category" placeholder="e.g: Information Technology" required 
                  onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div class="form-button mt-3">
              <button id="submit" type="submit" class="btn btn-primary">Add Category</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div> */}