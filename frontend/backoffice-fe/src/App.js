import React from "react";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterLinkList
} from "react-mdl";
import "./App.css";
import Main from "./components/main";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>
      <div className="demo-big-content">
        <Layout>
          <Header className={"header-color"} title="광풍연 ERP 시스템" scroll>
            <Navigation>
              <Button color="inherit">
                <Link className="link" to="/">Home</Link>
              </Button>

              <Link to="/pims">PIMS(악기 관리 시스템)</Link>
              <Link to="/prres">PRRES(풍방 예약 시스템)</Link>
              <Link to="/signin">Login</Link>
              <Link to="/signin">Signup</Link>
            </Navigation>
          </Header>
          <Drawer title="광풍연 ERP 시스템">
            <Navigation>
              <Link to="/aboutme">Aboutme</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
