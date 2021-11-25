import React, { Component } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

class Box1 extends Component {
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
            <NavDropdown
              className="item"
              title={item.itemName}
              // id="offcanvasNavbarDropdown"
            >
              <ul className="subitems" className="items">
                {item.itemMenu.map((subItem) => (
                  <NavDropdown.Item>{subItem.itemMenuName}</NavDropdown.Item>
                ))}
              </ul>
            </NavDropdown>
          </div>
        ))}
      </div>
    );
  }
}

export default Box1;
