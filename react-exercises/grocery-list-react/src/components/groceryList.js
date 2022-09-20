import React, { Component } from 'react';

class GroceryList extends Component {

  getItemClasses(isPurchased) {
    let classes = "cursor_pointer ";
    classes += isPurchased ? 'text-danger' : '';
    return classes;
  }

  render() {
    const { groceries } = this.props

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {groceries.map((item, i) => {
            return <tr key={i}>
              <td>{+i + 1}</td>
              <td className={this.getItemClasses(item.isPurchased)} onClick={() => this.props.purchaseEvent({ i })}>{item.name}</td>
              <td> {item.qty}</td>
            </tr>
          }
          )}
        </tbody>
      </table>
    );
  }
}

export default GroceryList;