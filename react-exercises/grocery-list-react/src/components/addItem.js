import React, { Component } from 'react';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
    }
    this.handleItemInput = this.handleItemInput.bind(this);
  }

  handleItemInput = (event) => {
    this.setState({ itemName: event.target.value });
  }

  render() {
    return (
      <div className="input-group mb-3 d-flex justify-content-center">
        <input className="form-control mr-2 mw-300" type="text" value={this.state.itemName} onChange={event => this.handleItemInput(event)}></input>
        <button className="btn btn-info mr-2" onClick={() => this.props.addEvent({ itemName: this.state.itemName })}>Add Item</button>
        <button className="btn btn-light" onClick={() => this.props.clearEvent()}>Clear Items</button>
      </div>
    );
  }
}

export default AddItem;