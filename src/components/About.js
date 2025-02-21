import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("About Constructor called");
  }

  componentDidMount() {
    console.log("About componentDidMount called");
  }

  render() {
    console.log("About Render Called");

    return (
      <div>
        <h1>About Page</h1>
        <UserClass name={"Manash"} location={"Bangalore"} contact={"Class"} />
      </div>
    );
  }
}

export default About;
