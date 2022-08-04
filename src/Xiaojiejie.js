import React, { Component, Fragment } from "react";

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["l like", "l dont like"],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            onKeyDown={this.KeyDown.bind(this)}
          ></input>
          <button onClick={this.addList.bind(this)}>do you like</button>
          <ul>
            {this.state.list.map((item, index) => {
              return <li key={index + item}>{item}</li>;
            })}
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

  //增加列表
  addList() {
    if(!this.state.inputValue) return
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
  }
  //回车事件
  KeyDown(e) {
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code === 13) {
      this.addList();
    }
  }
}

export default Xiaojiejie;
