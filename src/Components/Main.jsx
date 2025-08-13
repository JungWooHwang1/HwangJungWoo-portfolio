import React, { useState, useEffect } from "react";
import app from "../firebase";
import ReactLogoAnimation from "../common/ReactLogoAnimation";
import ScrollToTopButton from "../common/ScrollToTopButton";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import "../CSS/Main.css";

export default function Main() {
  console.log("Firebase App:", app); // 연결 확인용 로그

  // 타이핑 효과용 상태
  const typingText = "황정우\n프론트엔드 개발자 포트폴리오";
  const [displayed, setDisplayed] = useState("");
  const [typingIdx, setTypingIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (typingIdx < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(typingText.slice(0, typingIdx + 1));
        setTypingIdx(typingIdx + 1);
      }, 80 + Math.random() * 120); // 80~200ms 랜덤
      return () => clearTimeout(timeout);
    }
  }, [typingIdx, typingText]);

  // 커서 깜빡임 효과
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div id="main" className="Container">
      <Header />
      <div className="ProfileIntro">
        <ReactLogoAnimation />
        <div className="ProfileIntro_Content">
          <h1 className="ProfileIntro_Title">
            {displayed.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i !== displayed.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
            {typingIdx < typingText.length && (
              <span
                className="typing-cursor"
                style={{
                  display: "inline-block",
                  width: "1ch",
                  color: "#61dafb",
                }}
              >
                {showCursor ? "|" : " "}
              </span>
            )}
          </h1>
          <h2 className="ProfileIntro_Subtitle">
            안녕하세요! <br /> 프론트엔드 개발자 <br /> 황정우입니다.
          </h2>
        </div>
      </div>
      <About />
      <Skills />
      <Project />
      <ScrollToTopButton />
    </div>
  );
}