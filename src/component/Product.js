import React, { Component } from 'react'
import { Table } from "reactstrap";

export default class Product extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title} - {this.props.currentCategory} </h3>
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Ürün Adı</th>
                            <th>Ürün Ücret</th>
                            <th>Ürün Tipi</th>
                            <th>Ürün Stok</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr>
                                <th scope="row" key={product.id} > {product.id}</th>
                                <th>{product.productName}</th>
                                <th>{product.unitPrice} </th>
                                <th>{product.quantityPerUnit}</th>
                                <th> {product.unitsInStock} </th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
