import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/react-movie-app/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}