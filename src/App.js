import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";

export class App extends Component {
  state = { currentCategory: "" };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  render() {
    let titleCategory = "Kategori Listesi";
    let titleProduct = "Ürün Listesi";
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                title={titleCategory}
              />
            </Col>
            <Col xs="9">
              <ProductList
                title={titleProduct}
                currentCategory={this.state.currentCategory}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
