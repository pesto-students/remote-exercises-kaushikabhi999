import React, { Component } from 'react';
import AddItem from './addItem';
import GroceryList from './groceryList';

class Groceries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'item1', qty: 1, isPurchased: false },
        { name: 'item2', qty: 1, isPurchased: false },
        { name: 'item3', qty: 1, isPurchased: false },
        { name: 'item4', qty: 1, isPurchased: false },
      ]
    }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.handleClearBucket = this.handleClearBucket.bind(this);
  }

  handleClearBucket = () => {
    this.setState({ items: [] });
  }

  handlePurchase = ({ i }) => {
    let items = this.state.items;
    items[i].isPurchased = !items[i].isPurchased;
    this.setState({ items: items });
  }

  handleAddItem = ({ itemName }) => {
    if (itemName.trim() === "") return;
    let items = this.state.items;
    let isNewItem = true;
    for (let item of items) {
      if (item.name.toLowerCase() === itemName.toLowerCase()) {
        isNewItem = false;
        item.qty += 1;
        break;
      }
    }
    if (isNewItem) {
      const newItem = {
        name: itemName,
        qty: 1,
        isPurchased: false
      }
      items.push(newItem);
    }
    this.setState({ items: items });
  }

  render() {
    return (
      <div className="m-30 mw-50per">
        <AddItem addEvent={this.handleAddItem} clearEvent={this.handleClearBucket} />
        <GroceryList groceries={this.state.items} purchaseEvent={this.handlePurchase} />
      </div>
    );
  }
}

export default Groceries;