import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

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
    console.log(res);
    this.setState({
      isLogin: true
    }, () => {
        if (this.state.isLogin){
            window.location.href ="/payment"
        }
    });
  };

  responseFail = err => {
    console.error(err);
    alert(err);
  };
  //disabled={renderProps.disabled}

  render() {
      console.log(this.state)
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
