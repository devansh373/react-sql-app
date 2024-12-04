import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">logo</div>
        <div className="links">
          <Link className="link" to={"/?cat=art"}>
            <h4>ART</h4>
          </Link>
          <Link className="link" to={"/?cat=science"}>
            <h4>Science</h4>
          </Link>
          <Link className="link" to={"/?cat=technology"}>
            <h4>Technology</h4>
          </Link>
          <Link className="link" to={"/?cat=cinema"}>
            <h4>Cinema</h4>
          </Link>
          <Link className="link" to={"/?cat=design"}>
            <h4>Design</h4>
          </Link>
          <Link className="link" to={"/?cat=food"}>
            <h4>Food</h4>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to={"/write"}>
              <h4>Write</h4>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
