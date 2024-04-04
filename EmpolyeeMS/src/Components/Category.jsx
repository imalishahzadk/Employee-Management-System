import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './category.css'; 

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/auth/category')
            .then(res => {
                if (res.data.Status) {
                    setCategory(res.data.Result);
                } else {
                    alert(res.data.Error);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
        <Link to="/dashboard/addCategory" className='btn btn-success add-category-btn'>Add Category</Link>

        <div className='category-container'>

            <div className='category-header'>
                <h3>Category List</h3>
            </div>
            <div className='category-list'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((c, index) => (
                            <tr key={index}>
                                <td>{c.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
};

export default Category;
