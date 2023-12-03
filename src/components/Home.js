import React from "react";
import Content from "./Content";
import Bottom from "./Bottom";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <div className="App">
        <Content/>
        <Bottom />
      </div>
    </>
  );
}

export default Home;
