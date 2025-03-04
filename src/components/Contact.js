import { useContext } from "react";
import userContext from "../../utils/userContext";

const Contact = () => {
  const { loggedinUser } = useContext(userContext);
  return (
    <div>
      <h1>Contact US page</h1>
      <h2>Default user: {loggedinUser}</h2>
    </div>
  );
};

export default Contact;
