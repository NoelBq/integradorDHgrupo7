import React from 'react'
import './usertable.css'
import Moment from 'react-moment';

export default function UserTable(props) {

 
    return (
       <>
        <table>
            <caption>Usuarios</caption>
            <thead>
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Ciudad</th>
                <th>Direccion</th>
                <th>Email</th>
                <th>Creado</th>
                </tr>
            </thead>
            <tbody>
            {props.users.map((user, i) =>
                <tr key={i}>
                    <td> {user.id}</td>
                    <td>{user.fullname}</td>
                    <td>{user.city}</td>
                    <td>{user.userAddress}</td>
                    <td>{user.email}</td>
                    <td> <Moment format="DD/MM/YYYY">{user.createdAt}</Moment></td>
                </tr>
            )}
            </tbody>
        </table>
    </>
            
    )
}
