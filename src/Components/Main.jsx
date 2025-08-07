import React from "react";
import app from "../firebase";
import Header from "./Header";
import About from "./About";

export default function Main() {
  console.log("Firebase App:", app); // 연결 확인용 로그

  return (
    <div className="Container">
      <div id = "root">
        <Header />


        <About />
        
      </div>
    </div>
  );
}