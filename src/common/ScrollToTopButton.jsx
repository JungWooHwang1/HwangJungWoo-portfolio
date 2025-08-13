import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 스크롤이 맨 아래에 도달하면 show = true 돼서 버튼이 나타남
            const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
            setShow(isBottom);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return show ? (
        <button
            onClick={scrollToTop}
            style={{
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "50px",
                 background: "rgba(34,34,34,0.7)", // 반투명
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                zIndex: 100,
                letterSpacing: "0.1em",
                transition: "background 0.2s"
            }}
        >
            ↑↑↑
        </button>
    ) : null;
}