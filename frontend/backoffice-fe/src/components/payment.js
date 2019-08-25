import React, { Component } from "react";
import { Menu, Segment } from 'semantic-ui-react'
import {Footer, FooterSection, FooterLinkList} from 'react-mdl'





class Payment extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Menu stackable>
                    <Menu.Item>
                        <img src='https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/13166061_1125437644194041_8229412022431604339_n.jpg?_nc_cat=110&_nc_oc=AQl3yng-T5SixcW5MFSoZzn1STMlUwqdlqWQkwWurfJNb44qL2LFiFVwfzJHmi_WvVI&_nc_ht=scontent-icn1-1.xx&oh=f2ed27079d333266717b1a4682b635d7&oe=5DD61709' />
                        <p>PAMS</p>
                    </Menu.Item>

                    <Menu.Item
                        name='입출금 입력'
                        active={activeItem === '입출금 입력'}
                        onClick={this.handleItemClick}
                    >
                        Features
                    </Menu.Item>

                    <Menu.Item
                        name='입출금 내역'
                        active={activeItem === '입출금 내역'}
                        onClick={this.handleItemClick}
                    >
                        Testimonials
                    </Menu.Item>

                    <Menu.Item
                        name='입출금 그래프'
                        active={activeItem === '입출금 그래프'}
                        onClick={this.handleItemClick}
                    >
                        Sign-in
                    </Menu.Item>
                </Menu>
                <h1>Payment Page</h1>

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

export default Payment;
