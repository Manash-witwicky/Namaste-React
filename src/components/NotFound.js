import { useRouteError } from "react-router";
import NotFo from "../../assets/404.avif";

const NotFound = () => {
  const err = useRouteError(); // used to get more info about the error
  const style = {
    width: "1000px",
    height: "400px",
  };

  return (
    <div className="notfound-div">
      <img src={NotFo} alt="404" style={style} />
      <span className="message">
        We can't seem to find the page you're looking for...
      </span>
    </div>
  );
};

export default NotFound;
