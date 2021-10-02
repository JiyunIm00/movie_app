import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
  
  // where we put dynamic data
  state = {
    count: 0
  }

  // use setState() instead of changing directly (to reflect changes render needs to be called)
  // use current arrow function to get states instead of getting it directly
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
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
