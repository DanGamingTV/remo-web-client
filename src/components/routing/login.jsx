import React, { Component } from "react";
import Login from "../layout/login/login";
import Signup from "../layout/login/signup";
import "../layout/login/login.css";
import defaultImages from "../../imgs/placeholders";
import { discordUrl, supportEmail } from "../../config";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="nav-container">
          <div className="logo-container">
            <img className="logo" alt="" src={defaultImages.remoLogo} />
          </div>
        </div>

        <div className="landing-page">
          Remo is an open telerobotics platform for sharing remote control of
          robots in realtime. <br />
          This is an early development build that is optimized for chrome.{" "}
          <br />
          Remo is 100% open source, and free to use. Please create an account,
          or login for access.
          <Signup />
          ... or login ...
          <Login />
          <div className="">
            Questions, Comments, or Issues? contact {supportEmail}
          </div>
          <div>
            or join our discord: <a href={discordUrl}>{discordUrl}</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
