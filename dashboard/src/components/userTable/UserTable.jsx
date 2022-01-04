import React from 'react'
import './usertable.css'

export default function UserTable(props) {
    return (
        <table>
            
            <thead>
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Avatar</th>
                <th>Ciudad</th>
                <th>Direccion</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {props.users.map((user, i) =>
                <tr key={i}>
                    <td> {user.id}</td>
                    <td>{user.fullname}</td>
                    <td><img src={user.image}/></td>
                    <td>{user.city}</td>
                    <td>{user.userAddress}</td>
                    <td>{user.email}</td>
                </tr>
            )}
            </tbody>
            </table>
            
    )
}
