import React, { Component, Fragment } from "react";
import './style.css'
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
        {/* 第一次写注释 */}
        <div>
          <label htmlFor='hy' className="label">增加服务:</label>
          <input
            id="hy"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            onKeyDown={this.KeyDown.bind(this)}
            className='input'
          ></input>
          <button onClick={this.addList.bind(this)}>do you like</button>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li
                  key={index + item}
                  onClick={this.deleteItem.bind(this, index)}
                  dangerouslySetInnerHTML={{__html:item}}
                >
               
                </li>
              );
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
    if (!this.state.inputValue) return;
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
  //删除列表项
  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list:list
    });
    // console.log(index);
  }
}

export default Xiaojiejie;
