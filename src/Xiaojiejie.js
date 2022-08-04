import React, { Component, Fragment } from "react";

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "hy",
      list: [],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          ></input>
          <button>do you like</button>
          <ul>
            <li>l like</li>
            <li>l dont like </li>
          </ul>
        </div>
      </Fragment>
    );
  }
  inputChange(e) {
    // console.log(e.target.value);
    // console.log(this);
    this.setState({
      inputValue: e.target.value,
    });
  }
}

export default Xiaojiejie;
