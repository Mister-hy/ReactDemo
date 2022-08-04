import React, { Component } from "react";

// import React from "react";

// const Component = React.Component

class App extends Component {
  render() {
    return (
      // JSX
      <ul className="my-list">
        <li>{true ? "hy" : "韩洋"}</li>
        <li>I love React</li>
      </ul>
    );
    // var child1 = React.createElement('li',null,'hy')
    // var child2 = React.createElement('li',null,'I love React')
    // var root = React.createElement('ul',{className:'my-list'},child1,child2)
  }
}

export default App;
