import React from "react";
import Head from "next/head";
import Link from "next/link";
import {Container, Image, Menu} from "semantic-ui-react";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>
      <Menu fixed='top' inverted>
        <Container>
            <Link href={'/'}>
                <Menu.Item as="a" header>
                    <Image size='mini' src={'/static/kwpu.jpg'} style={{ marginRight: '1.5em' }} />
                </Menu.Item>
            </Link>
            <Link href={'/pams/main/'}>
              <Menu.Item as='a'>
                PAMS(Poongmul united Accounts Management System)
              </Menu.Item>
            </Link>
            <Link href={'/pams/create/'}><Menu.Item as='a'>입출금 입력</Menu.Item></Link>
            <Link href={'/pams/list/'}><Menu.Item as='a'>입출금 내역</Menu.Item></Link>
            <Link href={'/pams/graph/'}><Menu.Item as='a'>입출금 그래프</Menu.Item></Link>
        </Container>
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;
