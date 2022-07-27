import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <h1>
        {this.props.title}-{this.props.currentCategory}
      </h1>
    );
  }
}

export default ProductList;
