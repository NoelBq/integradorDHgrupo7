import React from 'react'
import './categoriesTable.css'

export default function CategoriesTable(props) {
    return (
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                </tr>
            </thead>
            <tbody>
            {props.categories.map((categorie, i) =>
                <tr key={i}>
                    <td> {categorie.id}</td>
                    <td>{categorie.categorieName}</td>
                    <td>{categorie.categorieDescription}</td>
                </tr>
            )}
            </tbody>
            </table>

            
            
    )
}
