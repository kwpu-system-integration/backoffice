import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      provider: "",
      isLogin: false
    };
  }

  responseGoogle = res => {
    // console.log(res);
    // alert(res);
    console.log(res.profileObj);
    console.log(res.accessToken);

    this.setState(
      {
        isLogin: true
      },
      () => {
        axios
            .post(`http://127.0.0.1:8000/login/check/`, {
              header: "Access-Control-Allow-Origin",
              email: res.profileObj.email,
              name: res.profileObj.name
            })
            .then(response => {
              if (response.data.initial_login) {
                // 최초 로그인
                window.location.href = '/signin'
              }
              else {
                // 기존 사용자 로그인
                window.location.href = '/payment'
              }
            })
            .catch(error => {
              console.log("failed", error);
            });
      }
    );
  };

  responseFail = err => {
    console.error(err);
    alert(err);
  };
  //disabled={renderProps.disabled}

  render() {
    console.log(this.state);
    return (
      <GoogleLogin
        clientId={
          "1084387071953-udu3tt2id5f0omic5q7669kp3v2554dj.apps.googleusercontent.com"
        }
        buttonText={"Google"}
        onSuccess={this.responseGoogle}
        onFailure={this.responseFail}
        render={renderProps => (
          <Button
            onClick={renderProps.onClick}
            variant="contained"
            color="secondary"
          >
            <i className="fa fa-google-plus-square" aria-hidden={true} />
            <span className={"common_margin"}>Google Login</span>
          </Button>
        )}
      />
    );
  }
}
export default Login;
