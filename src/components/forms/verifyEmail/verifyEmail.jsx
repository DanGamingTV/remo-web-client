import React, { Component } from "react";
import { requestEmailValidation } from "../../../config/index";
import axios from "axios";
import "./verifyEmail.scss";

export default class VerifyEmail extends Component {
  state = {
    status: "No.",
    error: false,
    response: ""
  };

  componentDidMount() {
    const { email_verified } = this.props.status;
    console.log("Email Verified: ", email_verified);
    if (email_verified) {
      this.setState({ status: "Yes." });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) {
      if (this.props.status.email_verified) {
        this.setState({ status: "Yes." });
      } else {
        this.setState({ status: "No." });
      }
    }
  }

  handleVerify = async () => {
    console.log("verify");
    const token = localStorage.getItem("token");
    await axios
      .post(
        requestEmailValidation,
        {},
        {
          headers: { authorization: `Bearer ${token}` }
        }
      )
      .then(response => {
        console.log("Verify Email Response: ", response);
        if (response.data.error) {
          this.setState({ status: response.data.error, error: true });
        } else {
          this.setState({ error: false, response: response.data.result });
        }
      });
  };

  render() {
    const { email_verified } = this.props.status;
    const { status, response, error } = this.state;
    console.log("Verify Email Status: ", status);
    let responseStyle = "VerifyEmail__success";
    if (error) responseStyle = "VerifyEmail__error";
    return (
      <React.Fragment>
        <div className="VerifyEmail__container">
          <div className="VerifyEmail__key"> email verified: </div>
          <div className="VerifyEmail__value"> {status} </div>
          {email_verified ? (
            <React.Fragment />
          ) : (
            <button
              className="VerifyEmail__link"
              onClick={() => this.handleVerify()}
            >
              {`( send verification email )`}
            </button>
          )}
        </div>
        {response ? (
          <div className={responseStyle}>
            <div className={responseStyle}>{response} </div>
            <div
              className="VerifyEmail__dismiss"
              onClick={() => this.setState({ response: "" })}
            >
              dismiss
            </div>
          </div>
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }
}
