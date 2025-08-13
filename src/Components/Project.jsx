import "../CSS/Project.css"
import ProjectItem from "../common/ProjectItem"
import { GoLink } from "react-icons/go";
import back1 from "../img/back1.jpg";
import back2 from "../img/back2.jpg";


export default function Project() {
    console.log("Project component rendered");
    return (
        <section id="projects" className="Project">
            <div className="Project_Content">
                <div className="Section_Title">
                    <h3 className="Section_Title_Text">PROJECT</h3>
                    <button className="Section_Title_Link_Button">
                        <GoLink style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "black"
                        }} />
                    </button>
                </div>
                <div className="Project_Details">
                    <ProjectItem
                        title="HJW_Portfolio"
                        period="2025.08 (1人 개인프로젝트)"
                        summaryTitle="나만의 포트폴리오 웹 사이트"
                        details={[
                            "나만의 포트폴리오 사이트 개발",
                        ]}
                        url="https://hwangjungwoo-portfolio.web.app/"
                        technologies="React, Firebase"
                        readmeUrl="https://raw.githubusercontent.com/JungWooHwang1/HwangJungWoo-portfolio/master/README.md"
                        backImage={back1}
                    />


                    <ProjectItem
                        title="찾아드림"
                        period="2024.12 (4人 팀 프로젝트)"
                        summaryTitle="Project title goes here."
                        details={[
                            "Feature 1",
                            "Feature 2",
                            "Feature 3"
                        ]}
                        url="Project url goes here."
                        technologies="React, Node.js, MongoDB"
                        readmeUrl=""
                        backImage={back2}
                    />
                    <ProjectItem
                        title="Project Title"
                        period="2024.12"
                        summaryTitle="Project title goes here."
                        details={[
                            "Feature 1",
                            "Feature 2",
                            "Feature 3"
                        ]}
                        url="Project url goes here."
                        technologies="React, Node.js, MongoDB"
                        readmeUrl=""
                    />
                    <ProjectItem
                        title="Create By Yourself"
                        period="2024.12 (6人 팀 프로젝트)"
                        summaryTitle="CBY 프로젝트"
                        details={[
                            "Feature 1",
                            "Feature 2",
                            "Feature 3"
                        ]}
                        url="Project url goes here."
                        technologies="React, Node.js, MongoDB"
                        readmeUrl=""
                    />

                </div>


            </div>
        </section >

    );
}
