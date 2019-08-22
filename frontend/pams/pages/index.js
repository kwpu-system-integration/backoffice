import React from "react";
import Link from 'next/link'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'

const Home = () => {
  return (
    <>
    <Head>
      <title>PAMS</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
    </Head>
    <AppLayout>
      <Link href="/about">
        <a>about page</a> 
      </Link>
      <div>Home page</div>;
      </AppLayout>
      
    </>
  );
};

export default Home;
