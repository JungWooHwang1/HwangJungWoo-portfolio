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
                        title="밥심(Bapsim)"
                        inProgress = {true}  //프로젝트 완성 미완성일 배경색을 변경함 true = 회색빛 
                        period="개발중 (1人 개인프로젝트)"
                        summaryTitle="1인 가구와 혼밥족을 위한, 외롭지 않은 식사 플랫폼 "
                        details={[
                            "1인 가구의 지속적인 증가와 함께 ‘혼밥’이 일상이 되었지만, 여전히 외롭고 어색함을 느끼는 사람들이 많습니다.",
                            "혼밥족을 위한 정보, 장소, 사람을 연결해주는 전용 플랫폼이 부재합니다."
                        ]}
                        
                        technologies="React Native, TypeScript, Firebase"
                        readmeUrl="https://raw.githubusercontent.com/JungWooHwang1/mukbang/main/README.md"
                        images={[back1, back2]}
                    />
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
                        readmeUrl="https://raw.githubusercontent.com/JungWooHwang1/PathFinder/main/README.md"
                        
                    />
                    <ProjectItem
                        title="2024Hackathon"
                        period="2024.12"
                        summaryTitle="Project title goes here."
                        details={[
                            "Feature 1",
                            "Feature 2",
                            "Feature 3"
                        ]}
                        url="Project url goes here."
                        technologies="React, Node.js, MongoDB"
                        readmeUrl="https://raw.githubusercontent.com/JungWooHwang1/2024Hackertone/main/README.md"
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
                        readmeUrl="https://raw.githubusercontent.com/JungWooHwang1/3-1_Web_Project/main/README.md"
                    />

                </div>


            </div>
        </section >

    );
}
