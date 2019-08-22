import React from "react";
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Link href="/about">
        <a>about page</a> 
      </Link>
      <div>Home page</div>;
    </>
  );
};

export default Home;
