import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
  
  // where we put dynamic data
  state = {
    count: 0
  }

  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };

  // class React.Component will automatically run render
  render(){
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
