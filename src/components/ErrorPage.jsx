import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
      <br></br>
      <Link to = "profile/popeye">
        You can also go to the Popeye profile page!
      </Link>
    </div>
  );
};

export default ErrorPage;
