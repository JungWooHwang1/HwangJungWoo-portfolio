import React from "react";


export default function ProjectItem({
    title,
    period,
    summaryTitle,
    details,
    url,
    technologies,
    readmeUrl,
    backImage
}) {
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
                    <div className="ProjectDetails_btn-container">
                        <button className="ProjectDetails_btn" onClick={() => window.open(readmeUrl, "_blank")}>README</button>
                    </div>
                </div>
            </div>
            <div className="Project_Detail_Back">
                <img src={backImage} alt={`${title} background`} style={{ width: "50%", height: "50%" }} />
            </div>
        </div>











    )
}
