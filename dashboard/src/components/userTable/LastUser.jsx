import React from 'react'

export default function LastUser(props) {
    let lastUser = props.users.slice(-1)
    console.log(lastUser);

    if (!lastUser.length) {
        return <span></span>
    }

    return (
          <table>
            <caption>Ultimo Usuario Creado</caption>
            <thead>
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Ciudad</th>
                <th>Direccion</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> {lastUser[0].id}</td>
                    <td>{lastUser[0].fullname}</td>
                    <td>{lastUser[0].city}</td>
                    <td>{lastUser[0].userAddress}</td>
                    <td>{lastUser[0].email}</td>
                </tr>
            </tbody>
            </table> 
    )
}
