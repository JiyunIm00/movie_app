import React from "react";

class App extends React.Component{

  // when component mounts
  constructor(){
    console.log("hello!");
  }
  
  state = {
    count: 0
  }

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  // after being rendered
  componentDidMount() {
    console.log("Component rendered");
  }

  // after setState
  componentDidUpdate() {
    console.log("I just updated");
  }

  // after component goes away
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

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
