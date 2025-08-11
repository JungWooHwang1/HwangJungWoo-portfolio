import React from "react";
import app from "../firebase";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import "../CSS/Main.css";

export default function Main() {
  console.log("Firebase App:", app); // 연결 확인용 로그

  return (
    <div id ="main" className="Container">

      <Header />

      <div className="ProfileIntro">
    
        <div className="ProfileIntro_Content">
          <h1 className="ProfileIntro_Title">황정우<br/> 프론트엔드 개발자 포트폴리오</h1>
          <h2 className="ProfileIntro_Subtitle">안녕하세요! <br/> 프론트엔드 개발자 <br/> 황정우입니다.</h2>
        </div>
      </div>
      <About />
      <Skills />
      <Project />

    </div>
  );
}