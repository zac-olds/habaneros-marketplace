// COMPONENTS
import React from "react";
import Layout from "../../components/shared/Layout/Layout";

// DEPENDENCIES
import {Link} from "react-router-dom";

// STYLING AND ICONS
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faPepperHot,
  faWineBottle,
  faFireAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = (props) => {
  const pepper = <FontAwesomeIcon icon={faPepperHot} />;
  const bottle = <FontAwesomeIcon icon={faWineBottle} />;
  const flame = <FontAwesomeIcon icon={faFireAlt} />;

  return (
    <Layout user={props.user}>
      <div className="home">
        <div className="fa-container">
          <Link to="/products">
            <div className="fa-bottle">
              {bottle}
              <p className="bottle-text">HOT SAUCES</p>
            </div>
          </Link>
          <Link to="/peppers">
            <div className="fa-pepper">
              {pepper}
              <p className="pepper-text">PEPPER INFO</p>
            </div>
          </Link>
          <Link to="scoville">
            <div className="fa-flame">
              {flame}
              <p className="flame-text">SCOVILLE SCALE</p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
