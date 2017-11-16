import React from "react";
import styles from "../styles/NotFound.css";
import {Link, browserHistory} from "react-router";
import {onEnterKey} from "../helpers/events";
import cssModules from "react-css-modules";

const NotFound = props =>
  <div styleName="not-found-page">
    <Link to="/">
      <img style={{padding: "30px"}} src="img/logo-indise.png" height="100" alt="Skin Spa Station"/>
    </Link>
    <h1 style={{textAlign: "center"}}>🤔</h1>
    <h1 style={{textAlign: "center"}}>Page not found</h1>

    <button
        styleName="login-link-back-wide"
        onClick={() => browserHistory.push("/")}
        onKeyDown={onEnterKey(() => browserHistory.push("/"))}
    >
      Get Me To Main Page !
    </button>
  </div>;

export default cssModules(NotFound, styles);