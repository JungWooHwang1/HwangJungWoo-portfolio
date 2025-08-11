import "../CSS/Project.css"
import ProjectItem from "../common/ProjectItem"
import { GoLink } from "react-icons/go";
import back1 from "../img/back1.jpg";


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
                        readmeUrl="README url goes here."
                        backImage={back1}
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
                        readmeUrl="README url goes here."
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
                        readmeUrl="README url goes here."
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
                        readmeUrl="README url goes here."
                    />

                </div>

                
            </div>
        </section >

    );
}
