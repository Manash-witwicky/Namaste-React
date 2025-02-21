import React from "react";
import { Component } from "react";

// class userClass extends React.Component
class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        id: 100,
      },
    };
    console.log("UserClass Constructor called");
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/Manash-witwicky");
    const data = await res.json();
    this.setState({
      userInfo: data,
    });
    console.log("User class componentDidMount called");
  }

  /**
   * it accepts 2 args
   * prevProps: The props that the component received before the update.
   *prevState: The state that the component had before the update.
   */

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Component Destroyed");
  }

  increaseCount = () => {
    // setState() again trigger render() method
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("UserClass Render called");
    const { name, location, contact } = this.props;
    const { count } = this.state;
    const { id } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button onClick={this.increaseCount}>Increment</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        <h1>GitHub ID</h1>
        <h3>{id}</h3>
      </div>
    );
  }
}

export default UserClass;
