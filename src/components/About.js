import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <User name={"Manash"} location={"Bangalore"} contact={"Functional"} />
      <UserClass name={"Manash"} location={"Bangalore"} contact={"Class"} />
    </div>
  );
};

export default About;
