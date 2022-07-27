import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";
class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Muz" },
      { categoryId: 2, categoryName: "Muz2" },
      { categoryId: 3, categoryName: "Muz3" },
      { categoryId: 4, categoryName: "Muz5" },
    ],
    
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}

export default CategoryList;

