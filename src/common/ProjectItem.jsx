import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { FaReadme } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import ReactDOM from "react-dom";

export default function ProjectItem({
    title,
    period,
    summaryTitle,
    details,
    url,
    technologies,
    readmeUrl,      // 이 값에 RAW README.md 주소를 전달
    backImage
}) {
    const [showModal, setShowModal] = useState(false);
    const [readmeContent, setReadmeContent] = useState("");

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

    return (

        <div className="Project_Item">
            <div className="Project_Detail_Front">
                <div className="Project_Detail">
                    <h4 className="Project_Title">{title}</h4>
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
                    <img
                        src={backImage}
                        alt={`${title} project thumbnail`}
                        className="Project_Detail_Back_Image"
                    />
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
                        onClick={() => window.open(backImage, "_blank")}
                        disabled={!backImage}
                    >
                        <FaImage /> 이미지
                    </button>
                </div>
            </div>
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
        </div>
    )
}
