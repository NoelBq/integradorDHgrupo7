import React from 'react'
import './producttable.css'
import Moment from 'react-moment';

export default function ProductTable(props) {

 
    return (
       <>
        <table>
            <caption>Productos</caption>
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
            {props.products.map((product, i) =>
                <tr key={i}>
                    <td> {product.id}</td>
                    <td>{product.fullname}</td>
                    <td>{product.city}</td>
                    <td>{product.productAddress}</td>
                    <td>{product.email}</td>
                    <td> <Moment format="DD/MM/YYYY">{product.createdAt}</Moment></td>
                </tr>
            )}
            </tbody>
        </table>
    </>
            
    )
}
