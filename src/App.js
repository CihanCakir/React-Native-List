import React, { Component } from 'react';
import Navi from "./component/Navi";
import Product from './component/Product';
import Category from './component/Category';
import { Container, Row, Col } from "reactstrap";
import { Route, Switch } from 'react-router-dom';

import alertifyjs from 'alertifyjs';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }
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

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(x => x.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;

    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart })
    alertifyjs.success(product.productName + ' Karta Eklendi ')
  }


  removeFromCart = product => {
    let newCart = this.state.cart;
    var exportItem = newCart.filter(x => x.product.id !== product.id);
    this.setState({ cart: exportItem })


    alertifyjs.warning(product.productName + 'Karttan çıkarıldı')
  }


  render() {
    const product = { title: "Ürünler" };
    const category = { title: "Kategoriler" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3">
              <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={category} />
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props => (
                  <Product
                    {...props}
                    addToCart={this.addToCart}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={product} />
                )} />
                <Route exact path="/cart" render={props => (
                  <CartList
                    {...props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart} />
                )} />
                <Route path="/form1" component={FormDemo1} />
                <Route path="/form2" component={FormDemo2} />
                <Route component={NotFound} />
              </Switch>


            </Col>
          </Row>
        </Container>
      </div >

    )
  }
}

