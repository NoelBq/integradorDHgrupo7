
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoriesTable from '../../components/categoriesTable/CategoriesTable';

function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/categories')
            .then((res) => {
                const categories = [...res.data]
                setCategories(categories)
            })
    }, [])

    console.log(categories);

    return (
        <div className="home">
            <div className="homeWidgets">
                <CategoriesTable categories={categories} />
            </div>
        </div>
    )
}

export default Categories
