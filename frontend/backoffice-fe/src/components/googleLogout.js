import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";
import { Container } from "@material-ui/core";

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            provider: ""
        };
    }

    logout = res => {
        console.log(res);
        alert("kwon")
    };

    render() {
        return (
            <Container>
                <GoogleLogout
                    clientId="1084387071953-udu3tt2id5f0omic5q7669kp3v2554dj.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                >
                </GoogleLogout>
            </Container>
        );
    }
}
export default Logout;
