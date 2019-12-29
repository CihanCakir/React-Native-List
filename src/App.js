import React, { Component } from 'react';
import Navi from "./component/Navi";
import Product from './component/Product';
import Category from './component/Category';
import { Container, Row, Col } from "reactstrap";


export default class App extends Component {
  state = { currentCategory: "", products: [] }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProduct(category.id);
  }
  componentDidMount() {
    this.getProduct();
  }
  getProduct = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }
  render() {
    const product = { title: "Ürünler" };
    const category = { title: "Kategoriler" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={category} />
            </Col>
            <Col xs="9">
              <Product
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={product} />

            </Col>
          </Row>
        </Container>
      </div >

    )
  }
}

