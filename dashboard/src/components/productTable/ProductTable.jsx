import React from 'react'
import './productTable.css'
import Moment from 'react-moment';

export default function ProductTable(props) {

 
    return (
       <>
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Creado</th>
                </tr>
            </thead>
            <tbody>
            {props.products.map((product, i) =>
                <tr key={i}>
                    <td> {product.id}</td>
                    <td>{product.productName}</td>
                    <td>{product.stock}</td>
                    <td>${product.price}</td>
                    <td>{product.category.categorieName}</td>
                    <td> <Moment format="DD/MM/YYYY">{product.createdAt}</Moment></td>
                </tr>
            )}
            </tbody>
        </table>
    </>
            
    )
}
