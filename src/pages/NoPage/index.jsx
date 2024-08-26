import "./index.css";
import sadSunrise from "./assets/sadSunrise.png";
import NavBar from "../../components/NavBar";

import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="NoPageContainer">
        <div className="HeaderNoPage">
          <h1 className="NoPageTitle">
            4<span className="colorChange">0</span>4{" "}
          </h1>
          <img className="image404" src={sadSunrise} />
        </div>
        <div className="NoPageText">
          <p className="NoPageText1">Sorry,</p>
          <p className="NoPageText2">
            {" "}
            we couldn't find the page you were looking for.{" "}
          </p>
        </div>
        <div className="buttonContainer">
          <Link to="/Home" className="ReturnHome">
            RETURN HOME
          </Link>
        </div>
      </div>
    </>
  );
}

export default NoPage;
