import { Menu, Input } from "antd";
import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">PAMS1</Menu.Item>
        <Menu.Item key="profile">PAMS2</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{verticalAlign: "middle"}} />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;
