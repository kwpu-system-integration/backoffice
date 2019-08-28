import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";
import axios from "axios";

class AdditionalUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      club_code: "",
      role_code: "",
      grade: ""
    };
  }
  handleClubCode = e => {
    this.setState({ club_code: e.target.value });
  };

  handleRoleCode = e => {
    this.setState({ role_code: e.target.value });
  };

  handleGrade = e => {
    this.setState({ grade: e.target.value });
  };

  handleSubmit = () => {
    axios
      .post(`http://127.0.0.1:8000/login/additional_info/`, {
        grade: this.state.grade,
        club_code: this.state.club_code,
        role_code: this.state.role_code,
        id: 8
      })
      .then(response => {
        if (response.status === 200) {
            window.location.href = '/payment'
        }
        else {
            alert('오류 입니다. 다시 입력하세요.')
        }
      })
      .catch(error => {
        console.log("failed", error);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>AdditionalUserForm Page</h1>
        <div className={"input-margin"}>
          <Input
            onChange={this.handleClubCode}
            placeholder={"소모임 코드를 입력하세요."}
          />
          <Input
            onChange={this.handleRoleCode}
            placeholder={"직책 코드를 입력하세요."}
          />
          <Input
            onChange={this.handleGrade}
            placeholder={"학번을 입력하세요."}
          />
          <Button onClick={this.handleSubmit} primary>
            {" "}
            제출{" "}
          </Button>
        </div>
        <Footer className={"header-color"} size="mini">
          <FooterSection type="left" logo="Title">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default AdditionalUserForm;
