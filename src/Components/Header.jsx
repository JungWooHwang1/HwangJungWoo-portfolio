import { useEffect, useState } from "react";
import "../CSS/Header.css"

export default function Header() {
    const [isTop, setIsTop] = useState(true);

    // 스크롤 위치에 따라 헤더의 배경색 변경
    useEffect(() => {
        const onScroll = () => {
            setIsTop(window.scrollY < 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // 네비게이션 버튼 클릭시 id를 기준으로 스크롤 이동
    const handleScroll = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className={`Header${isTop ? " Header--transparent" : ""}`}>
            <div className="Header_Content">
                <button className="Header__Button" onClick={() => handleScroll("main")}>HJW_Portfolio</button>
                <nav className="Header_Nav">
                    <button className="Header_Nav_Button" onClick={() => handleScroll("about")}>About me</button>
                    <button className="Header_Nav_Button" onClick={() => handleScroll("skills")}>Skill</button>
                    <button className="Header_Nav_Button" onClick={() => handleScroll("projects")}>Project</button>
                </nav>
            </div>
        </div>
    )
}
