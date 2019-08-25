import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import Button from '@material-ui/core/Button';
import Login from './googleLogin'
import Logout from './googleLogout'

class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className={"landing-grid"}>
          <Cell col={12}>

              <img
                  src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/13166061_1125437644194041_8229412022431604339_n.jpg?_nc_cat=110&_nc_oc=AQl3yng-T5SixcW5MFSoZzn1STMlUwqdlqWQkwWurfJNb44qL2LFiFVwfzJHmi_WvVI&_nc_ht=scontent-icn1-1.xx&oh=f2ed27079d333266717b1a4682b635d7&oe=5DD61709"
                  alt="kwpu"
                  className={"kwpu-img"}
              />

            <div className="banner-text">
                <h1>광운대학교 풍물 굿 패 연합 ERP 시스템</h1>
                <hr/>
                <p> Enterprise Resource Planning for KWPU</p>
                <div className="social-login">
                    <Button className={"common-margin"} variant="contained" color="primary" >
                        <i className="fa fa-facebook-square common-margin" aria-hidden={true} />
                         <span className={"common_margin"}> facebook Login</span>
                    </Button>

                    <Login />


                </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
