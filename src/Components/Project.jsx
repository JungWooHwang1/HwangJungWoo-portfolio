import "../CSS/Project.css"
import { GoLink } from "react-icons/go";


export default function Project() {
    console.log("Project component rendered");
    return (
        <section className="Project">
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
                    <div className="Project_Detail">
                        <h4 className="Project_Title">Project Title</h4>
                        <p className="Project_Description">Project description goes here.</p>
                    </div>
                </div>
                <div className="Project_Details">
                    <div className="Project_Detail">

                    </div>
                </div>
                <div className="Project_Details">
                    <div className="Project_Detail">

                    </div>
                </div>
                <div className="Project_Details">
                    <div className="Project_Detail">

                    </div>
                </div>

            </div>
        </section >

    );
}
