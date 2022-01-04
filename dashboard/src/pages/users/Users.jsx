
import FeaturedUser from '../../components/featuredUser/FeaturedUser'
import UserTable from '../../components/userTable/UserTable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Users() {
    
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3001/api/users')
        .then((res) => {
            const users = [...res.data]
            setUsers(users)
        })
    }, [])
    
    
    return (
        <div className="home">
            <div className="homeWidgets">
                <FeaturedUser users={users} />
                <UserTable users={users}/>
            </div>
        </div>
        )
    }
    