import React, { Component } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";

class MenuItems extends Component {
  state = {
    items: [
      {
        itemName: "chicken",

        itemMenu: [
          { itemMenuName: "chicken burger" },
          { itemMenuName: "chicken fried rice" },
          { itemMenuName: "chicken tandoori" },
          { itemMenuName: "mutton " },
          { itemMenuName: "fish france" },
        ],
      },
      {
        itemName: "Egg",
        itemMenu: [
          { itemMenuName: "Egg Biryani" },
          { itemMenuName: "Egg noodels" },
          { itemMenuName: "Egg puff" },
          { itemMenuName: "omlet spicy" },
          { itemMenuName: "egg noodels" },
        ],
      },
      {
        itemName: "starters",
        itemMenu: [
          { itemMenuName: "veg manchuria" },
          { itemMenuName: "crispy chicken" },
          { itemMenuName: "french frice" },
          { itemMenuName: "kabab" },
          { itemMenuName: "lollypop" },
        ],
      },
      {
        itemName: "sweets",
        itemMenu: [
          { itemMenuName: "halwa" },
          { itemMenuName: "laddu" },
          { itemMenuName: "jilebi" },
          { itemMenuName: "kaja" },
          { itemMenuName: "cakes" },
        ],
      },
      {
        itemName: "desert",
        itemMenu: [
          { itemMenuName: "icecream" },
          { itemMenuName: "gulabjam" },
          { itemMenuName: "kulfi" },
          { itemMenuName: "cone " },
          { itemMenuName: "strawberry" },
        ],
      },
    ],
    num: 0,
  };

  decrement = () => {
    this.setState({ num: this.state.num - 1 });
  };
  increment = () => {
    this.setState({ num: this.state.num + 1 });
  };

  render() {
    return (
      <div
        style={{
          marginLeft: "10%",
          marginTop: "50px",
          width: "25%",
        }}
      >
        <h1 className="App">List of Items</h1>

        {this.state.items.map((item) => (
          <div>
            <NavDropdown className="item" title={item.itemName}>
              <ul className="subitems" className="items">
                {item.itemMenu.map((subItem) => (
                  <div>
                    <button onClick={this.decrement}>-</button>

                    {subItem.itemMenuName}
                    {this.state.num}

                    <button onClick={this.increment}>+</button>
                  </div>
                ))}
              </ul>
              <h4>Item Total:{this.state.num}</h4>
            </NavDropdown>
          </div>
        ))}
      </div>
    );
  }
}

export default MenuItems;
