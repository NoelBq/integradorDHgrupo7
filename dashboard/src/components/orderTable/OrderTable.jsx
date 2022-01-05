import React from 'react'
import Moment from 'react-moment';

function OrderTable(props) {
    return (
        <table>
            <caption>Usuarios</caption>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Importe</th>
                    <th>Estado</th>
                    <th>Creado</th>
                </tr>
            </thead>
            <tbody>
                {props.orders.map((order, i) =>
                    <tr key={i}>
                        <td> {order.id}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.state}</td>
                        <td>
                        <Moment format="DD/MM/YYYY">{order.createdAt}</Moment>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>

    )
}

export default OrderTable
