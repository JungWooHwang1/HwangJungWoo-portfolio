import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { FaReadme } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import ReactDOM from "react-dom";

// 캐러셀 모달 컴포넌트
function ImageCarouselModal({ images, currentIdx, onClose }) {
    const [idx, setIdx] = useState(currentIdx);

    const prev = () => setIdx((idx - 1 + images.length) % images.length);
    const next = () => setIdx((idx + 1) % images.length);

    // ESC로 닫기
    React.useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    });

    return ReactDOM.createPortal(
        <div className="ImageCarouselModal" onClick={onClose} style={{
            position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.7)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center"
        }}>
            <div className="ImageCarouselModal_Content" onClick={e => e.stopPropagation()} style={{
                position: "relative", width: "80%", height: "80%", background: "#222", borderRadius: "1rem", padding: "1rem", display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <button onClick={prev} style={{
                    width: "10%", left: "-3rem", top: "50%", transform: "translateY(-50%)", display: "flex", justifyContent: "center", alignItems: "center",
                    fontSize: "3.5rem", background: "none", border: "none", color: "#fff", cursor: "pointer"
                }}>&lt;
                </button>
                <img src={images[idx]} alt={`carousel-${idx}`} style={{
                    width: "100%", height: "80%", maxWidth: "80%", maxHeight: "70vh", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,0,0,0.3)", objectFit: "cover"
                }} />
                <button onClick={next} style={{
                      width: "10%", right: "-3rem", top: "50%", transform: "translateY(-50%)", display: "flex", justifyContent: "center", alignItems: "center",
                    fontSize: "3.5rem", background: "none", border: "none", color: "#fff", cursor: "pointer"
                }}>&gt;</button>
                <button onClick={onClose} style={{
                    position: "absolute", right: "1rem", top: "1rem", fontSize: "2rem",
                    background: "none", border: "none", color: "#fff", cursor: "pointer"
                }}>×</button>
                {/* 하단 이미지 인덱스 정보 */}
                <div style={{
                    position: "absolute",
                    left: 0, right: 0, bottom: "1.2rem",
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "1.1rem",
                    letterSpacing: "0.1em",
                    fontWeight: "bold",
                    textShadow: "0 1px 4px #000"
                }}>
                    &lt; {idx + 1} / {images.length} &gt;
                </div>
            </div>
        </div>,
        document.body
    );
}

export default function ProjectItem({
    title,
    inProgress,    // 프로젝트 완성 미완성일 배경색을 변경함
    period,
    summaryTitle,
    details,
    url,
    technologies,
    readmeUrl,      // 이 값에 RAW README.md 주소를 전달
    backImage,
    images = []     // 여러 이미지 배열을 받음
}) {
    const [showModal, setShowModal] = useState(false);
    const [readmeContent, setReadmeContent] = useState("");
    const [showImgModal, setShowImgModal] = useState(false);
    const [imgIdx, setImgIdx] = useState(0);

    const handleReadmeClick = async () => {
        if (!readmeUrl) return;
        if (!readmeContent) {
            try {
                const res = await fetch(readmeUrl);
                const text = await res.text();
                setReadmeContent(text);
            } catch (e) {
                setReadmeContent("README를 불러올 수 없습니다.");
            }
        }
        setShowModal(true);
    };

    // 이미지 클릭 핸들러
    const handleImageClick = (idx) => {
        setImgIdx(idx);
        setShowImgModal(true);
    };

    return (
        <div className="Project_Item">
            <div className="Project_Detail_Front">
                <div className="Project_Detail">
                    <h4
                        className={`Project_Title${inProgress ? " Project_Title--inprogress" : ""}`}
                    >
                        {title}
                    </h4>
                    <div className="ProjectDetails_Period">{period}</div>
                    <div className="ProjectDetails_summary">
                        <h5 className="ProjectDetails_Title">{summaryTitle}</h5>
                        <ul className="ProjectDetails_details">
                            {details.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="ProjectDetails_url">{url}</div>
                    <div className="ProjectDetails_Technologies">{technologies}</div>
                </div>
            </div>
            <div className="Project_Detail_Back">
                <div className="Project_Detail_Back_ImageWrapper">
                    {images && images.length > 0 ? (
                        <img
                            src={images[0]}
                            alt={`${title} project thumbnail`}
                            className="Project_Detail_Back_Image"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleImageClick(0)}
                        />
                    ) : (
                        backImage && (
                            <img
                                src={backImage}
                                alt={`${title} project thumbnail`}
                                className="Project_Detail_Back_Image"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleImageClick(0)}
                            />
                        )
                    )}
                </div>
                <div className="ProjectDetails_btn-container">
                    <button
                        type="button"
                        className="ProjectReadme_btn"
                        onClick={handleReadmeClick}
                        disabled={!readmeUrl}
                    >
                        <FaReadme /> README
                    </button>
                    <button
                        type="button"
                        className="ProjectImg_btn"
                        onClick={() => images.length > 0 ? handleImageClick(0) : window.open(backImage, "_blank")}
                        disabled={images.length === 0 && !backImage}
                    >
                        <FaImage /> 이미지
                    </button>
                </div>
            </div>
            {/* README 모달 */}
            {showModal && ReactDOM.createPortal(
                <div className="ReadmeModal" onClick={() => setShowModal(false)}>
                    <div className="ReadmeModal_Content" onClick={e => e.stopPropagation()}>
                        <div className="ReadmeModal_Header">
                            README.md
                            <button className="ReadmeModal_Close" onClick={() => setShowModal(false)}>×</button>
                        </div>
                        <div className="ReadmeModal_Body">
                            <ReactMarkdown>{readmeContent}</ReactMarkdown>
                        </div>
                    </div>
                </div>,
                document.body
            )}
            {/* 이미지 캐러셀 모달 */}
            {showImgModal && images.length > 0 && (
                <ImageCarouselModal
                    images={images}
                    currentIdx={imgIdx}
                    onClose={() => setShowImgModal(false)}
                />
            )}
        </div>
    )
}
